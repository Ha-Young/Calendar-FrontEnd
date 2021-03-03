import React from "react";

import Daily from "../Daily/Daily";
import Weekly from "../../containers/Weekly";

function Calendar({ isDaily }) {
  return isDaily
    ? <Daily></Daily>
    : <Weekly></Weekly>;
}

export default Calendar;
