const Statistics = ({
  options,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    {options.map(([key, value]) => (
      <p>
        {[key]}:{value}
      </p>
    ))}
    <p>Total :{total} </p>
    <p>Positive feedback : {positivePercentage}%</p>
  </div>

  // {/* <div>
  //         {for (const [key,value] of optionsEnters){
  //             <p>{key}:{value}</p>
  //     }}
  // </div> */}
);

export default Statistics;
