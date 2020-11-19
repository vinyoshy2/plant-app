import React, {Component} from "react";
import ReactDataGrid from "react-data-grid";

import {cr_columns} from "./CareReminderData";

/* Reference info:
   lib info (v5): https://adazzle.github.io/react-data-grid/
   lib github link: https://github.com/adazzle/react-data-grid
       Note: the latest v7 is incomplete and missed features and example
             (only w. example in tsx).
             old v5 does not as fancy as v7, but is workable to some extend.
*/

class CareReminderSettings extends Component {
  // ===== Insert care settings =====
  // Usage: when starting a new project inject new settings.
  // Input:
  //   settings: an array of object with format same with cr_dataSource.

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = this.props.settings;
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      this.props.handleSettingChange(rows);
      return rows;
    });

  };

  render() {
    return (
      <ReactDataGrid
        columns={cr_columns}
        rowGetter={i => this.props.settings[i]}
        rowsCount={this.props.settings.length}
        onGridRowsUpdated={this.onGridRowsUpdated}
        enableCellSelect={true}
      />
    );
  }
}


export default CareReminderSettings;