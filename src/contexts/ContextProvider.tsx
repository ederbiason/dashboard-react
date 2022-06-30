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
    setScreenSize: () => {}
}

const StateContext = createContext<StateContextType>(stateInicialValue);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(0)

    const handleClick = (clicked: string) => {
        setIsClicked({...initialState, [clicked]: true})
    }

    return(
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize, 
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)