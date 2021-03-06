import React from 'react';
import PropTypes from 'prop-types';

import './watch.css';
import ButtonContainer from '../../containers/ButtonContainer';
import ViewRouter from '../../Router/ViewRouter';
import ScreenLayout from '../ScreenLayout/ScreenLayout';
import NotificationPopup from './NotificationPopup/NotificationPopup';

const Watch = ({ children, notificationEvent }) => {
  return (
    <div id='watch' className='watch'>
      <div className='strap strap-top' />
      <div id='watch-face' className='case'>
        <NotificationPopup
          show={ notificationEvent.displayNotification }
          text={ notificationEvent.text }
        />
        <ButtonContainer id='button-right' type='RIGHT' />
        <ButtonContainer id='button-left' type='LEFT' />
        <ButtonContainer id='button-bottom' type='BOTTOM' />
        <ButtonContainer id='button-top' type='TOP' />
        <ViewRouter>
          <ScreenLayout>
            {children}
          </ScreenLayout>
        </ViewRouter>
      </div>
      <div className='strap strap-bottom' />
    </div>
  );
};

Watch.propTypes = {
  notificationEvent: PropTypes.shape({
    displayNotification: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Watch;
