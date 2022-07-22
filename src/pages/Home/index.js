import React from 'react';

import {
  IoLogoJavascript,
  IoLogoReact ,
  IoLogoPython ,
  IoLogoSass ,
  IoLogoHtml5, 
  IoLogoCss3,
  IoLogoFirebase,
} from 'react-icons/io5'
import {
  DiGit,
  DiJava,
  DiMysql,
  DiNodejsSmall
} from 'react-icons/di'

import { Container, TecBlock } from './styles';

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
        <div className='title'>
          <h1>Tecnologias</h1>
            <div className='detail line1'/>
            <div className='detail line2'/>
        </div>
        <div className='tec-list'>
          <TecBlock>
            <div className='title'>
              <IoLogoJavascript size={80}/>
              <h2>JavaScript</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoPython size={80}/>
              <h2>Python</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <DiJava size={80}/>
              <h2>Java</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <DiNodejsSmall size={80}/>
              <h2>NodeJS</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <DiMysql size={80}/>
              <h2>MySQL</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoFirebase size={80}/>
              <h2>Google firebase</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoReact size={80}/>
              <h2>React</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoReact size={80}/>
              <h2>React native</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoHtml5 size={80}/>
              <h2>Html5</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoCss3 size={80}/>
              <h2>CSS3</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <IoLogoSass size={80}/>
              <h2>SASS</h2>
            </div>
          </TecBlock>

          <TecBlock>
            <div className='title'>
              <DiGit size={80}/>
              <h2>Git</h2>
            </div>
          </TecBlock>
        </div>

      </div>
     
    </Container>
  );
}

export default Home;