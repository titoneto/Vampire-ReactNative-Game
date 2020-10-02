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
            const storageProfessions = await AsyncStorage.getItem('Professions');
            const storagePersonalities = await AsyncStorage.getItem('Personalities');

            const players = JSON.parse(storagePlayers);
            const professions = JSON.parse(storageProfessions);
            const personalities = JSON.parse(storagePersonalities);
            
            if(players != null) {
                gameContext({
                    type: 'storagedPlayers',
                    payload: {
                        players: players
                    }
                }) 
            }


            if(professions != null) {
                gameContext({
                    type: 'storagedProfessions',
                    payload: {
                        professions: professions
                    }
                }) 
            }

            if(personalities != null) {
                gameContext({
                    type: 'storagedPersonalities',
                    payload: {
                        personalities: personalities
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
