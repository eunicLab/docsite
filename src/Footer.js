import React from 'react';
import './App.css';
import facebook from './facebook.png';
import twitter from './twitter.png';
import instagram from './instagram.png';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='footer'>
        <div className='socialMedia'>
          <a href='https://www.facebook.com/eunice.nnaji'>
            <img src={facebook} className='icon' alt='facebook icon' />
          </a>
          <a href='https://twitter.com/nnaji_eunice'>
            <img src={twitter} className='icon' alt='twitter icon' />
          </a>
          <a href='https://www.instagram.com/eunicennaji/'>
            <img src={instagram} className='icon' alt='instagram icon' />
          </a>
        </div>
        <div className='designer'>
          <p>
            Powered By{' '}
            <a href='https://github.com/eunicLab' className='designerText'>
              EunicLab
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
