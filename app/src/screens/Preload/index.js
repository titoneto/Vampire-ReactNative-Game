import React, {useEffect, useContext}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    LogoHeaderArea,
    LogoFooterArea,
    LoadingIcon,
    LogoImage
} from './style';

import { PlayersContext } from '../../contexts/PlayersContext';

import FangsUp from  '../../assets/FangsUp.png';
import FangsDown from  '../../assets/FangsDown.png';

export default () => {

    const gameContext = useContext(PlayersContext).dispatch;
    const navigation = useNavigation();

    useEffect( async ()=>{
        const storagePlayers = await AsyncStorage.getItem('Players');
        if (storagePlayers){
            gameContext({
                type: 'setPlayers',
                payload: {
                    players: storagePlayers
                }
            })
        }
        navigation.navigate('Menu');
    },[]);

    return (
        <Container>
            <LogoHeaderArea>
                <LogoImage source = {FangsUp} />
            </LogoHeaderArea>

            <LoadingIcon size = 'large' color = '#FFFFFF'/>

            <LogoFooterArea>
                <LogoImage source = {FangsDown} />
            </LogoFooterArea>

          
            
        </Container>
    );
}
