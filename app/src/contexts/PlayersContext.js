import React, {createContext, useReducer} from 'react';

import { professions, personalities} from '../components/CharactersAndIcons';

export const PlayersContext = createContext();


const initialState = {
    players: [],

    professions: professions ,

    personalities: personalities,
}

const PlayersReducer = (state, action) => {
    switch(action.type){
        case 'addPlayer':
            return{...state, players: state.players.concat({
                name: action.payload.name,
                icon: action.payload.icon,
                allyDefeats: 0,
                allyVictories: 0,
                enemyDefeats: 0,
                enemyVictories: 0,
                enable: true
            })};
        break;
        case 'removePlayer':          
            return{...state, players: state.player.map(item => item.name != action.payload.name)};
        break;

        case 'storagedPlayers':          
            return{...state, players: action.payload.players};     
        break;
        case 'storagedProfessions':
            return{...state, professions: state.professions.map((item,key)=>(
                  {...item, enable: action.payload.professions[key].enable}
            ))};     
        break;
        case 'storagedPersonalities':
            return{...state, personalities: state.personalities.map((item,key)=>(
                  {...item, enable: action.payload.personalities[key].enable}
        ))};      
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
