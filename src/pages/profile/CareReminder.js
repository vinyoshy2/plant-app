import React, {Component} from "react";

import CareReminderCalendar from "./CareReminderCalendar";
import CareReminderSettings from "./CareReminderSetting"
import {cr_dataSource} from "./CareReminderData";
import Sidebar from "./SideBar";
import projectJSON from "../../data/projects.json";
import {getEntryFromID} from "../../utils/utils.js";

class CareReminder extends Component {

  constructor(props) {
    super(props);
    var added_ids = Object.keys(this.props.added);
    var entries = []
    for (var i=0; i < added_ids.length; i++) {
        var info = getEntryFromID(parseInt(added_ids[i]), projectJSON);
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
    this.state = { settings: entries, calEvents: []}
  }

  handleSettingChange = (new_settings) => {
    this.setState({settings: new_settings});
  }

  render() {
    return (
      <div className='vertical-frame'>
        <Sidebar />
        <div className='vertical-divider' />
        <div className='profile-content'>
          <div className='profile-title'> Plant Care Calendar </div>
          <div className='horizontal-divider'/>
          <div className='profile-subtitle'> Upcoming Caring Events </div>
          <div className='profile-sub-content'>
            <div className='list-title'> Today </div>
            <div className='list-item'> <b>9:30 AM</b>  Dust leaves of Bonsai in Bedroom </div>
            <div className='list-item'> <b>5:00 PM</b>  Water Sill in Kitchen </div>
          </div>

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
            />
          </div>
          </div>
      </div>
    );
  }
}

export default CareReminder;
