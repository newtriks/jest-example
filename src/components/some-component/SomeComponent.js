import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
// Styles
import styles from './styles.css';

const SomeComponent = ({ message }) => (
  <div>
    <p styleName="message">{message}</p>
  </div>
);

SomeComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default CSSModules(SomeComponent, styles);
