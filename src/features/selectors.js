export function createSelector(state, key = null, callback = null) {
  const selectedState = key ? state[key] : state;
  return function (propName = null) {
    if (callback) return callback(selectedState, propName);
    return propName ? selectedState[propName] : selectedState;
  }
}
