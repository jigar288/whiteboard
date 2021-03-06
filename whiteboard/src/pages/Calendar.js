import React, { useRef } from 'react';
import CalendarComponent from '../components/CalendarComponent';
import NavigationBar from '../components/NavigationBar';
import { Stack, DefaultPalette, AutoScroll, PrimaryButton } from 'office-ui-fabric-react';
import Course from '../types/Course'
import CalendarSubjectCard from '../components/CalendarSubjectCard'
import  { MathCalendarEvents } from '../data/subject-events/MathCalendarEvents'
import { EnglishCalendarEvents } from '../data/subject-events/EnglishCalendarEvents'
import { ScienceCalendarEvents } from '../data/subject-events/ScienceCalendarEvents'
import { ReadingCalendarEvents } from '../data/subject-events/ReadingCalendarEvents'
import { SocialStudiesCalendarEvents } from '../data/subject-events/SocialStudiesCalendarEvents'
import stackItemStyles from '../styles/commonStyles';

// Styles definition
const stackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const verticalGapStackTokens = {
  childrenGap: 70,
  padding: 35,
};

// Non-mutating styles definition
const itemStyles = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50,
};

// Tokens definition
const sectionStackTokens = { childrenGap: 10};
const wrapStackTokens = { childrenGap: 70 };


class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {courses: []}

    //when users click on the card it should lead to destination route
    //todo: connect pages based on destination route
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
            <NavigationBar className='Calendar' classRef='/calendar'/>
          </Stack.Item>
          <Stack.Item order={2}>
                        
            <Stack styles={stackItemStyles} tokens={sectionStackTokens}>
              <Stack horizontal wrap styles={cardsStackStyles} tokens={wrapStackTokens}>


              {this.state.courses.map(course => (
                    <Stack.Item>                      
                      <CalendarSubjectCard subjectName={course.subjectName} teacherName={course.teacherName} courseColor={course.courseColor} destinationRoute={course.destinationRoute} courseImageURL={course.courseImageURL} gradePercent={course.gradePercent} cardTextColor={course.cardTextColor} subjectEvents={course.calendarEvents} />            
                    </Stack.Item>
              ))} 

              </Stack>
            </Stack>                      

          </Stack.Item>
          <Stack.Item order={3}>

            <CalendarComponent/>

          </Stack.Item>
        </Stack>          



      </div>
    );
  }
}

export default Calendar;
