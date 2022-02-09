import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectGuessCount } from './redux/guess';
import { Button } from '@mui/material';
import { actionsGuessGame } from './redux/guess/actions';

export const App = () => {
  const select = useSelector(selectGuessCount)
  const dispatch = useDispatch()

  console.log('select', select)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={() => dispatch(actionsGuessGame.incrementGuessCount())}>click</Button>
      </header>
    </div>
  );
}
