import React, { useState,useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
    PreGameArea,
    PreGameHeader,
    PreGameBody,
    Scroll,
    ScrollVerticalArea,
    ScrollHorizontalArea,

    HeaderText,
    HeaderButton,
    ConfirmButton,

    ScrollButtom,
    ScrollButtomName,

    AddButtonArea

} from './style';

import { PlayersContext } from '../../contexts/PlayersContext';
import { playersIcons } from '../../components/CharactersAndIcons';

import FangsContainer, {FangsUpRef, FangsDownRef} from '../../components/FangsContainer';
import NewPlayerModal from '../../components/NewPLayerModal';

import AddIcon from '../../assets/add.svg';
import DownIcon from '../../assets/svg/013-down-chevron.svg';
import UpIcon from '../../assets/svg/014-up-chevron.svg';


export default () => {

    const playersContext = useContext(PlayersContext);

    const [personalitiesSee, setPersonalitiesSee] = useState(false);
    const [professionsSee, setProfessionsSee] = useState(false);
    const [playersSee, setPlayersSee] = useState(false);
    
    const [newPlayerModalShow, setNewPlayerModalShow] = useState(false);
    
    const[playersList, setPlayerList] = useState([]);
    const[professionsList, setProfessionsList] = useState([]);
    const[personalitiesList, setPersonalitiesList] = useState([]);

    useEffect(()=>{
        setPlayerList(playersContext.state.players);
        setProfessionsList(playersContext.state.professions);
        setPersonalitiesList(playersContext.state.personalities);

        //animation
        FangsUpRef.current.fadeInDown();
        FangsDownRef.current.fadeInUp();

    },[]);

    useEffect(()=>{
        const storePlayers = async () =>{
            const jsonPLayers = JSON.stringify(playersContext.state.players);
            await AsyncStorage.setItem('Players', jsonPLayers);    
        }
        storePlayers();
        
        setPlayerList(playersContext.state.players);
    },[playersContext.state.players]);



    const showPlayersCLick = () => {
        if(playersSee){        
            FangsUpRef.current.fadeInDown();
            FangsDownRef.current.fadeInUp();
            setPlayersSee(false);
        } else {
            FangsUpRef.current.fadeIn();
            FangsDownRef.current.fadeIn();
            setPlayersSee(true);
        }    
    }
    const showProfessionsCLick = () => {
        if(professionsSee){        
            FangsUpRef.current.fadeInDown();
            FangsDownRef.current.fadeInUp();
            setProfessionsSee(false);
        } else {
            FangsUpRef.current.fadeIn();
            FangsDownRef.current.fadeIn();
            setProfessionsSee(true);
        } 
    }
    const showPersonalitiesCLick = () => {
        if(personalitiesSee){        
            FangsUpRef.current.fadeInDown();
            FangsDownRef.current.fadeInUp();
            setPersonalitiesSee(false);
        } else {
            FangsUpRef.current.fadeIn();
            FangsDownRef.current.fadeIn();
            setPersonalitiesSee(true);
        } 
    }


    const playerShortPress = (key) => {
        setPlayerList(playersList.map((data, k) =>{
            if(k == key){
                return {...data, enable: !data.enable};
            } else {
                return data;
            }
        }));   
    }
    const playerLongPress = (key) =>{

    }
    const handleAddButtonCLick = () => {
        setNewPlayerModalShow(true);
    }




    const professionShortPress = (key) => {
        setProfessionsList(professionsList.map((data, k) =>{
            if(k == key){
                return {...data, enable: !data.enable};
            } else {
                return data;
            }
        }));
    }
    const personalityShortPress = (key) => {
        setPersonalitiesList(personalitiesList.map((data, k) =>{
            if(k == key){
                return {...data, enable: !data.enable};
            } else {
                return data;
            }
        }));
    }
    const descriptionPress = (item) =>{
        alert(item.description);
    }
    const confirmButtonPress = () =>{
        FangsUpRef.current.fadeOutUp();
        FangsDownRef.current .fadeOutDown();
    }

    return (
       <FangsContainer >
        
            <PreGameArea
                bodyActivate = {playersSee || professionsSee || personalitiesSee}
            >
                <PreGameHeader>
                    {!professionsSee && !personalitiesSee && 
                        <HeaderButton onPress = {showPlayersCLick}>
                            {playersSee ? <UpIcon height = "25" width = "25" fill = "#000000" />
                                :      <DownIcon height = "25" width = "25" fill = "#FFFFFF" /> }
                            
                            <HeaderText color = {playersSee ? "#000000" : "#FFFFFF"} >Jogadores </HeaderText>
                        </HeaderButton>
                    }

                    {!playersSee && !personalitiesSee && 
                        <HeaderButton onPress = {showProfessionsCLick}>
                            {professionsSee ? <UpIcon height = "25" width = "25" fill = "#000000" />
                                :           <DownIcon height = "25" width = "25" fill = "#FFFFFF" /> }

                            <HeaderText color = {professionsSee ? "#000000" : "#FFFFFF"} >Profissões </HeaderText>
                        </HeaderButton>
                    }

                    {!playersSee && !professionsSee && 
                        <HeaderButton onPress = {showPersonalitiesCLick}>
                            {personalitiesSee ? <UpIcon height = "25" width = "25" fill = "#000000" />
                                    :        <DownIcon height = "25" width = "25" fill = "#FFFFFF" /> }

                            <HeaderText color = {personalitiesSee ? "#000000" : "#FFFFFF"}>Personalidades </HeaderText>
                        </HeaderButton>
                    }
                    {!playersSee && !professionsSee && !personalitiesSee &&
                        <ConfirmButton onPress = {confirmButtonPress}>
                            <DownIcon height = "25" width = "25" fill = "#000000"/> 
                            <HeaderText color = "#000000"> Confirmar! </HeaderText>
                        </ConfirmButton>
                    }

                </PreGameHeader>
                <PreGameBody>
                    
                    {playersSee &&  
                        <Scroll horizontal>
                                <ScrollVerticalArea>
                                    <ScrollHorizontalArea>
                                        {playersList.map((item,key) =>{
                                            if(key % 2 == 0){
                                                return (
                                                    <ScrollButtom key = {key}
                                                        onPress = {() => playerShortPress(key)}
                                                        onLongPress = {playerLongPress(key)}
                                                        color = {item.enable ? "#000000" : "#E6E6E6"}
                                                    >
                                                        {playersIcons.map((iconItem, index) =>{
                                                            if(iconItem.name == item.icon){
                                                                return(
                                                                    <iconItem.icon fill = {item.enable ? "#900000" : "#000000"}
                                                                    width = "58" height = "58"/>
                                                                )
                                                            }
                                                        })}

                                                        <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                        >{item.name}</ScrollButtomName>
                                                    </ScrollButtom>
                                                );
                                            }           
                                        })}                                      
                                    </ScrollHorizontalArea>

                                    <ScrollHorizontalArea>
                                        {playersList.map((item,key) =>{
                                            if(key % 2 == 1){
                                                return (
                                                    <ScrollButtom key = {key}
                                                        onPress = {() => playerShortPress(key)}
                                                        onLongPress = {() => changePress(key)}
                                                        color = {item.enable ? "#000000" : "#E6E6E6"}
                                                    >
                                                        {playersIcons.map((iconItem, index) =>{
                                                            if(iconItem.name == item.icon){
                                                                return(
                                                                    <iconItem.icon fill = {item.enable ? "#900000" : "#000000"}
                                                                    width = "58" height = "58"/>
                                                                )
                                                            }
                                                        })}

                                                        <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                        >{item.name}</ScrollButtomName>
                                                    </ScrollButtom>
                                                );
                                            }           
                                        })}                                      
                                    </ScrollHorizontalArea>
                                </ScrollVerticalArea>

                            <AddButtonArea>
                                    <ScrollButtom
                                        onPress = {() => handleAddButtonCLick()}
                                        color = "#E6E6E6"
                                    >
                                        <AddIcon fill ="#000000" width = "58" height = "58" />
                                   </ScrollButtom>
                            </AddButtonArea>

                        </Scroll>
                    }

                    {professionsSee &&  
                        <Scroll horizontal>
                            <ScrollVerticalArea>
                                <ScrollHorizontalArea>
                                    {professionsList.length > 0 && professionsList.map((item,key) =>{
                                        if(key % 2 == 0){
                                            return (
                                                <ScrollButtom key = {key}
                                                    onPress = {() => professionShortPress(key)}
                                                    onLongPress = {() => descriptionPress(item)}
                                                    color = {item.enable ? "#000000" : "#E6E6E6"}
                                                >

                                                    <item.icon fill ={item.enable ? "#900000" : "#000000"} 
                                                    width = "58" height = "58"/>

                                                    <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                    >{item.name}</ScrollButtomName>

                                                </ScrollButtom>
                                            );
                                        }           
                                    })}                                      
                                </ScrollHorizontalArea>

                                <ScrollHorizontalArea>
                                    {professionsList.length > 0 && professionsList.map((item,key) =>{
                                        if(key % 2 == 1){
                                            return (
                                                <ScrollButtom key = {key}
                                                    onPress = {() => professionShortPress(key)}
                                                    onLongPress = {() => descriptionPress(item)}
                                                    color = {item.enable ? "#000000" : "#E6E6E6"}
                                                >

                                                    <item.icon fill = {item.enable ? "#900000" : "#000000"} 
                                                    width = "58" height = "58"/>

                                                    <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                    >{item.name}</ScrollButtomName>

                                                </ScrollButtom>
                                            );
                                        }           
                                    })}                                      
                                </ScrollHorizontalArea>
                            </ScrollVerticalArea>
                        </Scroll>
                    }

                    {personalitiesSee &&  
                        <Scroll horizontal>
                            <ScrollVerticalArea>
                                <ScrollHorizontalArea>
                                    {personalitiesList.length > 0 && personalitiesList.map((item,key) =>{
                                        if(key % 2 == 0){
                                            return (
                                                <ScrollButtom key = {key}
                                                    onPress = {() => personalityShortPress(key)}
                                                    onLongPress = {() => descriptionPress(item)}
                                                    color = {item.enable ? "#000000" : "#E6E6E6"}
                                                >

                                                    <item.icon fill = {item.enable ? "#900000" : "#000000"} 
                                                    width = "58" height = "58"/>
                                                    
                                                    <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                    >{item.name}</ScrollButtomName>

                                                </ScrollButtom>
                                            );
                                        }           
                                    })}                                      
                                </ScrollHorizontalArea>

                                <ScrollHorizontalArea>
                                    {personalitiesList.length > 0 && personalitiesList.map((item,key) =>{
                                        if(key % 2 == 1){
                                            return (
                                                <ScrollButtom key = {key}
                                                    onPress = {() => personalityShortPress(key)}
                                                    onLongPress = {() => descriptionPress(item)}
                                                    color = {item.enable ? "#000000" : "#E6E6E6"}
                                                >

                                                    <item.icon fill = {item.enable ? "#900000" : "#000000"} 
                                                    width = "58" height = "58"/>
                                                    
                                                    <ScrollButtomName color = {item.enable ? "#E6E6E6" : "#000000" }
                                                    >{item.name}</ScrollButtomName>

                                                </ScrollButtom>
                                            );
                                        }           
                                    })}                                      
                                </ScrollHorizontalArea>
                            </ScrollVerticalArea>
                        </Scroll>
                    }

                    
                </PreGameBody>  
            </PreGameArea>

            <NewPlayerModal 
                show = {newPlayerModalShow}
                setShow = {setNewPlayerModalShow}
            />     
       </FangsContainer>
    );
}