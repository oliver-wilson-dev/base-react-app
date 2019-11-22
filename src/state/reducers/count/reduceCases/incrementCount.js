const incrementCount = ({ state }) => () => {
  return {
    ...state,
    count: state.count + 1 
  };
};


export default incrementCount;
