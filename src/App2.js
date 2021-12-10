import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home';
function App2() {
    return (
        <BrowserRouter>          
                <Route path="/" exact component={Home} />               
            
        </BrowserRouter>

    );
}

export default App2;
