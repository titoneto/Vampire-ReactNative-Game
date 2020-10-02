import React, {useEffect, useContext}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { LoadingIcon } from './style';

import { PlayersContext } from '../../contexts/PlayersContext';

import FangsContainer, {FangsUpRef, FangsDownRef} from '../../components/FangsContainer';

export default () => {

    const gameContext = useContext(PlayersContext).dispatch;
    const navigation = useNavigation();

    //Animation Mount
    useEffect(()=>{
        FangsUpRef.current.fadeInDown();
        FangsDownRef.current.fadeInUp();

        //return FangsUpRef.current.fadeInDown() && FangsDownRef.current.fadeInUp();
    },[]);


    useEffect(()=>{
        const storageCheck = async()=>{
            const storagePlayers = await AsyncStorage.getItem('Players');
            const players = JSON.parse(storagePlayers);
            
            if(players != null) {
                gameContext({
                    type: 'asyncToContext',
                    payload: {
                        players: players
                    }
                }) 
            }
            navigation.navigate('Menu');
        }
        storageCheck();
        
    },[]);

    return (
        <FangsContainer>
            <LoadingIcon size = 'large' color = '#FFFFFF'/>
        </FangsContainer>             
    );
}
