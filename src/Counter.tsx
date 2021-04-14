import React, {useState, useRef, useEffect} from 'react';

// https://ja.reactjs.org/docs/hooks-state.html

//const array: Array<number> = [1, 2, 3];
//const readonlyArray: ReadonlyArray<number> = [1,2,3];
//readonlyArray[0] = 100; 型 'readonly number[]' のインデックス シグネチャは、読み取りのみを許可します。

// 型はReact.FunctionComponent と React.FCは同じ
const Counter: React.FC<{}> = () => {
  const initialValue: number = 0;
  // useState関数の結果を分割代入している。ネーミングは[x, setX]が慣習。
  // const setValue: React.Dispatch<React.SetStateAction<number>>
  const [cntValue, setValue] = useState<number>(initialValue);

  const incrementFunc = () => {
    //setValue(value + 1);
    // prevStateの型はuseState<number>と対応してnumberに固定されている。
    setValue((prevState) => prevState + 1);
  };
  const decrementFunc = () => {
    //setValue(value - 1);
    setValue((prevState) => prevState - 1);
  };

  // 何回レンダリングしたか。useRefで関数内でも値を保持できる。
  // const renderTimes: React.MutableRefObject<number>
  const renderTimes = useRef<number>(0);
  // useEfffect関数は第一引数がコールバック関数
  useEffect(() => {
      console.log("** useEffect in render done."); // + - を押すごとに来る
      renderTimes.current = renderTimes.current + 1;
  });
  // Reactのお作法としてrefの<>型でstringは非推奨
  // null! でここに来る時はnullであることはないよ、となる。Non-null assertion operator
  const ref = useRef<HTMLInputElement>(null!);
  // ボタンを押したらフォーカスが当たる処理
  const focusInput = () => {
    console.log("** focusInput in.");
    // const current = ref.current;
    // if (current != null) {
    // current.focus();
    // }
    // ?をつけるとnullでない場合のみ実行
    //ref.current?.focus();
    ref.current.focus();
  }

  const divStyle = {
    backgroundColor: '#cccccc',
  };

  // ReactではJSXの中にstyleやclassをそのまま書けない。ここがVue.jsの記法と違う。
  return (
    <div style={divStyle}>
      <h4>React Hooks useStateを使った数保持器こむぽねんと</h4>
      <div>valueは {cntValue} でございまする</div>
      <button onClick={incrementFunc}>1を足しまする</button>
      <button onClick={decrementFunc}>1を引きまする</button>
      <div>このこむぽねんとが再れんだりんぐされた回数は {renderTimes.current}</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>押すと窓がふぉぅかすされまする</button>
    </div>
  );
}

export default Counter;