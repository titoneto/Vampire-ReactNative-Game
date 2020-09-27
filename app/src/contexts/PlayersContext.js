import React, {createContext, useReducer} from 'react';

export const PlayersContext = createContext();


const initialState = {
    players: [],
}

const PlayersReducer = (state, action) => {
    switch(action.type){
        case 'addPlayer':
            return{...state, players: state.players.concat({
                name: action.payload.name,
                allyDefeats: 0,
                allyVictories: 0,
                enemyDefeats: 0,
                enemyVictories: 0,
            })};
        break;
        case 'removePlayer':          
            return{...state, players: state.player.map(item => item.name != action.payload.name)};
        break;

        case 'setPlayer':          
            return{...state, players: action.payload.players};
        break;
    
        default:
            return state;
    }
}

export default ({children}) => {

    const [state, dispatch] = useReducer(PlayersReducer, initialState);

    return (
        <PlayersContext.Provider value={{state, dispatch}}>
            {children}
        </PlayersContext.Provider>
    );
}
