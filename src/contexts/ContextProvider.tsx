import React, { createContext, useContext, useState, ReactNode } from "react";

type ContextProviderProps = {
    children: ReactNode;
}

type StateContextType = { 
    activeMenu: boolean,
    setActiveMenu: (newState: boolean) => void,

    isClicked: {
        chat: boolean,
        cart: boolean,
        userProfile: boolean,
        notification: boolean
    },
    setIsClicked: (newState: {
        chat: boolean,
        cart: boolean,
        userProfile: boolean,
        notification: boolean
    }) => void,

    handleClick: (clicked: string) => void,

    screenSize: number,
    setScreenSize: (newState: number) => void,

    currentColor: string,
    setCurrentColor: (newState: string) => void,

    currentMode: string,
    setCurrentMode: (newState: string) => void,

    themeSettings: boolean,
    setThemeSettings: (newState: boolean) => void,

    setMode: (e: React.ChangeEvent<HTMLInputElement>) => void,
    
    setColor: (color: string) => void,

    initialState: {
        chat: boolean,
        cart: boolean,
        userProfile: boolean,
        notification: boolean,
    }
}

const stateInicialValue = {
    activeMenu: false,
    setActiveMenu: () => {},

    isClicked: {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false
    },
    setIsClicked: () => {},

    handleClick: () => {},

    screenSize: 0,
    setScreenSize: () => {},

    currentColor: '#03C9D7',
    setCurrentColor: () => {},

    currentMode: 'Light',
    setCurrentMode: () => {},

    themeSettings: false,
    setThemeSettings: () => {},

    setColor: () => {},

    setMode: () => {},

    initialState: {
        chat: false,
        cart: false,
        userProfile: false,
        notification: false
    }
}

const StateContext = createContext<StateContextType>(stateInicialValue);

type InitialStateProps = {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean,
}

export const initialState: InitialStateProps = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(0)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)

        setThemeSettings(false)
    }

    const setColor = (color: string) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)

        setThemeSettings(false)
    }

    const handleClick = (clicked: string) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return(
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                handleClick,
                screenSize, setScreenSize,
                currentColor, setCurrentColor,
                currentMode, setCurrentMode,
                themeSettings, setThemeSettings,
                setMode, setColor,
                initialState
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)