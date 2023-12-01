import PropTypes from 'prop-types';
import css from './style.module.css'
export const Notification = ({ message }) => {
  return <div className={css.message}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;