import React from "react";

type Props = {
  readonly useLoad: boolean; // twttr.widgets.load を使うかどうか
  readonly text: string;
};

declare const twttr: TwitterWidgets;

type TwitterWidgets = {
  ready: (f: (w: TwitterWidgets) => void) => void;
  widgets: {
    load: (e: any) => void;
    createShareButton: (url: string, e: any, options?: any) => void;
  };
};

/**
 * Tweetボタン. twttr.widgets.loadを使う版とtwttr.widgets.createShareButtonを使う版があります.
 * twttr.widgets.load を使う場合、コンポーネントが消えるときに以下のエラーが発生します.
 * react-dom.development.js:10557 Uncaught DOMException: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
 */
export default class TweetButton extends React.Component<Props> {
  componentDidMount() {
    if (this.props.useLoad) {
      twttr.ready((twttr: TwitterWidgets) => twttr.widgets.load(this.refs.tweetButton));
    } else {
      twttr.ready((twttr: TwitterWidgets) => twttr.widgets.createShareButton("https://twitter.com/share", this.refs.tweetButton, {}));
    }
  }

  render() {
    if (this.props.useLoad) {
      return (
        <a ref="tweetButton"
          href="https://twitter.com/share"
          className="twitter-share-button"
          data-text={this.props.text}
          data-show-count="false">Tweet</a>
      );
    } else {
      return <div ref="tweetButton" />;
    }
  }
}
