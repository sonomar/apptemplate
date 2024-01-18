import React from 'react';
import Login from '../login/login'

const Header: React.FC = () => {
  return <header>
    <p>This is the header.</p>
    <div>
      <Login></Login>
    </div>

  </header>;
};

export default Header;