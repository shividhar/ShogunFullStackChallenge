import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (this.props.tableColumns.length != 0) {
      const inputFieldStyle = {
        width: "10%"
      }
      return (
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table-all.min.css"></link>

          <BootstrapTable data={this.props.tableData} striped={true} hover={true}>
              {
                this.props.tableColumns.map((value, index) => {
                  if (index == 0) {
                    return (<TableHeaderColumn width='150' dataField={value} dataSort isKey>{value}</TableHeaderColumn>);
                  } else {
                    return (<TableHeaderColumn width='150' dataField={value} dataSort>{value}</TableHeaderColumn>);
                  }
                })
              }
          </BootstrapTable>

        </div>
      );
    }else{
      return null;
    }
  }
}

export default Table;
