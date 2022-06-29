import s from './Feedback.module.css';

const Notification = ({ message }) => {
  return <h2 className={s.notification__title}>{message}</h2>;
};

export default Notification;