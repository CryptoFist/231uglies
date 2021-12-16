import React, { useState } from 'react';
import MainHeader from './components/main-header/main-header.component';
import './index.scss';
import MainPage from './views/main/main.view';

function App() {
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
      <MainPage
        selectedIndex = {selectedIndex}
      />
    </div>
  );
}

export default App;
