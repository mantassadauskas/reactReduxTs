import * as  React from 'react';
import {Component} from 'react';
import './App.css';
import Button from "./components/button";
import ApiCheckBox from "./components/apiCheckbox";
import Results from "./components/results";
import Navbar from "./components/navbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Navbar/>
                    <ApiCheckBox/>
                    <Button/>
                    <Results/>
                </div>
            </div>
        );
    }
}

export default App;
