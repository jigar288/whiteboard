import React from 'react'
import SubmitAssignmentComponent from '../components/SubmitAssignmentComponent'
import SubjectCards from '../components/SubjectCards'
import SubmitAssignmentSubjectCards from '../components/SubmitAssignmentSubjectCards'
import Course from '../types/Course'
import  { MathCalendarEvents } from '../data/subject-events/MathCalendarEvents'
import { EnglishCalendarEvents } from '../data/subject-events/EnglishCalendarEvents'
import { ScienceCalendarEvents } from '../data/subject-events/ScienceCalendarEvents'
import { ReadingCalendarEvents } from '../data/subject-events/ReadingCalendarEvents'
import { SocialStudiesCalendarEvents } from '../data/subject-events/SocialStudiesCalendarEvents'
import { Stack, DefaultPalette} from 'office-ui-fabric-react';
import { withRouter } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';


// TODO:
//add cards
  //clicking on them should lead to diff page --> use SubjectCards & pass in prop
//make assignments table
  //add two buttons 

// Styles definition
const stackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const verticalGapStackTokens = {
  childrenGap: 130,
  padding: 35,
};

// Tokens definition
const sectionStackTokens = { childrenGap: 10};
const wrapStackTokens = { childrenGap: 70 };  

class SubmitAssignmentsPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {courses: []}

    //todo: best practice to move these hard coded values under its own directory & import them in. Make a json object elsewhere & map over it here
    const math = new Course("Math", "Tim Johnson", "#E74856", "/math-grades", "https://i.imgur.com/Oi0eIGj.jpg", "87", "#ffffff", MathCalendarEvents);
    const english = new Course("English", "Amy Tan", "#0078D7", "/english-grades", "https://i.imgur.com/f6DRdKK.jpg", "85", "#ffffff", EnglishCalendarEvents);
    const science = new Course("Science", "Albert Einstein", "#00CC6A", "/science-grades", "https://i.imgur.com/jVuSHDV.jpg", "80", "#ffffff", ScienceCalendarEvents);
    const socialStudies = new Course("Social Studies", "Andrew Johnson", "#f79914", '/social-studies-grades', 'https://i.imgur.com/SdMxPEq.jpg', "90", "#ffffff", SocialStudiesCalendarEvents);
    const reading = new Course("Reading", "Alan Watts", "#B146C2", '/reading-grades', 'https://i.imgur.com/7FpdXft.jpg', "82", "#ffffff", ReadingCalendarEvents)
    
    this.state.courses.push(math);
    this.state.courses.push(english);
    this.state.courses.push(science);
    this.state.courses.push(socialStudies);
    this.state.courses.push(reading);
  }

    render() {

    // Mutating styles definition
    const cardsStackStyles = {
      root: {
        background: DefaultPalette.white,
      },
    };

      return (
        <div>
       <Stack styles={stackStyles} tokens={verticalGapStackTokens} >
          
       <Stack.Item order={1}>
            {/* try putting menu bar here */}
            <NavigationBar className='Submit Assignments' classRef='/submit-assignments'/>
       </Stack.Item>
          
          <Stack.Item order={2}>                        
            <Stack tokens={sectionStackTokens}>
              <Stack horizontal wrap styles={cardsStackStyles} tokens={wrapStackTokens}>


              {this.state.courses.map(course => (
                    <Stack.Item>                      
                      <SubmitAssignmentSubjectCards subjectName={course.subjectName} teacherName={course.teacherName} courseColor={course.courseColor} destinationRoute={course.destinationRoute} courseImageURL={course.courseImageURL} gradePercent={course.gradePercent} cardTextColor={course.cardTextColor} subjectEvents={course.calendarEvents} />            
                    </Stack.Item>
              ))} 

              </Stack>
            </Stack>                      
          </Stack.Item>

        </Stack>          
        </div>
      );
    }
}

export default withRouter(SubmitAssignmentsPage);
  