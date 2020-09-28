import React from 'react';
import styled from 'styled-components/native';

import FangsUp from  '../assets/FangsUp.png';
import FangsDown from  '../assets/FangsDown.png';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #000000;
    justify-content: center;
    align-items: center;
`;

const LogoHeaderArea = styled.View`
    height: 250px;
    width: 100%;
`;

const LogoFooterArea = styled.View`
    height: 250px;
    width: 100%;
`;

const LogoImage = styled.Image`
    height: 250px;
    width: 100%;
`;

export default ({children}) => (
    <Container>
        <LogoHeaderArea>
            <LogoImage source = {FangsUp} />
        </LogoHeaderArea>
        
         {children}

        <LogoFooterArea>
            <LogoImage source = {FangsDown} />
        </LogoFooterArea>

    </Container>
);