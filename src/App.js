import './App.css';
import ReactGA from "react-ga4";

// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-1B07VB89GD");
// ページビューイベントを処理
ReactGA.send("pageview");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>test</p>
      </header>
    </div>
  );
}


export default App;
