import React from 'react';
import { Block, Container } from './styles';

import { MdLanguage } from 'react-icons/md'
import {} from 'react-icons/io5'
import { 
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiMicrosoftoffice 
} from 'react-icons/si';

function Skills() {
  return (
    <>
      <Container>
      <div className='title'>
          <h1>Outras Skills:</h1>
            <div className='detail'/>
            <div className='detail line2'/>
        </div>
        <div className='skill-wrapper'>
          <Block>
            <div className='title'>
              <SiAdobephotoshop size={80}/>
              <h2>Adobe Photoshop</h2>
            </div>
          </Block>

          <Block>
            <div className='title'>
              <SiAdobepremierepro size={80}/>
              <h2>Adobe Premiere</h2>
            </div>
          </Block>

          <Block>
            <div className='title'>
              <SiAdobeaftereffects size={80}/>
              <h2>Adobe After Effects</h2>
            </div>
          </Block>

          <Block>
            <div className='title'>
              <SiFigma size={80}/>
              <h2>Figma</h2>
            </div>
          </Block>

          <Block>
            <div className='title'>
              <SiMicrosoftoffice size={80}/>
              <h2>Pacote Office</h2>
            </div>
          </Block>

          <Block>
            <div className='title'>
              <MdLanguage size={80}/>
              <h2>Inglês</h2>
            </div>
          </Block>
          <Block>
            <div className='title'>
              <MdLanguage size={80}/>
              <h2>Japonês</h2>
            </div>
          </Block>
        </div>
        

      </Container>
    </>
  );
}

export default Skills;