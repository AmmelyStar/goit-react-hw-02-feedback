import css from './styles.module.css'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
        {options.map(option => (
        <button
            className={css.btn}
            key={option}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
         
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};






//  <div className={css.container}>
//                 <button name className={css.btn} onClick={this.handleIncrement}>Good</button>
//                 <button name='neutral' className={css.btn} onClick={this.handleIncrement}>Neutral</button>
//                 <button name='bad' className={css.btn} onClick={this.handleIncrement}>Bad</button>
//         </div>