import React from 'react';
import { MathGradeData } from '../data/grades/MathGradeData'
import SubjectGrade from '../components/SubjectGrade'


class MathGrades extends React.Component {
    render() {
      return (
        <div>                                       
            <SubjectGrade subjectName={"Math"} gradePercent={'87'} courseColor={'#E74856'} subjectGradesData={MathGradeData} />
        </div>
      );
    }
}

export default MathGrades;
