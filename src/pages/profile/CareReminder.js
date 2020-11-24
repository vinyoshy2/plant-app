import React, {Component} from "react";

import CareReminderCalendar from "./CareReminderCalendar";
import CareReminderDownload from "./CareReminderDownload";
import CareReminderSettings from "./CareReminderSetting"
import Sidebar from "./SideBar";
import { Navbar } from '../home/Home.js'


class CareReminder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: this.props.settings,
      care_available_time: '08:30',
      care_cal_events: []
    };

    // // Initialize all calendar events based on care reminder settings.
    // this.state.care_cal_events = this.getAllCalendarEvents(this.state.settings);

    this.handleSettingChange = this.handleSettingChange.bind(this);
  }

  /**
   * Handler function when care reminder settings are updated by the user.
   * This function is called by CareReminderSetting class.
   * */

  handleSettingChange = (new_settings) => {
    this.props.handleCareSetting(new_settings);
  }

  render() {
    return (
        <div>
            <Navbar />
              <div id="profile">
                <Sidebar />
                <div className='profile-content'>
                  <h1 className='profile-title'>Plant Care Calendar</h1>

                  <h2 className='profile-subtitle'> Care Reminder Settings </h2>
                  <div className='profile-sub-content'>
                    {/* Refer to lib in https://reactjsexample.com/empower-your-data-with-the-best-react-data-grid/*/}
                    <p className='setting-direction'> Setting Direction: </p>
                    <p className='direction-content'>
                      Double click the cell to edit its content. Enter to confirm edition.
                      If no need for a care type of one plant, set value as 0. </p>
                    <p className='direction-content-end'> Reminder Time is set as 8:30 AM. </p>
                    <CareReminderSettings
                      settings={this.state.settings}
                      handleSettingChange={this.props.handleCareSetting}
                    />
                  </div>

                  <h2 className='profile-subtitle'> Care Reminder Calender </h2>
                  <div className='profile-sub-content'>
                    <CareReminderCalendar
                      settings={this.state.settings}
                      care_available_time={this.state.care_available_time}
                    />
                  </div>
                  <CareReminderDownload />
                </div>
              </div>
        </div>
    );
  }
}

export default CareReminder;
