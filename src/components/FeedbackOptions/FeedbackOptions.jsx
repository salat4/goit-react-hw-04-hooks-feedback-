import PropTypes from "prop-types";

const FeedbackOptions = ({countGood,countNeutral,countBad }) => (
  <div>
    <button onClick={countGood}>good</button>
    <button onClick={countNeutral}>neutral</button>
    <button onClick={countBad}>bad</button>
  </div>
);
FeedbackOptions.propTypes = {
  countGood: PropTypes.func,
  countNeutral: PropTypes.func,
  countBad: PropTypes.func,
};

export default FeedbackOptions;
