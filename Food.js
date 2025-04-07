import React from 'react';
import './Navbar.css';

import khanBankLogo from './logo/Khanbank.png';
import golomtBankLogo from './logo/Golomtbank.png';
import tdbBankLogo from './logo/TDB.png';
import xacBankLogo from './logo/Xac.png';
import mBankLogo from './logo/mbank.png';

const App = () => {
  const handleKhanBankClick = () => {
    const url = `https://e.khanbank.com/auth/login`;
    window.open(url, '_blank');
  };
  const handleGolomtBankClick = () => {
    const url = `https://www.egolomt.mn/`;
    window.open(url, '_blank');
  };
  const handleTDBClick = () => {
    const url = `https://www.etdbm.mn/`;
    window.open(url, '_blank');
  };
  const handleXacBankClick = () => {
    const url = `https://digital.xacbank.mn/XACBaseApp/`;
    window.open(url, '_blank');
  }
  const handleMBankClick = () => {
    const url = `https://e-mbank.mn/login`;
    window.open(url, '_blank');
  }

  return (
    <div className="app">
      <div className="container">
        <nav className="navbar">
          <ul>
            <li><a href="#">Хоолны цэс:</a></li>
            <li><a href="#">Даваа</a></li>
            <li><a href="#">Мягмар</a></li>
            <li><a href="#">Лхагва</a></li>
            <li><a href="#">Пүрэв</a></li>
            <li><a href="#">Баасан</a></li>
          </ul>
        </nav>

        <div className="content">
          <div className="Данс">
            <ul>
              <a>Хоолны данс: 5058083428 /Хаан Банк/ Амарсайхан</a>
              <div className="Данс">
                <a href="#" onClick={handleKhanBankClick}>
                  <img src={khanBankLogo} alt="Хаан банк logo" className="bank-logo" />
                </a>
                <a href="#" onClick={handleGolomtBankClick}>
                  <img src={golomtBankLogo} alt="Голомт банк logo" className="bank-logo" />
                </a>
                <a href="#" onClick={handleTDBClick}>
                  <img src={tdbBankLogo} alt="Худалдаа хөгжлийн банк logo" className="bank-logo" />
                </a>
                <a href="#" onClick={handleXacBankClick}>
                  <img src={xacBankLogo} alt="Хас банк logo" className="bank-logo" />
                </a>
                <a href="#" onClick={handleMBankClick}>
                  <img src={mBankLogo} alt="M банк logo" className="bank-logo" />
                </a>
              </div>
            </ul>
          </div>

          <div className="info">
            <h3>Өнөөдрийн Хоол</h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
