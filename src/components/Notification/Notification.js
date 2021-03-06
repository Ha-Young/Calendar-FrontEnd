import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notification({ message = "Error! try again", offNotification }) {
  const notify = () => {
    offNotification();
    return toast(message);
  };
  return (
    notify()
  );
}
