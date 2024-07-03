import { useState, useEffect } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="p-2 bg-gray-800 text-white rounded"
        >
            Toggle Theme
        </button>
    )
}

export default ThemeToggle
