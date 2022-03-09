// agar function arrow HelloComponent bisa berjalan di react maka tambahkan react
import React from 'react';
import './HelloComponent.css';

const HelloComponent= () => {
    return <p className='text-p'> Ini adalah 
    arrow function yang ada di folder</p>
}

//agar component ini dapat dipakai di mana saja
export default HelloComponent;