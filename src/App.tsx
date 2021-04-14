import React from 'react';
import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

// 関数型コンポーネントで書いている。
// <App message = ""....を追加すると出るエラーは、この関数に引数propsを追加すると解決。
// {message: string} と型を定義すると、<App name=""...のように勝手にpropsを追加するとTSがエラーを出してくれる。

// 一般的にはこのインターフェース形式で書く。これで型制約を強制できる。
interface AppProps {
  message?: string;
  description?: string;
}

//const App = ({ message }: AppProps) => {



const App: React.FunctionComponent<AppProps> = ({ message, description }) => {
  // 上の書き方で分割代入、変数messageに元オブジェクトのmessage:に対応する値"Hello..."が入る。
  //console.log(props); // {message: "Hello..."}
  //const {message} = props; // 分割代入 キーmessageの値だけを受け取っている
  console.log("message:", message);
  return (
    <div>
      <div>React Starter Kit in TypeScript.<br/> message:{message}．<br/>description: {description}</div>
      <Counter></Counter>
      <CounterWithReducer></CounterWithReducer>
    </div>
  );
};

// https://reactjs.org/docs/typechecking-with-proptypes.html
// 初期値も指定できる. TSならこのPropもアノテーションで型制約できる。
App.defaultProps = {
  message: 'Hello, from defaultProps...',
  description: 'This is App component.'
};

export default App;
