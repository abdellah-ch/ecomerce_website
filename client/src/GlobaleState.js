import React ,{createContext,useState} from 'react'

export const GlobaleState = createContext({})

export const DataProvider = ({children}) =>{

    return (

        <GlobaleState.Provider value={"global"}>
        
        {children}

        </GlobaleState.Provider>
    )

}