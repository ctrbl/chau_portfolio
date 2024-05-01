import { useState, useCallback, useEffect } from "react"; 

// Custom Hook to manage theme
export const useThemeSwitcher = () => {
    const [theme, setTheme] = useState('light'); // default theme

    // Function to load theme from localStorage or system preference
    const getCurrentTheme = useCallback(() => {
        if (typeof window !== 'undefined') {
        let storedTheme = localStorage.getItem('template.theme');
        if (storedTheme) {
            return storedTheme;
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        }
        return 'light'; // default theme for SSR
    }, []);

    // Function to apply the theme to the document
    const loadTheme = useCallback((theme) => {
        const root = document.querySelector(':root');
        root.setAttribute('color-scheme', theme);
        setTheme(theme);
    }, []);

    // Toggling the theme
    const toggleTheme = useCallback(() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('template.theme', newTheme);
        loadTheme(newTheme);
    }, [theme, loadTheme]);

    // Load theme on component mount
    useEffect(() => {
        const initialTheme = getCurrentTheme();
        loadTheme(initialTheme);
    }, [getCurrentTheme, loadTheme]);

    return { theme, toggleTheme };
};
  
// Component to display the theme switcher button
export const ThemeSwitcherButton = () => {
    const { theme, toggleTheme } = useThemeSwitcher();

    const icon = theme === 'dark' ? 'ph-sun' : 'ph-moon-stars';
    return (
        <button id="color-switcher" className="color-switcher header__switcher btn" type="button" role="switch" aria-label="light/dark mode" aria-checked="false" aria-hidden="true" onClick={toggleTheme}>
            <em></em><i className={`ph-bold ${icon}`}></i>
        </button>
    );
};