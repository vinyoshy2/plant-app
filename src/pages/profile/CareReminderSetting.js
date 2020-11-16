import React, {Component} from "react";
import ReactDataGrid from "react-data-grid";

import {cr_columns, cr_dataSource} from "./CareReminderData";

/* Reference info:
   lib info (v5): https://adazzle.github.io/react-data-grid/
   lib github link: https://github.com/adazzle/react-data-grid
       Note: the latest v7 is incomplete and missed features and example
             (only w. example in tsx).
             old v5 does not as fancy as v7, but is workable to some extend.
*/

class CareReminderSettings extends Component {
  state = { cr_dataSource };

  // ===== Insert care settings =====
  // Usage: when starting a new project inject new settings.
  // Input:
  //   settings: an array of object with format same with cr_dataSource.

  // TODO: not sure whether this will automatically update the table.
  insertCareSettings(settings) {
    for (let i = 0; i < settings.length; ++i) {
      cr_dataSource.push(settings[i]);
    }
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      for (let i = fromRow; i <= toRow; i++) {
        cr_dataSource[i] = { ...cr_dataSource[i], ...updated };
      }
      return { cr_dataSource };
    });
  };
  render() {
    return (
      <ReactDataGrid
        columns={cr_columns}
        rowGetter={i => this.state.cr_dataSource[i]}
        rowsCount={3}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}


export default CareReminderSettings;