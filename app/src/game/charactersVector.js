import VampiroIcon from '../assets/vampire.svg';
import ServoVampIcon from '../assets/vampire-teeth';
import CacadorIcon from '../assets/crossbow.svg';
import DetetiveIcon from '../assets/magnifying-glass.svg';
import AlquimistaIcon from '../assets/halloween-test-tube.svg';
import SacerdoteIcon from '../assets/italian-priest.svg';

import NormalIcon from '../assets/user.svg';
import BebadoIcon from '../assets/beer.svg';
import LoucoIcon from '../assets/crazy.svg';
import PoliticoIcon from '../assets/politics.svg';
import CasalIcon from '../assets/love.svg';
import ImuneIcon from '../assets/security.svg';


export const AllEspecials = [
    {name: "Servo Vampiro",       icon: ServoVampIcon}, 
];

export const AllProfissions  = [
    {name: "Vampiro",             icon: VampiroIcon,     type: "Enemy"},
    {name: "Caçador de Vampiros", icon: CacadorIcon,     type: "Observer"},
    {name: "Detetive",            icon: DetetiveIcon,    type: "Observer"},
    {name: "Alquimista",          icon: AlquimistaIcon,  type: "Other"},
    {name: "Sacerdote",           icon: SacerdoteIcon,   type: "Other"},
];

export const AllPersonalities = [
    {name: "Normal",   icon: NormalIcon},
    {name:  "Bebado",   icon: BebadoIcon},
    {name:  "Louco",    icon: LoucoIcon},
    {name:  "Politico", icon: PoliticoIcon},
    {name:  "Casal",    icon: CasalIcon},
    {name:  "Imune",    icon: ImuneIcon},
];


const randomInt = (max) => {
    return Math.floor(max  * Math.random());
}

export const RandomList = (players, enemys, observers, others, personalities) => {
    let arrayForGame = [];

    let observer1 = randomInt(players.length);
    let observer2 = randomInt(players.length);
    let enemy = randomInt(players.length);

    while(enemy == observer1){
        enemy = randomInt(players.length);
    }

    for(let i = 0; i < players.leght; i++){
        if (i == observer1 || i == observer2){
            arrayForGame.push({
                nome: players.name,
                profission: observers[randomInt(observers.length)],
                personality: personalities[randomInt(personalities.length)]
            })
        } 
        else if(i == enemy){
            arrayForGame.push({
                nome: players.name,
                profission: enemys[randomInt(enemys.length)],
                personality: personalities[randomInt(personalities.length)]
            })
        } else {
            arrayForGame.push({
                nome: players.name,
                profission: others[randomInt(others.length)],
                personality: personalities[randomInt(personalities.length)]
            })
        }
    }
    
    return arrayForGame;
}