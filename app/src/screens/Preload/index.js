import React, {useEffect, useContext}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { LoadingIcon } from './style';

import { PlayersContext } from '../../contexts/PlayersContext';

import FangsContainer from '../../components/FangsContainer';

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
        <FangsContainer>
            <LoadingIcon size = 'large' color = '#FFFFFF'/>
        </FangsContainer>             
    );
}
