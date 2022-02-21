import React, { useState, useEffect } from 'react';
import MainHeader from './components/main-header/main-header.component';
import './index.scss';
import MainPage from './views/main/main.view';
import { SALETYPE_PUBLICSALE, SALETYPE_PRESALE } from './commonVariable';

function App() {
  const [saleType, setSaleType] = useState(SALETYPE_PUBLICSALE);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (index: number) => {
    console.log(index);
    setSelectedIndex(index);
  }

  return (
    <div className="App">
      <MainHeader
        selectedIndex = {selectedIndex}
        handleChange = {handleChange}
      />
      <MainPage saleType = {saleType} />
    </div>
  );
}

export default App;
