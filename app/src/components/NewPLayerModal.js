import React, { useState, useContext } from 'react';
import styled from 'styled-components/native';

import {PlayersContext} from '../contexts/PlayersContext';

import {playersIcons} from '../components/CharactersAndIcons';

import AddIcon from '../assets/add2.svg';
import DownIcon from '../assets/svg/013-down-chevron.svg';
import EditIcon from '../assets/edit.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex:1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
`;

const ModalBody = styled.View`
    background-color: #E6E6E6;
    border-radius: 20px;
    min-height: 300px;
    padding: 10px 20px 40px 20px;
`;

const ModalText = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

const ModalButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
    justify-content: center;
    align-items: center;
`;

const AvatarChooseArea = styled.View`
    margin-top: 5px;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
`;

const AvatarItem = styled.TouchableOpacity`
    border: 1px solid #000000;
    background-color: ${props => props.color};
    height: 90px;
    width: 90px;
    margin-left: 10px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

const DownArea = styled.View`
    margin-top: 20px;
    height: 60px;

    flex-direction: row;
    align-items: center; 
`;

const InputArea = styled.View`
    border-radius: 20px;
    background-color: #000000;
    padding:10px 20px;

    align-items: center;
    margin-right: 10px;
    flex:1;
    flex-direction: row; 
`;

const ModalInput = styled.TextInput`
    flex:1;
    font-size: 20px;
    font-weight: bold;
    color: #900000;
`;



export default ({show, setShow}) => {

    const context = useContext(PlayersContext);

    const [iconSelected, setIconSelected] = useState(playersIcons.map(()=>(false)));

    const [playerName, setPlayerName] = useState("");
    

    const handleCloseButton = () =>{
        setShow(false);
        setIconSelected(iconSelected.map(()=>(false)));
        setPlayerName("");
    }

    const avatarClick = (key) => {
        setIconSelected(iconSelected.map((item,k) => (k == key ? true:false)));
    }


    const textSize = (t) => {
        if(t.length <= 10){
            setPlayerName(t);
        } else {
            alert("Número máximo de caracteres");
        }
    }

    const finishCLick = () => {
        for(let i = 0; i < iconSelected.length; i++){
            if(iconSelected[i] && playerName != ""){
                context.dispatch({
                    type: 'addPlayer',
                    payload:{
                        name: playerName,
                        icon: playersIcons[i].name
                    }
                });
                setShow(false);
                setIconSelected(iconSelected.map(()=>(false)));
                setPlayerName("");
            }
        }
        
    }

    return(
        <Modal
            transparent ={true}
            visible = {show}
            animationType = "fade"
        >
            <ModalArea>
                <ModalBody>
                    <ModalButton onPress = {handleCloseButton}>
                        <DownIcon width = "40" height = "40" fill = "#000000"/>
                    </ModalButton>
                    <ModalText>Selecione o Avatar:</ModalText>
                    <AvatarChooseArea>
                        {playersIcons.map((iconItem,key) => (
                            <AvatarItem key = {key} onPress = {() => avatarClick(key)} 
                            color = {iconSelected[key] ? "#000000" : "#E6E6E6"}>
                                <iconItem.icon width = "70" height = "70" 
                                fill = {iconSelected[key] ? "#900000" : "#000000"}/>
                            </AvatarItem>
                        ))}
                    </AvatarChooseArea>

                    <DownArea>
                        <InputArea>
                            <EditIcon width = "25" height = "25" fill = "#900000"/>
                            <ModalInput
                                    placeholder = "Nome do Jogador ..."
                                    placeholderTextColor = "#900000"
                                    value = {playerName}
                                    onChangeText = {t => textSize(t)}     
                            />
                        </InputArea>
                        <ModalButton onPress = {finishCLick}>
                            <AddIcon width = "40" height = "40" fill = "#000000" />
                        </ModalButton>
                    </DownArea>
                    

                    

                    







                </ModalBody>
            </ModalArea>
        </Modal>
    )
}