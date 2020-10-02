import React from 'react';
import styled from 'styled-components/native';

export const GameButton = styled.TouchableOpacity`
    height: 40px;
    width: 160px;
    align-items:center;
    border-radius: 8px;
    padding: 5px 5px;

    background-color: rgba(227,227,227,1);
    margin-bottom: 5px;
`;

export const GameButtonText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
`;

export const HistoricButton = styled.TouchableOpacity`
    height: 40px;
    width: 160px;
    align-items:center;

    border-radius: 8px;
    padding: 5px 5px;

    background-color: rgba(227,227,227, 0.7);
`;


export const HistoricButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #000000;
`;