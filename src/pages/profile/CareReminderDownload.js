import React, {Component} from "react";

import "./Profile.css"

class CareReminderDownload extends Component {
  render() {
    return (
      <a href='/example_cal.ics' download className='download_button'>Download Calendar</a>
    );
  }

}

export default  CareReminderDownload;