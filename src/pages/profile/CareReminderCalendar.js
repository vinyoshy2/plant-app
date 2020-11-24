import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import React from 'react';
import moment from 'moment'
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT, DATETIME_FORMAT} from 'react-big-scheduler'

import 'react-big-scheduler/lib/css/style.css'
import {capitalize} from "../../utils/utils";

/* Reference info
   React lib: https://github.com/StephenChou1017/react-big-scheduler
   Repetitive calendar rule: https://github.com/jakubroztocil/rrule
      (this relates to the rrule format in events variable)
*/

class CareReminderCalendar extends React.Component {
  constructor(props){
    super(props);

    let schedulerData = new SchedulerData(
      new moment().format(DATE_FORMAT),
      ViewTypes.Week, false, false,
      {
        startResizable: false,
        endResizable: false,
        movable: false,
        creatable: false,
      });
    moment.locale('en');
    schedulerData.setLocaleMoment(moment);
    this.state = {
      schedulerData: schedulerData,
      cal_events: this.getAllCalendarEvents(this.props.settings)
    }
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
          this.props.care_available_time,
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
    let start_time = date_today + ' ' + this.props.care_available_time;
    let end_time = moment(start_time).add(30, 'm').toDate();

    return {
      id: event_id,  // may need to change
      start: start_time,
      end: new moment(end_time).format(DATETIME_FORMAT),
      resourceId: plant_id,
      title: capitalize(action),
      rrule: 'FREQ=DAILY;INTERVAL=' + freq + ';BYDAY=MO,TU,WE,TH,FR,SA,SU;COUNT=30',
      bgColor: '#f759ab'
    };
  }

  /** Get the header for visual calendar */
  getCalHeaders = (settings) => {
    let headers = [];
    settings.forEach(plant_entry => {
      headers.push({
        id: plant_entry.id,
        name: plant_entry.id,
      });
    })
    return headers;
  }

  render() {
    const {schedulerData} = this.state;
    schedulerData.setResources(this.getCalHeaders(this.props.settings));
    schedulerData.setEvents(this.getAllCalendarEvents(this.props.settings));
    return (
        <Scheduler
          schedulerData={schedulerData}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          onScrollLeft={this.onScrollLeft}
          onScrollRight={this.onScrollRight}
          onScrollTop={this.onScrollTop}
          onScrollBottom={this.onScrollBottom}
          toggleExpandFunc={this.toggleExpandFunc}
        />
    );
  }

  /** Below are the operations for visual calendar operations */
  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(this.state.cal_events);
    this.setState({
      viewModel: schedulerData
    })
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(this.state.cal_events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(this.state.cal_events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.state.cal_events);
    this.setState({
      viewModel: schedulerData
    })
  }

  eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  updateEventStart = (schedulerData, event, newStart) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData
    })
  }

  updateEventEnd = (schedulerData, event, newEnd) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData
    })
  }

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(`Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`)) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData
      })
    }
  }

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.next();
      schedulerData.setEvents(this.state.cal_events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  }

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(this.state.cal_events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = 10;
    }
  }

  onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollTop');
  }

  onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log('onScrollBottom');
  }

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData
    });
  }
}

export default DragDropContext(HTML5Backend)(CareReminderCalendar);
