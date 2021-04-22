import React from 'react';
import './App.css';
import ColorOrganizer from './component/ColorOrganizer';
import ColorProvider from './provider/ColorProvider';
import Checkbox from './component/Checkbox';
import User from './component/User';
import LotsCats from './component/LotsCats';

function App() {
  return (
    <ColorProvider>
      <LotsCats/>
      <User/>
      <ColorOrganizer />
      <Checkbox/>
    </ColorProvider>
  )
}

export default App;
