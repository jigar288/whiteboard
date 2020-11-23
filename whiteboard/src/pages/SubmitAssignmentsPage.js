import React from 'react'
import SubmitAssignmentComponent from '../components/SubmitAssignmentComponent'
import SubjectCards from '../components/SubjectCards'

// TODO:
//add cards
  //clicking on them should lead to diff page --> use SubjectCards & pass in prop
//make assignments table
  //add two buttons 

class SubmitAssignmentsPage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
}

export default SubmitAssignmentsPage;
  