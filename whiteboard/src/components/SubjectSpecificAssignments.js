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
class SubjectSpecificAssignments extends React.Component {

	constructor(props) {
		super(props);
	}
  
    render() {

      const viewGradeDetails = (cell, row) => {
          this.props.history.push('/submit-assignment-file', {assignmentName: row.assignmentName, dueDate: row.assignmentName});
      };


      const columns = [{
        dataField: 'assignmentName',
        text: 'Assignment Name',
        sort: true
      },
      {
        dataField: 'dueDate',
        text: 'Due Date',
        sort: true
      },  
      {
        dataField: 'details',
        text: 'Details',  
        formatter: (cell, row) => <PrimaryButton onClick={() => viewGradeDetails(cell, row) }> Submit Assignments </PrimaryButton>
    }];

      return (
        <div>                     

            <Stack tokens={numericalSpacingStackTokens}>
                <Stack.Item order={1} styles={stackItemStyles}>
                    <h1>{this.props.location.state.subjectName} Assignments</h1>                
                </Stack.Item>                  
                <Stack.Item order={2}>
                    <BootstrapTable bootstrap4 keyField='id' data={ this.props.location.state.subjectEvents } columns={ columns } />
                </Stack.Item>
            </Stack>  

        </div>
      );

    }
}

export default withRouter(SubjectSpecificAssignments);
