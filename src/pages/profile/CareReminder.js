import React, {Component} from "react";
import fs from 'fs';
import Sidebar from "./SideBar";

import ReactDataGrid from '@inovua/reactdatagrid-enterprise';
import '@inovua/reactdatagrid-enterprise/index.css';

const columns = [
  { name: 'project', header: 'Projects', minWidth: 50, defaultFlex: 1 },
  { name: 'plant', header: 'Plant', maxWidth: 1000, defaultFlex: 1 },
  { name: 'water', header: 'Water (every N days)', minWidth: 50, defaultFlex: 1 },
  { name: 'fertilize', header: 'Fertilize  (every N days)', minWidth: 50, defaultFlex: 1 },
  { name: 'dust', header: 'Dust  (every N days)', minWidth: 50, defaultFlex: 1 },

];

const gridStyle = {};

const dataSource = [
  { id: 1, project: 'Bedroom Bonsai', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { id: 2, project: 'Office Desk', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { id: 3, project: 'Office Desk', plant: 'Bonsai', water: 2, fertilize: 7, dust: 30},
  { id: 4, project: 'Kitchen Sill', plant: 'Sill', water: 2, fertilize: 7, dust: 30},
];

function readSettings() {
  // Codes refers https://stackoverflow.com/questions/28543821/convert-csv-lines-into-javascript-objects and
  //              https://nodejs.dev/learn/reading-files-with-nodejs
  // TODO: not working now.
  fs.readFile('./care_setting.csv', (err,data) => {
    if (err) {
      return console.log(err);
    }
    // Split data into lines and separate headers from actual data
    // using Array spread operator
    const [headerLine, ...lines] = data.split('\n');

    // Use common line separator, which parses each line as the contents of a JSON array
    const parseLine = (line) => JSON.parse(`[${line}]`);

    // Split headers line into an array
    const headers = parseLine(headerLine);

    // Create objects from parsing lines
    // There will be as much objects as lines
    return lines.map((line, index) =>
      // Split line with JSON
      parseLine(line).reduce(
        // Reduce values array into an object like: { [header]: value }
        (object, value, index) => ({...object, [headers[index]]: value,}), {})
      );
  })
}

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
              columns={columns}
              dataSource={dataSource}
              style={gridStyle}
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