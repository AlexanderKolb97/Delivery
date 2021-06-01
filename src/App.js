import React, { useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import Services from './components/Services'
import Advantages from './components/Advantages'
import Support from './components/Support'
import Footer from './components/Footer'
import getDistance from './getDistance';
import './styles/css/style.css';
import './styles/css/media.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Context = React.createContext();

function App() {
    const [myData, setMyData] = useState();
    const [priceState, setPriceState] = useState(false);

    const getPrice = async () => {
        let origin = document.querySelector('[name="from_city"]').value,
            destination = document.querySelector('[name="to_city"]').value,
            distance = await getDistance(origin, destination);

        let data = {
            name: document.querySelector('[name="parcel_name"]').value,
            from: origin,
            to: destination,
            type: document.querySelector('.form_details > .active').innerHTML,
            number: document.querySelector('[name="num"]').value,
            weight: document.querySelector('[name="weight"]').value,
            distance: distance
        }

        if(document.querySelector('[name="length"]')) data.length = document.querySelector('[name="length"]').value;
        if(document.querySelector('[name="width"]')) data.width = document.querySelector('[name="width"]').value;
        if(document.querySelector('[name="height"]')) data.height = document.querySelector('[name="height"]').value;

        switch(data.type) {
            case 'Household':
                data.price = Math.round((data.weight/10 + data.length/10 + data.width/10 + data.height/10 + data.distance) * data.number/10);
                break;
            case 'Pets':
                data.price = data.weight * data.number * 10;
                break; 
            case 'Fragile':
                data.price = Math.round((data.weight/10 + data.length/10 + data.width/10 + data.height/10 + data.distance) * data.number/10) * 2;
                break;
            default:
                data.price = null;
        }

        setMyData(data)
 
        if(data.type == 'Pets' && data.from && data.to && data.name && data.weight) setPriceState(true)
        if(data.type !== 'Pets') {
            if(data.name && data.from && data.to && data.weight && data.length && data.width && data.height && data.price) setPriceState(true)
        }

        if(data.distance == 0) alert('Location is undefined. Try again.')

        return data
    }

    return (
        <React.Fragment>
            <Context.Provider value={{getPrice, myData, priceState, setPriceState}}>
                <div className="app">
                    <Router>
                        <Header />
                            <Switch>
                                <Route exact path="/delivery" component={Main}></Route>
                            </Switch>
                            <Switch>
                                <Route path="/services" component={Services}></Route>
                            </Switch>
                            <Switch>
                                <Route path="/about" component={About}></Route>
                            </Switch>
                            <Switch>
                                <Route path="/support" component={Support}></Route>
                            </Switch>
                        <Footer />
                    </Router>
                </div>
            </Context.Provider>
        </React.Fragment>
    );
}

export default App;
