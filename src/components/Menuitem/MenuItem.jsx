import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p classNmae="p__cormorant" style={{ color: '#DCCA87', fontFamily: 'Bodoni Moda'}}>{title}</p>
      </div>

      <div className="app__menuitem-dash"></div>
      <div className="app__menuitem-price">
        <p classNmae="p__cormorant" style={{ color: 'white', fontFamily: 'Bodoni Moda'}}>{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color:'#AAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
