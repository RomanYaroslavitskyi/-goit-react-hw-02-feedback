import s from './Feedback.module.css';

const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.statistics__list}>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>Good : {good}</p>
      </li>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>Neutral : {neutral}</p>
      </li>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>Bad : {bad}</p>
      </li>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>Total : {total}</p>
      </li>
      <li className={s.statistics__item}>
        <p className={s.statistics__text}>
          Positive feedback : {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

export default StatisticsList;
