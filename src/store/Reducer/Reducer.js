// import React from 'react';

export const Reducer = (state, action) =>{

    switch(action.type){
        case 'fetch-data' :
            return {
                ...state, data : action.data
            }
        default :
            return state;
    }

}