import ReactDataGrid from "react-data-grid";
import React, {Component} from "react";
import {cr_columns, cr_dataSource} from "./CareReminderData";

class CareReminderSettings extends Component {
  state = { cr_dataSource };

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