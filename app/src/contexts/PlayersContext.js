import React, {createContext, useReducer} from 'react';

import { professions, personalities } from './Initialstate';

import MaleIcon from '../assets/user.svg';
import DinoIcon from '../assets/tyrannosaurus-rex.svg';
import FemaleIcon from '../assets/woman-avatar.svg';

export const PlayersContext = createContext();


const initialState = {
    players: [
        {name: "Tito", icon: MaleIcon,       enable: true},
        {name: "Thays", icon: DinoIcon,      enable: true},
        {name: "Tito2", icon: DinoIcon,      enable: true},
        {name: "Thays2", icon: FemaleIcon,   enable: true},
        {name: "Tito", icon: MaleIcon,       enable: true},
        {name: "Thays", icon: FemaleIcon,    enable: true},
        {name: "Tito2", icon: DinoIcon,      enable: true},
     
    ],

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
