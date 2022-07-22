import React, { useState } from 'react';

import { Container } from './styles';

function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mensage, setMensage] = useState('')

  return (
    <>
      <Container>
        <div className='title'>
          <h1>Entre em contato:</h1>
            <div className='detail'/>
            <div className='detail line2'/>
        </div>

        <div className='input-wrapper'>  
          <input type={'text'} placeholder='nome completo*'/>
          <input type={'email'} placeholder='e-mail*'/>

          <textarea placeholder='sua mensagem...'/>

          <button>Enviar</button>
        </div>
      </Container>
    </>
  );
}

export default Contact;