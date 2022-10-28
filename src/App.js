import React, { useReducer, useState } from 'react';
import { Reducer, SaveReducer } from './reducer';
import { TextContext } from './context';
import External1 from './external1';
import BlogNewSection from './BlogComportment';

import './bootstrap-reboot.css';
import './bootstrap-utilities.css';
import './bootstrap.css';
import './style.css';
import './style-e.scss';

import { Database } from './database';

export default function App() {
  const [state, display] = useReducer(Reducer, { count: 0 });

  return (
    <div>
      <BlogNewSection />
    </div>
  );
}
