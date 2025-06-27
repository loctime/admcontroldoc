import Switch from '@mui/material/Switch'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setMounted(true)
    setChecked(theme === 'dark')
  }, [theme])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? 'dark' : 'light')
  }

  // Evitar renderizado durante SSR para prevenir hidratación
  if (!mounted) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className="text-xs">☀️</span>
        <Switch
          checked={false}
          disabled
          inputProps={{
            'aria-label': 'Cargando tema'
          }}
          color="primary"
        />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span className="text-xs">{checked ? '🌙' : '☀️'}</span>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{
          'aria-label': checked ? 'Activar modo claro' : 'Activar modo oscuro'
        }}
        color="primary"
      />
    </div>
  )
}
