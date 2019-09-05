"use strict";

import React from "react";

type Props = { text: string };

declare const twttr: TwitterWidgets;

type TwitterWidgets = {
  ready: (f: (w: TwitterWidgets) => void) => void;
  widgets: {
    load: (e: any) => void;
    createShareButton: (url: string, e: any, options?: any) => void;
  };
};

/**
 * Tweetボタン. twttr.widgets.load を使う場合、コンポーネントが消えるときに以下のエラーが発生します.
 * react-dom.development.js:10557 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
 */
export default class TweetButton extends React.Component<Props> {
  componentDidMount() {
    // twttr.widgets.load版
    twttr.ready((twttr: TwitterWidgets) => twttr.widgets.load(this.refs.tweetButton));

    // twttr.widgets.createShareButton版
    //twttr.ready((twttr: TwitterWidgets) => twttr.widgets.createShareButton("https://twitter.com/share", this.refs.tweetButton, {}));
  }

  render() {
    // twttr.widgets.load版
    return (
      <a ref="tweetButton"
        href="https://twitter.com/share"
        className="twitter-share-button"
        data-text={this.props.text}
        data-show-count="false">Tweet</a>
    );
    // // twttr.widgets.createShareButton版
    //return <div ref="tweetButton" />;
  }
}
