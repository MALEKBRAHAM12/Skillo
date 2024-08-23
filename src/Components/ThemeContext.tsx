// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Theme = {
    background: string;
    text: string;
    primary: string;
    secondary: string;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const lightTheme: Theme = {
    background: '#2F4558',
    text: '#2F4558',
    primary: '',
    secondary: ''
};

const darkTheme: Theme = {
    background: '#121212',
    text: '#FFFFFF',
    primary: '',
    secondary: ''
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

type ThemeProviderProps = {
    children: ReactNode; // Utilisation de ReactNode pour typer les enfants
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(lightTheme); // Par défaut, utilisez le thème light

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
