import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function Notification({ message = "Error! try again", offNotification }) {
  const notify = () => {
    offNotification();
    return toast(message);
  };
  return (
    notify()
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  offNotification: PropTypes.func.isRequired,
};
