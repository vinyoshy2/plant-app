import {DragDropContext} from "react-dnd";
import HTML5Backend from 'react-dnd-html5-backend';
import React from 'react';
import moment from 'moment'
import Scheduler, {SchedulerData, ViewTypes, DATE_FORMAT} from 'react-big-scheduler'

import 'react-big-scheduler/lib/css/style.css'

/* Reference info
   React lib: https://github.com/StephenChou1017/react-big-scheduler
   Repetitive calendar rule: https://github.com/jakubroztocil/rrule
      (this relates to the rrule format in events variable)
*/

const available_times = [
  {
    id: 'Bedroom Bonsai - Bonsai',
    name: 'Bedroom Bonsai - Bonsai',
    groupOnly: true
  }, {
    id: 'Office Desk - Bonsai',
    name: 'Office Desk - Bonsai'
  }, {
    id: 'Kitchen Sill - Bonsai',
    name: 'Kitchen Sill - Bonsai',
  }, {
    id: 'Kitchen Sill - Sill',
    name: 'Kitchen Sill - Sill',
  }
];

const date_today = new moment().format(DATE_FORMAT);

const events = [
  {
    id: 1,
    start: date_today + ' 08:30:00',
    end: date_today + ' 09:00:00',
    resourceId: 'Kitchen Sill - Bonsai',
    title: 'R2 has recurring tasks every week on Tuesday, Friday',
    rrule: 'FREQ=DAILY;DTSTART=20171219T000000Z;INTERVAL=3;BYDAY=MO,TU,WE,TH,FR,SA,SU;COUNT=3',
    bgColor: '#f759ab'
  }
];

class CareReminderCalendar extends React.Component {
  constructor(props){
    super(props);

    let schedulerData = new SchedulerData(new moment().format(DATE_FORMAT), ViewTypes.Week);
    moment.locale('en');
    schedulerData.setLocaleMoment(moment);
    schedulerData.setResources(available_times);
    schedulerData.setEvents(events);
    this.state = {
      schedulerData: schedulerData,
      events: events
    }
  }
  render() {
    const {schedulerData} = this.state;
    return (
      <Scheduler schedulerData={schedulerData}
                 prevClick={this.prevClick}
                 nextClick={this.nextClick}
                 onSelectDate={this.onSelectDate}
                 onViewChange={this.onViewChange}
                 eventItemClick={this.eventClicked}
                 viewEventClick={this.ops1}
                 viewEventText="Ops 1"
                 viewEvent2Text="Ops 2"
                 viewEvent2Click={this.ops2}
                 updateEventStart={this.updateEventStart}
                 updateEventEnd={this.updateEventEnd}
                 moveEvent={this.moveEvent}
                 newEvent={this.newEvent}
                 onScrollLeft={this.onScrollLeft}
                 onScrollRight={this.onScrollRight}
                 onScrollTop={this.onScrollTop}
                 onScrollBottom={this.onScrollBottom}
                 toggleExpandFunc={this.toggleExpandFunc}
      />
    );
  }
  prevClick = (schedulerData)=> {
    schedulerData.prev();
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  nextClick = (schedulerData)=> {
    schedulerData.next();
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(this.state.events);
    this.setState({
      viewModel: schedulerData
    })
  }

  eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops1 = (schedulerData, event) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops2 = (schedulerData, event) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(`Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`)){

      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if(item.id >= newFreshId)
          newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: 'New event you just created',
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: 'purple'
      }
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData
      })
    }
  }

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
      schedulerData.setEvents(this.state.events);
      this.setState({
        viewModel: schedulerData
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  }

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if(schedulerData.ViewTypes === ViewTypes.Day) {
      schedulerData.prev();
      schedulerData.setEvents(this.state.events);
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
