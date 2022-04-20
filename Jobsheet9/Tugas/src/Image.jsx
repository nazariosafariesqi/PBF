import React, { Component } from 'react';
import Image from './Image';
class List extends Component {
 render() {
  return (
   <div>
    <ol>
     <li>
      Satu
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' />
     </li>
     <li>
      Dua
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg' />
     </li>
     <li>
      Tiga
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png' />
     </li>
     <li>
      Empat
      <Image linkGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png' />
     </li>
    </ol>
   </div>
  );
 }
}
export default List;

import React, { Component } from 'react';
class Image extends Component {
    render() {
     return (
      <img src={ this.props.linkGambar } alt="Food" width='500' />
     );
    }
   }
export default Image;
   
