import React, { useState } from 'react';
import './App.css';
import TweetButton from './TweetButton';

const App: React.FC = () => {
  const [visibleTweetButton, setVisibleTweetButton] = useState(true);
  return (
    <div className="App">
      {visibleTweetButton && <TweetButton text=""/>}
      <button onClick={() => setVisibleTweetButton(!visibleTweetButton)}>{visibleTweetButton ? "Tweetボタンを非表示" : "Tweetボタンを表示"}</button>
    </div>
  );
}

export default App;
