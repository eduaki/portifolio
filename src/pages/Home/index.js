import React from 'react';
import {
  IoLogoJavascript,
  IoLogoReact ,
  IoLogoPython ,
  IoLogoSass ,
  IoLogoHtml5, 
  IoLogoCss3,
  IoLogoFirebase,
  IoLogoElectron,
} from 'react-icons/io5'
import {
  DiGit,
  DiJava,
  DiMysql,
  DiNodejsSmall
} from 'react-icons/di'
import {SiStyledcomponents} from 'react-icons/si'
import { Container, TecBlock } from './styles';
import Skills from '../../components/Skills';
import Contact from '../Contact';

function Home() {
  return(
    <Container>
      <div className='info-wrapper'>
        <img alt='face_image' src="https://cdn2.f-cdn.com/ppic/195783297/logo/49838260/GJUTC/profile_logo_LIXNN_24cfd4b64982821159a9815e812639d0.jpg?image-optimizer=force&width=280 1x, https://cdn2.f-cdn.com/ppic/195783297/logo/49838260/GJUTC/profile_logo_LIXNN_24cfd4b64982821159a9815e812639d0.jpg?image-optimizer=force&width=560"/>
        
        <div className='all-wrapper'>
          <div className='title'>
            <h2>Eduardo Alves</h2>
            <div className='detail'/>
            <div className='detail line2'/>
          </div>
          <div className='text'>
            <p>Olá! Eu me chamo Eduardo tenho 18 anos, sou um programador full 
              stack(pleno), que além de um apixonado por tecnologia, 
            sou muito versátio e me adapto muito bem às dificuldades!</p>
            <p>
              Além de programador eu também sou produtor de conteúdo pra internet.
               E um entusiasta na área da ciência de dados, 
               atualmente estou desenvolvendo minha propria IA.
            </p>
          </div>
          
        </div>
      </div>

      <div className='tec-wrapper'>
        <div className='title'>
          <h1>Tecnologias:</h1>
            <div className='detail'/>
            <div className='detail line2'/>
        </div>
        <div className='tec-list'>

          <TecBlock> {/**java script */}
            <div className='title'>
              <IoLogoJavascript size={80}/>
              <h2>JavaScript</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**python */}
            <div className='title'>
              <IoLogoPython size={80}/>
              <h2>Python</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**java */}
            <div className='title'>
              <DiJava size={80}/>
              <h2>Java</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**NodeJS */}
            <div className='title'>
              <DiNodejsSmall size={80}/>
              <h2>NodeJS</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**mySQL */}
            <div className='title'>
              <DiMysql size={80}/>
              <h2>MySQL</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**firebase*/}
            <div className='title'>
              <IoLogoFirebase size={80}/>
              <h2>Google firebase</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**react*/}
            <div className='title'>
              <IoLogoReact size={80}/>
              <h2>React</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**electnon*/}
            <div className='title'>
              <IoLogoElectron size={80}/>
              <h2>Electron</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**react native */}
            <div className='title'>
              <IoLogoReact size={80}/>
              <h2>React native</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**html5 */}
            <div className='title'>
              <IoLogoHtml5 size={80}/>
              <h2>Html5</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**css3 */}
            <div className='title'>
              <IoLogoCss3 size={80}/>
              <h2>CSS3</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**SASS */}
            <div className='title'>
              <IoLogoSass size={80}/>
              <h2>Sass</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**StyledComponents */}
            <div className='title'>
              <SiStyledcomponents size={80}/>
              <h2>StyledComponents</h2>
            </div>
          </TecBlock>

          <TecBlock>{/**git */}
            <div className='title'>
              <DiGit size={80}/>
              <h2>Git</h2>
            </div>
          </TecBlock>
        </div>

      </div>

      <Skills/>
      
      <div className='publi'>
        <div>
          <h3 className='text'>Quer saber um pouco mais sobre mim e meus trabalhos? conheça meu <a rel='noreferrer' target='_blank' href="https://github.com/eduaki">github</a>!</h3>
        </div>

        <Contact />
      </div>

      <footer>
        <p>todos direitos reservados @ 2022 - desenvolvido por <a rel='noreferrer' target='_blank' href="https://github.com/eduaki">akidev</a></p>
      </footer>

    </Container>
  );
}

export default Home;