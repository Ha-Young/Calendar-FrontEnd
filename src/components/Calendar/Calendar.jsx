import React from "react";

import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";

function Calendar({ isDaily }) {
  return isDaily
    ? <Daily></Daily>
    : <Weekly></Weekly>;
}

export default Calendar;
