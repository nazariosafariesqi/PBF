import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//ReactDOM.render(
//  <React.StrictMode>
//      <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//function HelloComponent(){
//  return HelloComponent
//}
//ReactDOM.render(<HelloComponent />,document.getElementById('root'));

const HelloComponent = () => {
  return HelloComponent
}

class StateFullComponent extends React.components{
  render(){
   return<p>StateFullComponent</p>
 }
}
ReactDOM.render(<StateFullComponent />,document.getElementById('root'));

reportWebVitals();
