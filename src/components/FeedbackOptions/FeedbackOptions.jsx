const FeedbackOptions = ({countGood,countNeutral,countBad }) => (
  <div>
    <button onClick={countGood}>good</button>
    <button onClick={countNeutral}>neutral</button>
    <button onClick={countBad}>bad</button>

  </div>


  
);
export default FeedbackOptions;
