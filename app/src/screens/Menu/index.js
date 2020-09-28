import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    GameButton,
    GameButtonText,
    HistoricButton,
    HistoricButtonText,
    } from './style';

import FangsContainer from '../../components/FangsContainer';

export default () => {

    const navigation = useNavigation();

    return (
     <FangsContainer>
         <GameButton>
             <GameButtonText onPress = {() => navigation.navigate('NewGame')}>
                Novo Jogo
             </GameButtonText>
         </GameButton>

         <HistoricButton>
             <HistoricButtonText>
                Jogadores
             </HistoricButtonText>
         </HistoricButton>
     </FangsContainer>
    );
}
