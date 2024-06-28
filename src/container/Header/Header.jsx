import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>A Paris destination in its own right, Le Cinq by Christian Le Squer is synonymous with the apex of French modern and elegant cuisine, paired with the rarest wines selected by award-winning Head Sommelier Eric Beaumard. Its three Michelin stars are a reflection of the gastronomic experience of a lifetime – in one of the city’s most majestic dining rooms.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>
  </div>
);

export default Header;
