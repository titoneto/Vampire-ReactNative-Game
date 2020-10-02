import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import DownIcon from '../assets/svg/013-down-chevron.svg';

const Modal = styled.Modal``;

const ModalArea = styled.View`
    flex:1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

const ModalBody = styled.View`
    background-color: #E6E6E6;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    min-height: 400px;
    padding: 10px 20px 40px 20px;
`;

const CloseButton = styled.TouchableOpacity`
    width:40px;
    height:40px;
`;

export default ({show, setShow, players, setPlayers}) => {

    const handleCloseButton = () =>{
        setShow(false);
    }

    return(
        <Modal
            transparent ={true}
            visible = {show}
            animationType = "fade"
        >
            <ModalArea>
                <ModalBody>
                    <CloseButton onPress = {handleCloseButton}>
                        <DownIcon width = "40" height = "40" fill = "#000000"/>
                    </CloseButton>




                </ModalBody>
            </ModalArea>
        </Modal>
    )
}