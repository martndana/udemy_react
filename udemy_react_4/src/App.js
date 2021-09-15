import React, { useState } from 'react';
import Demo from './components/Demo/Demo';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {

  // const [showParagraph, setShowParagraph] = useState(false);
  const [listTitle, setlistTitle] = useState('My List');

  console.log('App');

  const changeTitleHandler = () => {
    setlistTitle('New Title');
  }

  // const toggleParagrahHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  //   }
  // }, [allowToggle]);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo title={listTitle} items={[5, 3, 1, 10, 9]} />
      {/* <Button onClick={allowToggleHandler}>Allow Toggle</Button> */}
      <Button onClick={changeTitleHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
