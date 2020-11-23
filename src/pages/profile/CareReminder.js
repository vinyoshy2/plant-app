import {DATE_FORMAT, DATETIME_FORMAT} from "react-big-scheduler";
import React, {Component} from "react";
import moment from "moment";

import {capitalize} from "../../utils/utils";
import CareReminderCalendar from "./CareReminderCalendar";
import CareReminderDownload from "./CareReminderDownload";
import CareReminderSettings from "./CareReminderSetting"
import {getEntryFromID} from "../../utils/utils.js";
import projectJSON from "../../data/projects.json";
import Sidebar from "./SideBar";
import { Navbar } from '../home/Home.js'


class CareReminder extends Component {

  constructor(props) {
    super(props);

    // Generate calendar setting table based on added project.
    let added_ids = Object.keys(this.props.added);
    let entries = [];
    for (let i = 0; i < added_ids.length; i++) {
      let info = getEntryFromID(parseInt(added_ids[i]), projectJSON);
      info["required_plants"].forEach(plant_entry =>
        entries.push(
          {
            id: info["name"] + " - " + plant_entry["name"],
            project: info["name"],
            plant: plant_entry["name"],
            // The reason for " || 0" below:
            //     parseInt might return null, which will stuck the logic.
            harvest: parseInt(info["harvesting"]) || 0,
            fertilize: parseInt(info["fertilizing"]) || 0,
            water: parseInt(info["watering"]) || 0,
            dust: parseInt(info["dusting"]) || 0,

          }
        )
      );
    }

    // Extract the header (left most column) for Calendar.
    let headers = [];
    entries.forEach(plant_entry => {
      headers.push({
        id: plant_entry.id,
        name: plant_entry.id,
      });
    })

    this.state = {
      settings: entries,
      care_available_time: '08:30',
      care_cal_header: headers,
      care_cal_events: []
    };

    // Initialize all calendar events based on care reminder settings.
    this.state.care_cal_events = this.getAllCalendarEvents(this.state.settings);

    this.handleSettingChange = this.handleSettingChange.bind(this);
  }

  /**
   * Handler function when care reminder settings are updated by the user.
   * This function is called by CareReminderSetting class.
   * */

  handleSettingChange = (new_settings) => {
    this.setState({settings: new_settings}, () => {
      console.log('1st element of settings: ' + JSON.stringify(this.state.settings[0]));

    });
    let all_events = this.getAllCalendarEvents(new_settings);
    this.setState({care_cal_events: all_events}, () => {
      console.log('1st element of care_cal_event: ' + JSON.stringify(this.state.care_cal_events[0]));
    });
  }

  /**
   * Get all calendar events for all plants in the settings.
   *
   * @param  {object} setting: full care calendar setting
   *
   * @return {array} all_events: array of objects. Each objects is a recursive event.
   * */
  getAllCalendarEvents = (setting) => {
    // Refresh calendars.
    // Note: Currently it cleans all calendar events and add three future events.
    //       A potential future work is maintain old events and add future events
    //       for next month etc.
    let all_events = [];
    for (let i = 0 ; i < setting.length; ++i) {
      all_events = all_events.concat(
        this.getCalEventSinglePlant(setting[i], 1));
    }
    return all_events;
  }

  /**
   * Get all calendar events for a single plant in the settings.
   *
   * @param  {object} setting
   * @param  {number} start_event_id: start event_id for each plant.
   *
   * @return {array} events. Care Events of a single plant, for events in
   *         cr_columns (initial version: water, fertilize, dust and harvest).
   * */
  getCalEventSinglePlant = (setting, start_event_id) => {
    let single_plant_events = []
    let care_actions = ['water', "fertilize", "dust", "harvest"]

    // Get events for different care actions
    for (let i = 0; i < care_actions.length; ++i) {
      let action = care_actions[i];
      // If the action is not available
      if (!(action in setting) || !setting[action]) continue;
      single_plant_events.push(
        this.getCalEventSingleAction(
          setting.id,
          this.care_available_time,
          action,
          setting[action],
          start_event_id
        )
      );
      start_event_id += 1;
    }
    return single_plant_events;
  }

  /**
   * Get all calendar events for an action of a single plant in the settings.
   *
   * @param  {object} plant_id: the id of plant, unique cross projects.
   * @param  {string} reminding_time: the time for reminder on each day.
   * @param  {string} action: name of care action. E.g. water, fertilize.
   * @param  {number} freq: the frequency of action, once every freq days.
   * @param  {number} event_id: uniq event_id for each action on each plant.
   *
   * @return {object} care_event. Care Event of a action of a single plant.
   *
   * */
  getCalEventSingleAction = (plant_id,
                             reminding_time,
                             action,
                             freq,
                             event_id) => {
    let date_today = new moment().format(DATE_FORMAT);
    let start_time = date_today + ' ' + this.state.care_available_time;
    let end_time = moment(start_time).add(30, 'm').toDate();

    return {
      id: event_id,  // may need to change
      start: start_time,
      end: new moment(end_time).format(DATETIME_FORMAT),
      resourceId: plant_id,
      title: capitalize(action),
      rrule: 'FREQ=DAILY;INTERVAL=' + freq + ';BYDAY=MO,TU,WE,TH,FR,SA,SU;COUNT=5',
      bgColor: '#f759ab'
    };
  }

  render() {
    return (
        <div>
            <Navbar />
              <div id="profile">
                <Sidebar />
                <div className='profile-content'>
                  <h1 className='profile-title'>Plant Care Calendar</h1>
                  {/*
                  // Upcoming Caring Events
                  <div className='profile-subtitle'> Upcoming Caring Events </div>
                  <div className='profile-sub-content'>
                    <div className='list-title'> Today </div>
                    <div className='list-item'> <b>9:30 AM</b>  Dust leaves of Bonsai in Bedroom </div>
                    <div className='list-item'> <b>5:00 PM</b>  Water Sill in Kitchen </div>
                  </div>
                  */}

                  <h2 className='profile-subtitle'> Care Reminder Settings </h2>
                  <div className='profile-sub-content'>
                    {/* Refer to lib in https://reactjsexample.com/empower-your-data-with-the-best-react-data-grid/*/}
                    <p className='content-text'> Reminder Time: 8:30 AM </p>
                    <CareReminderSettings
                      settings={this.state.settings}
                      handleSettingChange={this.handleSettingChange}
                    />
                  </div>

                  <h2 className='profile-subtitle'> Care Reminder Calender </h2>
                  <div className='profile-sub-content'>
                    <CareReminderCalendar
                      settings={this.state.settings}
                      care_cal_header={this.state.care_cal_header}
                      care_cal_events={this.state.care_cal_events}
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
