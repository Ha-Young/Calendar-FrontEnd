import React from 'react';
import { Route, Link } from 'react-router-dom';
import * as Styled from '../styled';

import Daily from '../Daily';
import Weekly from '../Weekly';

export default function Main () {
    return(
    <Styled.Main>
      <Link to="/main/daily">
        <button>일간</button>
      </Link>
      <Link to="/main/weekly">
        <button>주간</button>
      </Link>

      <Route path='/main/daily'>
        <Daily />
      </Route>
      <Route path='/main/weekly'>
        <Weekly />
      </Route>
    </Styled.Main>);
}
