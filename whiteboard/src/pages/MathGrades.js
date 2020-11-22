import React from 'react';
import MathGradesData from '../data/grades/MathGradeData'
import SubjectGrade from '../components/SubjectGrade'


class MathGrades extends React.Component {
    render() {
      return (
        <div>                                       
            <SubjectGrade subjectName={"Math"} gradePercent={'87'} courseColor={'#E74856'} subjectGradesData={MathGradesData} />
        </div>
      );
    }
}

export default MathGrades;
