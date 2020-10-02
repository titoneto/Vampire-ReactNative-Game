import React from 'react';
import styled from 'styled-components/native';

export const PreGameArea = styled.View`
    width: 350px;
    background-color: ${props => props.bodyActivate ? "#e6e6e6" : "#000000"};
    border-radius: 20px;
    
`;

export const PreGameHeader = styled.View`
    width: 180px;  
    padding-left: 15px; 
`;
export const HeaderText = styled.Text`
    color: ${props => props.color};
    margin-left: 8px;
    font-size: 20px;
    font-weight: bold;

`;
export const HeaderButton = styled.TouchableOpacity`
    height: 35px;
    margin-left: 5px;
   
    flex-direction: row;
    align-items: center;
`;
export const ConfirmButton = styled.TouchableOpacity`
    padding-left: 5px;
    height: 35px;
    flex-direction: row;
    align-items: center;

    background-color: #900000;
    border-radius: 10px;

`;



export const PreGameBody = styled.View`
    width: 100%
    
`;




export const Scroll = styled.ScrollView`
    height: 210px;
`;
export const ScrollVerticalArea = styled.View`
    justify-content:center;
    flex:1;
`;
export const ScrollHorizontalArea = styled.View`
    margin-top: 3px;
    margin-bottom: 3px;

    flex-direction: row;
`;




export const ScrollButtom = styled.TouchableOpacity`
    border-radius: 20px;
    height: 95px;
    width: 95px;
    background-color: ${props => props.color};
    
    justify-content: center;
    align-items:center;

    margin-left: 3px;
    margin-right:3px;
`;

export const ScrollButtomName = styled.Text`
    font-size: 17px;
    color: ${props => props.color};

`;

export const AddButtonArea = styled.View`
    justify-content: center;
    align-items:center;
`;