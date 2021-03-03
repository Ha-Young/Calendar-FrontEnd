export function createSelector(state, key = null, callback = null) {
  const selectedState = key ? state[key] : state;
  return function (propName) {
    if (callback) return callback(selectedState, propName);
    return selectedState[propName];
  }
}
