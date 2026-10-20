import { useEffect, useState } from 'react'

const GITHUB_USER = 'tristan-greffe'
const CACHE_KEY = 'portfolio.github-activity'
const CACHE_TTL = 3 * 60 * 60 * 1000

// The contribution calendar is not exposed by the REST API (GraphQL only, which
// requires a token): this public proxy serves it without authentication.
const CALENDAR_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`
// Counts issues across every repository, including the organisations I work in
const ISSUES_URL = `https://api.github.com/search/issues?q=author:${GITHUB_USER}+type:issue&per_page=1`

const readCache = () => {
  try {
    const cached = JSON.parse(window.localStorage.getItem(CACHE_KEY))
    return cached && cached.activity ? cached : null
  } catch (error) {
    return null
  }
}

const writeCache = (activity) => {
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ fetchedAt: Date.now(), activity }))
  } catch (error) {
    // Storage disabled or quota exceeded: data will simply be fetched again
  }
}

const fetchJson = async (url, signal) => {
  const response = await fetch(url, { signal, headers: { Accept: 'application/json' } })
  if (!response.ok) throw new Error(`${url} → ${response.status}`)
  return response.json()
}

const settled = (result) => (result.status === 'fulfilled' ? result.value : null)

const countActiveDays = (days) => days.filter((day) => day.count > 0).length

const longestStreak = (days) => {
  let best = 0
  let run = 0
  days.forEach((day) => {
    run = day.count > 0 ? run + 1 : 0
    if (run > best) best = run
  })
  return best
}

const buildActivity = ([calendar, issues]) => {
  const days = calendar && Array.isArray(calendar.contributions) ? calendar.contributions : []

  return {
    days,
    contributions: calendar && calendar.total ? calendar.total.lastYear : null,
    activeDays: days.length ? countActiveDays(days) : null,
    bestStreak: days.length ? longestStreak(days) : null,
    issues: issues ? issues.total_count : null
  }
}

export const useGitHubActivity = () => {
  const [state, setState] = useState(() => {
    const cached = readCache()
    return {
      activity: cached ? cached.activity : null,
      status: cached ? 'ready' : 'loading',
      fetchedAt: cached ? cached.fetchedAt : 0
    }
  })

  useEffect(() => {
    if (state.activity && Date.now() - state.fetchedAt < CACHE_TTL) return

    const controller = new AbortController()

    const load = async () => {
      // allSettled: a single failing source degrades the section, it never empties it
      const results = await Promise.allSettled([
        fetchJson(CALENDAR_URL, controller.signal),
        fetchJson(ISSUES_URL, controller.signal)
      ])

      if (controller.signal.aborted) return

      const sources = results.map(settled)

      if (sources.every((source) => source === null)) {
        setState((previous) => ({ ...previous, status: previous.activity ? 'ready' : 'error' }))
        return
      }

      const activity = buildActivity(sources)
      writeCache(activity)
      setState({ activity, status: 'ready', fetchedAt: Date.now() })
    }

    load()
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { activity: state.activity, status: state.status }
}
