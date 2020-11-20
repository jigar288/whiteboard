import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { PrimaryButton } from '@fluentui/react';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import stackItemStyles from '../styles/commonStyles'
import Circle from 'react-circle';
import ViewGradeDetails from '../components/ViewGradeDetails'

// function openDetails(detailsLink){
//     alert(detailsLink);
// }


const numericalSpacingStackTokens = {
    childrenGap: 30,
    padding: 30,
};

// todo: add a back button
class SubjectGrade extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: true,
		};
		this.openDetails = this.openDetails.bind(this);
	}
  
  //todo: add arugments based on button click
	openDetails() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
  }  
  


    render() {
      const { opened } = this.state;

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
        formatter: (cell, row) => <PrimaryButton onClick={() => this.openDetails() }> View Details </PrimaryButton>
    }];
    

      return (
        <div>                     

            {opened && (
                <Stack tokens={numericalSpacingStackTokens}>
                    <Stack.Item order={1} styles={stackItemStyles}>
                        <h1>{this.props.subjectName} Grades</h1>                
                    </Stack.Item>          
                    <Stack.Item order={4} styles={stackItemStyles}>
                        <Circle progress={this.props.gradePercent} progressColor={this.props.courseColor} textColor={this.props.courseColor} animationDuration="1s" animate={true} size={150} />     
                    </Stack.Item>            
                    <Stack.Item order={5}>
                        <BootstrapTable bootstrap4 keyField='id' data={ this.props.subjectGradesData } columns={ columns } />
                    </Stack.Item>
                </Stack>  
            )}   

            {!opened && (
              <ViewGradeDetails showGradeList={this.openDetails} courseColor={'#E74856'} assignmentName={"Homework 3 Shapes"} grade={"Homework 3 Shapes"}  assignmentGrade={'90%'} imageURL={"https://i.imgur.com/6cz7q1w.png"} feedback={'Good Job! You drew all the shapes!'} />
            )}
        

        </div>
      );

    }
}

export default SubjectGrade;
