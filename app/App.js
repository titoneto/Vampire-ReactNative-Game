import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/stack/MainStack';

import GameContext from './src/contexts/PlayersContext';

export default () => (
  <GameContext>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </GameContext>
)