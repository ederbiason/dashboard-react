import React, { createContext, useContext, useState, ReactNode } from "react";

type ContextProviderProps = {
    children: ReactNode;
}

type StateContextType = { 
    activeMenu: boolean,
    setActiveMenu: (newState: boolean) => void
}

const stateInicialValue = {
    activeMenu: false,
    setActiveMenu: () => {}
}

const StateContext = createContext<StateContextType>(stateInicialValue);

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [activeMenu, setActiveMenu] = useState(true)

    return(
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)