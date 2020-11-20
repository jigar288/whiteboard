import React from 'react';
import { Stack, DefaultPalette } from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'
import { Card } from '@uifabric/react-cards';
import { Table } from 'react-bootstrap';


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
    render() {
      return (
        <div>

      {/*
      
      */}
      <Stack styles={stackStyles} tokens={verticalGapStackTokens}>

        <Stack.Item order={1}>
          <span>Item One: Back button</span>
        </Stack.Item>

        <Stack.Item styles={stackItemStyles} order={2}>          
          <h2>Subject: Reading</h2>      
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
                  <tr>
                    <td>Exam 5</td>
                    <td>11/8/2020</td>
                  </tr>
                  <tr>
                    <td>Quiz 7</td>
                    <td>11/18/2020</td>
                  </tr>
                  <tr>
                    <td>Homework 5</td>
                    <td>11/28/2020</td>
                  </tr>
                </tbody>
            </Table>
        </Stack.Item>

      </Stack>

        </div>
      );
    }
}

export default EventsByCourse;
