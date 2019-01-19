export default ({ dispatch }) => next => action  => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // There is a promise on our payload property
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
