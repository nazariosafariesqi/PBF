import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='NieR' />
      </div>
    );
  }
}
export default App;

import React from 'react';// Component menggunakan Functionconst Footer = (props) => {
 return (
  <div>
   <h3>Halaman Footer</h3>
   <h3>Component ini dibuat menggunakan Function bukan Class</h3>
   <p>Nilai ini ditampilkan dari props: { props.judul } </p>
   <p>Nama Saya: { props.nama } </p>
  </div>
 );
export default Footer;
