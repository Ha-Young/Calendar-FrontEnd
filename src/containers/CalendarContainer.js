import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from 'components/Week/Week';
import Day from 'components/Day/Day';
import { database } from '../utils/firebase';
import { connect } from 'react-redux';

const CalendarContainer = ({ events }) => {
 
  database.ref('users/').on('value', function(snapshot) {
    console.log(snapshot.val());
  });
  
  return (
    <Switch>
      <Route exact path='/' component={Week} />
      <Route exact path='/day' component={Day} />
    </Switch>
  );
}
export default CalendarContainer;

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     isLoggedIn: state.isLogin
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setIsLoggedIn: (user, isLoggedIn) => { dispatch(loggin(user, isLoggedIn)) }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);