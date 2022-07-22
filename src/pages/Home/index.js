import React from 'react';
import TecBlock from '../../components/TecBlock';
import { Container } from './styles';

function Home() {
  return(
    <Container>
      <div className='info-wrapper'>
        <img alt='face_image' src="https://cdn2.f-cdn.com/ppic/195783297/logo/49838260/GJUTC/profile_logo_LIXNN_24cfd4b64982821159a9815e812639d0.jpg?image-optimizer=force&width=280 1x, https://cdn2.f-cdn.com/ppic/195783297/logo/49838260/GJUTC/profile_logo_LIXNN_24cfd4b64982821159a9815e812639d0.jpg?image-optimizer=force&width=560"/>
        
        <div>
          <div className='title'>
            <h2>Eduardo Alves</h2>
            <div className='detail line1'/>
            <div className='detail line2'/>
          </div>
          <p>Olá meu nome é Eduardo bla bla bla</p>
        </div>
      </div>

      <div className='tec-wrapper'>
        
      </div>
     
    </Container>
  );
}

export default Home;