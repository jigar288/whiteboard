import React from 'react';
import { Stack, DefaultPalette } from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'
import { Card } from '@uifabric/react-cards';
import { Table } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { PrimaryButton } from '@fluentui/react';

const stackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const verticalGapStackTokens = {
  childrenGap: 30,
  padding: 30,
};


/*
 todo:
    - add back button
    - link this component from calendar via react redirect tag
    - pass in props from react redirect component & render data based on it: subject, course color, assignments array
    - https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component
    - https://www.google.com/search?q=react+pass+props+redirect
*/


class EventsByCourse extends React.Component {

    constructor(props) {
      super(props);
      this.state = { events: [] };

      this.setState(state => ({
        events: this.props.location.state.subjectEvents
      }));

    }

    componentDidMount(){

      this.state.events.map( (item, key)  => (
        console.log(item.assignmentName + ' from state')
      ));

    }

    goBack = () => {
      this.props.history.push('/calendar');
    }

    render() {

      const rowsData = this.props.location.state.subjectEvents.map( (item, key)  => (
        <tr key={key}>
          <td>{item.assignmentName}</td>
          <td>{item.dueDate}</td>
        </tr> 
      ));

      return (
        <div>
      <Stack styles={stackStyles} tokens={verticalGapStackTokens}>

        <Stack.Item order={1}>
          <PrimaryButton onClick={this.goBack}>Back</PrimaryButton>
        </Stack.Item>

        <Stack.Item styles={stackItemStyles} order={2}>          
          <h2>Subject: {this.props.location.state.subjectName}</h2>      
        </Stack.Item> 

        <Stack.Item styles={stackItemStyles} order={2}>
            <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Assignment Name</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {rowsData}
                </tbody>
            </Table>
        </Stack.Item>

      </Stack>

        </div>
      );
    }
}

export default withRouter(EventsByCourse);
