import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// message というpropsを単に追加するとTS版では以下が出る。
// (JSX attribute) message: string
// 型 '{ message: string; }' を型 'IntrinsicAttributes' に割り当てることはできません。
//   プロパティ 'message' は型 'IntrinsicAttributes' に存在しません。ts(2322)
// Intrinsic＝元からあるもの

// 定義を辿っていくとkeyは定義されているのが分かる。 node_modules/react/の中のts
type Foo = JSX.IntrinsicAttributes;

ReactDOM.render(
  <App message="Hello, First React with TypeScript!" />,
  //<App  />, // 初期値が適用される
  document.getElementById('root')
);
