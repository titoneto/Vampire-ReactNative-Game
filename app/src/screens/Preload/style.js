import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`;

export const LogoHeaderArea = styled.View`
    height: 250px;
    width: 100%;
`;

export const LogoFooterArea = styled.View`
    height: 250px;
    width: 100%;
`;

export const LogoImage = styled.Image`
    height: 250px;
    width: 100%;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-bottom: 10px;
`;