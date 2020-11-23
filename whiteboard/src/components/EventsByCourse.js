import React from 'react';
import { Stack, DefaultPalette, RGBA_REGEX, rgb2hex } from 'office-ui-fabric-react';
import stackItemStyles from '../styles/commonStyles'
import { Card } from '@uifabric/react-cards';
import { Table } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { PrimaryButton } from '@fluentui/react';
import { max } from 'moment';
import '../css/styles.css'

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
      this.state = { events: [], color: this.hexToRgb(this.props.location.state.courseColor) };

      this.setState(state => ({
        events: this.props.location.state.subjectEvents
      }));

    }

    // Taken directly from Tim Down
    // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
    
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    
    rgbToHex(r, g, b) {
      return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    // End of code taken from stackoverflow

    addOpacity(opac) {
      return 'rgba('+this.state.color.r+', '+this.state.color.g+', '+this.state.color.b+', ' +opac+')'
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

      const stackStyles = {
        root: {
          background: DefaultPalette.white
        },
      };

      // alert(document.documentElement.offsetHeight)

      const courseColors = {
        courseBackground: {
          backgroundColor: this.addOpacity(0.6)
        },
        headerBackground: {
          backgroundColor: this.addOpacity(1)
        },
      }

      const tableColors = {
        backgroundColor: 'white',
        opacity: 1,
      }

      const rowsData = this.props.location.state.subjectEvents.map( (item, key)  => (
        <tr key={key}>
          <td>{item.assignmentName}</td>
          <td>{item.dueDate}</td>
        </tr>
      ));

      var newStyles = document.createElement('style');
      document.head.append(newStyles);
      newStyles.innerHTML = ".myTable thead th {"+
                              "border: solid 1px black"+
                            "}"+
                            ".myTable tbody td {"+
                              "border: solid 1px black"+
                            "}"+
                            ".myTable tbody tr:nth-child(even) {"+
                              "background-color: "+this.addOpacity(0.1)+
                            "}"+
                            ".myTable tbody tr:nth-child(odd) {"+
                              "background-color: "+this.addOpacity(0.3)+
                            "}";

      // alert(this.rgbToHex(this.state.color.r, this.state.color.g, this.state.color.b))

      // alert(stackStyles.height)

      return (
        <div>
          <Stack className="classStack" styles={stackStyles} style={courseColors.courseBackground} tokens={verticalGapStackTokens}>

            <Stack.Item order={1}>
              <PrimaryButton onClick={this.goBack}>Back</PrimaryButton>
            </Stack.Item>

            <Stack.Item styles={stackItemStyles} style={tableColors} order={2}>          
              <h2>Subject: {this.props.location.state.subjectName}</h2>      
            </Stack.Item> 

            <Stack.Item styles={stackItemStyles} order={2}>
                <Table className='myTable' style={tableColors} striped bordered hover>
                    <thead style={courseColors.headerBackground}>
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
