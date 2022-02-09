import React, { memo } from 'react';
import { GuessGame } from './components/GuessGame';

export const App = memo(() => {
  return (
      <GuessGame />
  );
})
