import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

let a = {
    name: "Dimych",
    age: 10,
    address: {
        city: "Minsk",
        country: "Belarus"
    }
}

let users = [
    {
        name: "Dimych",
        age: 10,
        address: {
            city: "Minsk",
            country: "Ukraine"
        }
    },
    {
        name: "Viktor",
        age: 13,
        address: {
            city: "Minsk",
            country: "Belarus"
        }
    }
]
//console.log(users[0].address.country);

let b: boolean = false;

b = true;