import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import RouterList from '../../router/index'
import 'antd/dist/antd.css';
import './index.css'

function App() {
    return (
        <Router className="App">
            <RouterList></RouterList>
        </Router>
    )
}

export default App;
