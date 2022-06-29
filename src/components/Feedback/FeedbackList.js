import s from './Feedback.module.css';

const FeedbackList = ({ state, onClickBtn }) => {
  return (
    <ul className={s.feedback__list}>
      {Object.keys(state).map(el => {
        return (
          <li className={s.feedback__item} key={el}>
            <button
              className={s.feedback__btn}
              type="button"
              name={el}
              onClick={onClickBtn}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackList;
