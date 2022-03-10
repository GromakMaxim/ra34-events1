import './App.css';
import React from "react";
import '../src/css/main.css';
import Portfolio from "./components/Portfolio";
import ProjectList from "./components/ProjectList";


function App() {

    return (
        <div>
            <div className='controls'>
                <Portfolio/>
            </div>
            <div className='list'>
                <ProjectList actualFilter='Websites'/>
            </div>
        </div>
    );
}


export default App;
