import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import './index.css';


ReactDOM.render(<Demo />,document.getElementById("root")
);
































































/*import {add,sub,mul,div} from './Calc';
ReactDOM.render(
  <>
  <h1>Simple Calculator</h1>
  <ol>
    <li>The sum of {add(2,3)}</li>
    <li>The sub of {sub(4,2)}</li>
    <li>The mul of {mul(2,3)}</li>
    <li>The div of {div(4,2)}</li>
  </ol>
  </>,
  document.getElementById('root')
)*/

/*import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"


let fname = "ASHISH";
const lname = "CHAUDHARI";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
  <React.Fragment>
  <h1 className="heading">Hello world!!!</h1>
  <p> Hii My FirstName Is {fname} </p>
  <p> Hii My LastName Is {lname} </p>
  <h4>The today date is : {date}</h4>
  <h4>The latest Time is : {time}</h4>
  </React.Fragment>,
  document.getElementById('root')
);

//only js using
//var h1 = document.createElement("h1");
//h1.innerHTML = "Ashish";
//document.getElementById("root").appendChild(h1);
*/