import React, {Component} from "react";
import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

import {cr_columns, cr_dataSource, cr_gridStyle} from "./CareReminderData";
import Sidebar from "./SideBar";

class CareReminder extends Component {
  render() {
    return (
      <div className='profile-frame'>
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
            <ReactDataGrid
              idProperty="id"
              columns={cr_columns}
              dataSource={cr_dataSource}
              style={cr_gridStyle}
            />
          </div>

          <div className='profile-subtitle'> Weekly Care Reminder Calender </div>
          <div className='profile-sub-content'>
          </div>
          </div>
      </div>
    );
  }
}

export default CareReminder;