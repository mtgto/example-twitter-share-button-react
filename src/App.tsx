import React, { useState } from 'react';
import './App.css';
import TweetButton from './TweetButton';

const App: React.FC = () => {
  const [visibleTweetButtonByLoad, setVisibleTweetButtonByLoad] = useState(true);
  const [visibleTweetButtonByCreateShareButton, setVisibleTweetButtonByCreateShareButton] = useState(true);
  return (
    <div className="App">
      <div>
        {visibleTweetButtonByLoad && <TweetButton text="" useLoad/>}
        <button onClick={() => setVisibleTweetButtonByLoad(!visibleTweetButtonByLoad)}>{visibleTweetButtonByLoad ? "Tweetボタンを非表示 (load)" : "Tweetボタンを表示 (load)"}</button>
      </div>
      <div>
        {visibleTweetButtonByCreateShareButton && <TweetButton text="" useLoad={false}/>}
        <button onClick={() => setVisibleTweetButtonByCreateShareButton(!visibleTweetButtonByCreateShareButton)}>{visibleTweetButtonByCreateShareButton ? "Tweetボタンを非表示 (createShareButton)" : "Tweetボタンを表示 (createShareButton)"}</button>
      </div>
    </div>
  );
}

export default App;
