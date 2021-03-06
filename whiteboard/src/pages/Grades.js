import React from 'react';
import GradesPageSubject from '../components/GradesPageSubject'
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import stackItemStyles from '../styles/commonStyles'
import Course from '../types/Course'
import { MathCalendarEvents } from '../data/subject-events/MathCalendarEvents'
import { EnglishCalendarEvents } from '../data/subject-events/EnglishCalendarEvents'
import { ScienceCalendarEvents } from '../data/subject-events/ScienceCalendarEvents'
import { ReadingCalendarEvents } from '../data/subject-events/ReadingCalendarEvents'
import { SocialStudiesCalendarEvents } from '../data/subject-events/SocialStudiesCalendarEvents'
import EnglishGradeData from '../data/grades/EnglishGradeData'
import MathGradeData from '../data/grades/MathGradeData'
import ReadingGradeData from '../data/grades/ReadingGradeData'
import SocialStudiesGradeData from '../data/grades/SocialStudiesGradeData'
import ScienceGradeData from '../data/grades/ScienceGradeData'
import { withRouter } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';


const wrapStackTokens = { childrenGap: 70 };
const verticalGapStackTokens = {
  childrenGap: 90,
  padding: 35,
};

class Grades extends React.Component {
  constructor(props){
    super(props);
    this.state = {courses: []}

    //when users click on the card it should lead to destination route
    //todo: connect pages based on destination route
    //todo: best practice to move these hard coded values under its own directory & import them in. Make a json object elsewhere & map over it here
    const math = new Course("Math", "Tim Johnson", "#E74856", "/math-grades", "https://i.imgur.com/Oi0eIGj.jpg", "87", "#ffffff", MathCalendarEvents, MathGradeData);
    const english = new Course("English", "Amy Tan", "#0078D7", "/english-grades", "https://i.imgur.com/f6DRdKK.jpg", "85", "#ffffff", EnglishCalendarEvents, EnglishGradeData);
    const science = new Course("Science", "Albert Einstein", "#00CC6A", "/science-grades", "https://i.imgur.com/jVuSHDV.jpg", "80", "#ffffff", ScienceCalendarEvents, ScienceGradeData);
    const socialStudies = new Course("Social Studies", "Andrew Johnson", "#f79914", '/social-studies-grades', 'https://i.imgur.com/SdMxPEq.jpg', "90", "#ffffff", SocialStudiesCalendarEvents, SocialStudiesGradeData);
    const reading = new Course("Reading", "Alan Watts", "#B146C2", '/reading-grades', 'https://i.imgur.com/7FpdXft.jpg', "82", "#ffffff", ReadingCalendarEvents, ReadingGradeData)
    

    this.state.courses.push(math);
    this.state.courses.push(english);
    this.state.courses.push(science);
    this.state.courses.push(socialStudies);
    this.state.courses.push(reading);
  }
  
    render() {
      return(
        <div>           
          <Stack tokens={verticalGapStackTokens}>

            {/* <Stack.Item styles={stackItemStyles}>          
              {/* todo: add a back button using horizontal Stack within this item */}
              {/* <h1>Grades</h1>     */}
            {/* </Stack.Item> */}
            <Stack.Item order={1}>
              <NavigationBar className='Grades' classRef='/grades'/>
            </Stack.Item>

            {/* fixme: later - better to just pass the entire course object as a prop instead of long prop list below */}
            <Stack.Item styles={stackItemStyles} order={2}>              
              <Stack horizontal wrap tokens={wrapStackTokens}>
                  {this.state.courses.map(course => (
                      <Stack.Item>                      
                       <GradesPageSubject subjectName={course.subjectName} teacherName={course.teacherName} courseColor={course.courseColor} destinationRoute={course.destinationRoute} courseImageURL={course.courseImageURL} gradePercent={course.gradePercent} cardTextColor={course.cardTextColor} subjectGradeData={course.subjectGradeData} />            
                      </Stack.Item>
                  ))} 
              </Stack> 
            </Stack.Item>

          </Stack>          
        </div>            
      );
    }
}

export default withRouter(Grades);