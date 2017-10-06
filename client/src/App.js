import React, { Component } from 'react';
import axios from 'axios';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Table from './Table.js';
import {
    getTableColumnHeaders
} from './app_utils';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTableData = this.setTableData.bind(this);
    this.setTableColumnHeaders = this.setTableColumnHeaders.bind(this)

    this.state = {
      tableData : {},
      tableColumnHeaders: []
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get("http://localhost:9090/").then(response => {
      if(response.data){
        console.log(response)
        this.setTableData(response.data);
        this.setTableColumnHeaders(response.data);
      }
    })
  }

  setTableData(responseData) {
    this.setState({ tableData: responseData }) 
  }
  setTableColumnHeaders(responseData) {
    this.setState({ tableColumnHeaders: getTableColumnHeaders(responseData) })
  }
  

  render() {
		const inputFieldStyle = {
			width: "10%"
		}
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsTextarea" style={{ width: "100%" }}>
            <h5>Enter Address:</h5>
            <FormControl
              id="customerIDFilter"
              type="text"
              placeholder="Address"
              style={inputFieldStyle}
            />
            <br />
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">Send</Button>
            </ButtonToolbar>
          </FormGroup>
        </form>

      <Table 
        tableData={this.state.tableData}
        tableColumns={this.state.tableColumnHeaders}
      />

      </div>
    );
  }
}

export default App;
