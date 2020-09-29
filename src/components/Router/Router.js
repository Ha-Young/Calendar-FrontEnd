import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from '../Week/Week';
import Day from '../Day/Day';
import Modal from '../Modal/Modal';
import NewEvent from '../NewEvent/NewEvent';
import ModifyEvent from '../ModifyEvent/ModifyEvent';

const AppRouter = () => {
  const [isNewEventPageClicked, setIsNewEventPageClicked] = useState(false);
  const [isModifyPageClicked, setIsModifyPageClicked] = useState(false);

  return (
    <>
      <Switch>
        <Route exact path='/' component={Week} />
        <Route exact path='/day' component={Day} />
      </Switch>
      {
        isNewEventPageClicked &&
        <Route path='/events/new'>
          <Modal>
            <NewEvent />
          </Modal>
        </Route>
      }
      {
        isModifyPageClicked &&
        <Route path='/events/:eventId'>
          <Modal>
            <ModifyEvent />
          </Modal>
        </Route>
      }
    </>
  );
};

export default AppRouter;
