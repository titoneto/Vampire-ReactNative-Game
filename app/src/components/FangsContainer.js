import React, {createRef} from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

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
    margin-bottom: -40px;
`;

const LogoFooterArea = styled.View`
    margin-top: -20px;
    height: 250px;
    width: 100%;
`;

const LogoImage = styled.Image`
    height: 250px;
    width: 100%;
  
`;

const AnimatedLogoHeader = Animatable.createAnimatableComponent(LogoHeaderArea);
const AnimatedLogoFooter = Animatable.createAnimatableComponent(LogoFooterArea);

export const FangsUpRef = createRef();
export const FangsDownRef = createRef();

export default ({children}) =>{

    return (
        <Container>
            <AnimatedLogoHeader
                useNativeDriver
                ref={FangsUpRef}
            >
                <LogoImage source = {FangsUp} />
            </AnimatedLogoHeader>
            
             {children}
    
            <AnimatedLogoFooter
                useNativeDriver
                ref = {FangsDownRef}
            >
                <LogoImage source = {FangsDown}/>
            </AnimatedLogoFooter>
    
        </Container>
    );
} 