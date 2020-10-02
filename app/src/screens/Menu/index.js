import React, { useEffect } from 'react';
import {useNavigation} from '@react-navigation/native';
import {
    GameButton,
    GameButtonText,
    HistoricButton,
    HistoricButtonText,
    } from './style';

import FangsContainer, {FangsUpRef, FangsDownRef} from '../../components/FangsContainer';

export default () => {

    const navigation = useNavigation();

    useEffect(()=>{
        FangsUpRef.current.fadeInDown();
        FangsDownRef.current.fadeInUp();
    },[]);

    const NewGameCLick = () => {
        navigation.navigate('NewGame');
    }

    return (
     <FangsContainer>
         <GameButton>
             <GameButtonText onPress = {NewGameCLick}>
                Novo Jogo
             </GameButtonText>
         </GameButton>

         <HistoricButton >
             <HistoricButtonText >
                Jogadores
             </HistoricButtonText>
         </HistoricButton>
     </FangsContainer>
    );
}
