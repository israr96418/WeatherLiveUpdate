import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


const intialState = {
    transction: [
        // { id: 1, text: "flower", amount: -20 },
        // { id: 2, text: "Salary", amount: 300 },
        // { id: 3, text: "Boook", amount: -10 },
        // { id: 4, text: "Camera", amount: 150 }
    ]
}

//create Context


export const GlobalContext = createContext(intialState)

//create Global provider

export const GlobalProvide = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialState)


    //Action:

    function deleteTransction(id) {
        dispatch({
            type: 'Delete_Transction',
            payload: id
        });
    }
    function addTransction(transction) {
        dispatch({
            type: 'Add_Transction',
            payload: transction
        });
    }


    return (
        <GlobalContext.Provider value={
            {
                transction: state.transction,
                deleteTransction,
                addTransction
            }
            }>
            {children}
        </GlobalContext.Provider>
    );
}