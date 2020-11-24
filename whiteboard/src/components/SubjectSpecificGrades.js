import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { PrimaryButton } from '@fluentui/react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import stackItemStyles from '../styles/commonStyles'
import Circle from 'react-circle';
import ViewGradeDetails from '../components/ViewGradeDetails'
import { withRouter } from "react-router-dom";

const numericalSpacingStackTokens = {
    childrenGap: 30,
    padding: 30,
};

// todo: add a back button
class SubjectSpecificGrades extends React.Component {

	constructor(props) {
		super(props);
	}
  
    render() {

      const viewGradeDetails = (cell, row) => {
        const teacherfeedback = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        this.props.history.push('/view-grade-details', { courseColor: this.props.location.state.courseColor, assignmentName: row.assignmentName, assignmentGrade: row.grade, imageURL: row.imageHandout, feedback: teacherfeedback });
      };


      const columns = [{
        dataField: 'assignmentName',
        text: 'Assignment Name',
        sort: true
      }, {
        dataField: 'type',
        text: 'Type',
        sort: true
      },
      {
        dataField: 'grade',
        text: 'Grade (%)',
        type: 'number',
        sort: true
      },  
      {
        dataField: 'details',
        text: 'Details',  
        formatter: (cell, row) => <PrimaryButton onClick={() => viewGradeDetails(cell, row) }> View Details </PrimaryButton>
    }];

      return (
        <div>                     

            <Stack tokens={numericalSpacingStackTokens}>
                <Stack.Item order={1} styles={stackItemStyles}>
                    <h1>{this.props.location.state.subjectName} Grades</h1>                
                </Stack.Item>          
                <Stack.Item order={4} styles={stackItemStyles}>
                    <Circle progress={this.props.location.state.gradePercent} progressColor={this.props.location.state.courseColor} textColor={this.props.location.state.courseColor} animationDuration="1s" animate={true} size={150} />     
                </Stack.Item>            
                <Stack.Item order={5}>
                    <BootstrapTable bootstrap4 keyField='id' data={ this.props.location.state.subjectGradesData } columns={ columns } />
                </Stack.Item>
            </Stack>  

        </div>
      );

    }
}

export default withRouter(SubjectSpecificGrades);
