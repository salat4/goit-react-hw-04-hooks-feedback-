const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button type="button" onClick={onLeaveFeedback} value={option}>
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;
