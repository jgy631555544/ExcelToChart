import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App/index';
window.xxzListener = {
    xxzEvent:{},
}
window.xxzListener.on = (key,callback) => {
    xxzListener.xxzEvent[key] = callback
}
window.xxzListener.emit = (key,data) => {
    xxzListener.xxzEvent[key](data)
}
ReactDOM.render(<App />, document.getElementById('root'));
