import React, {Component} from "react";
import moment from "moment";

import CareReminderCalendar from "./CareReminderCalendar";
import CareReminderSettings from "./CareReminderSetting"
import {capitalize} from "../../utils/utils";
import {cr_dataSource} from "./CareReminderData";
import {DATE_FORMAT, DATETIME_FORMAT} from "react-big-scheduler";
import Sidebar from "./SideBar";
import projectJSON from "../../data/projects.json";
import {getEntryFromID} from "../../utils/utils.js";

class CareReminder extends Component {

  constructor(props) {
    super(props);
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
            harvest: parseInt(info["harvesting"]),
            fertilize: parseInt(info["fertilizing"]),
            water: parseInt(info["watering"]),
            dust: parseInt(info["dusting"]),
          }
        )
      );
    }

    this.state = {
      // settings: entries,
      settings: cr_dataSource,
      care_available_time: '08:30',
      care_cal_events: []
    };

    this.state.care_cal_events = this.getAllCalendarEvents(this.state.settings);

    this.handleSettingChange = this.handleSettingChange.bind(this);
  }

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
   * @param  {object} setting: full care calendar setting
   *
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
      if (!(action in setting)) continue;
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
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'> Plant Care Calendar </div>
          <div className='horizontal-divider'/>
          {/*
          // Upcoming Caring Events
          <div className='profile-subtitle'> Upcoming Caring Events </div>
          <div className='profile-sub-content'>
            <div className='list-title'> Today </div>
            <div className='list-item'> <b>9:30 AM</b>  Dust leaves of Bonsai in Bedroom </div>
            <div className='list-item'> <b>5:00 PM</b>  Water Sill in Kitchen </div>
          </div>
          */}

          <div className='profile-subtitle'> Care Reminder Settings </div>
          <div className='profile-sub-content'>
            {/* Refer to lib in https://reactjsexample.com/empower-your-data-with-the-best-react-data-grid/*/}
            <p className='content-text'> Reminder Time: 9:30 AM, 5:00 PM</p>
            <CareReminderSettings
              settings={this.state.settings}
              handleSettingChange={this.handleSettingChange}
            />
          </div>

          <div className='profile-subtitle'> Weekly Care Reminder Calender </div>
          <div className='profile-sub-content'>
            <CareReminderCalendar
              settings={this.state.settings}
              care_cal_events={this.state.care_cal_events}
            />
          </div>
          </div>
      </div>
    );
  }
}

export default CareReminder;
