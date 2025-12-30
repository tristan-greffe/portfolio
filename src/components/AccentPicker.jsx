import { useState } from 'react'
import { FiDroplet, FiX } from 'react-icons/fi'
import { useTheme, ACCENT_COLORS } from '../context/ThemeContext'

const AccentPicker = () => {
  const [open, setOpen] = useState(false)
  const { accent, setAccent } = useTheme()

  const handleSelect = (color) => {
    setAccent(color)
    setOpen(false)
  }

  return (
    <div className="accent-picker">
      {open && (
        <div className="accent-picker__panel">
          <p className="accent-picker__label">Couleur d'accent</p>
          <div className="accent-picker__swatches">
            {ACCENT_COLORS.map((color) => (
              <button
                key={color.value}
                className={`accent-picker__swatch ${accent === color.value ? 'accent-picker__swatch--active' : ''}`}
                style={{ background: color.value }}
                onClick={() => handleSelect(color.value)}
                aria-label={color.name}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      <button
        className={`accent-picker__fab ${open ? 'accent-picker__fab--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Changer la couleur d'accent"
        style={{ background: open ? 'var(--text-muted)' : accent }}
      >
        {open ? <FiX size={20} /> : <FiDroplet size={20} />}
      </button>
    </div>
  )
}

export default AccentPicker
