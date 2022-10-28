import React, { useContext, useReducer } from 'react';
import { TextContext } from './context';
import { Reducer, SaveReducer } from './reducer';

export default function External1() {
  const { state, display } = useContext(TextContext);

  return (
    <>
      <div style={{ marginTop: 23 }}>Etat de la page {state.count}</div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => display({ type: 'moins' })}>Change stat </button>
      </div>
    </>
  );
}
