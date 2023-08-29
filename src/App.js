import './App.css';
import ReactGA from "react-ga4";
import usePageTracking from "./useTracking";
import { BrowserRouter as Router } from 'react-router-dom';
// Google Analytics 測定 ID を入力して設定
ReactGA.initialize("G-1B07VB89GD");
// ページビューイベントを処理
ReactGA.send("pageview");


function App() {
  usePageTracking()
  return (
    <div className="App">
      <header className="App-header">
        <p>test</p>
      </header>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}


export default Root;
