import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
  
      let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQEmuCGKe2RxWw/profile-displayphoto-shrink_200_200/0/1630454667275?e=1637798400&v=beta&t=4EcC2F0l7RkUPss9aNBA4x3sG9BYnCrHVoOiUvNMVFo';
  
      return (
        <img src={img} width={200} height={200} />
      );
    }
  
  }

  export default Perfil;