/*
 * @Author: your name
 * @Date: 2021-08-25 17:04:29
 * @LastEditTime: 2021-08-26 14:18:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qiankun\qiankun-react\src\App.js
 */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom"

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";

function App() {
  return (
    <BrowserRouter basename={BASE_NAME}>
    {/* <BrowserRouter basename={"/react"}> */}
      <Link to="/">
        首页
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
      </Link>
      <Link to="/about">关于</Link>
      <Route path="/" exact render={() => <h1>hello home</h1>}></Route>
      <Route path="/about" render={() => <h1>hello about</h1>}></Route>

    </BrowserRouter>
    
  );
}

export default App;
