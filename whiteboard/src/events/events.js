import MathCalendarEvents from '../data/subject-events/MathCalendarEvents'
import ReadingCalendarEvents from '../data/subject-events/ReadingCalendarEvents'
// const now = new Date()

// TODO: Add descriptions for each of the events!

let events = [] // Array to house all events

// Add all math events with time stamp
MathCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#E74856',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#E74856',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

ReadingCalendarEvents.forEach(item => {
  let endDate = new Date(item.dueDate);
  endDate.setHours(item.timeEnd[0]);
  endDate.setMinutes(item.timeEnd[1]);
  endDate.setSeconds(item.timeEnd[2]);

  let startDate = new Date(item.dueDate);
  startDate.setHours(item.timeStart[0]);
  startDate.setMinutes(item.timeStart[1]);
  startDate.setSeconds(item.timeStart[2]);

  events.push({
    color: '#B146C2',
    title: item.assignmentName,
    allDay: true,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });

  events.push({
    color: '#B146C2',
    title: item.assignmentName,
    start: startDate,
    end: endDate,
    submitted: item.submitted
  });
});

export default events;

// export default [
//   {
//     color: '#E74856',
//     title: 'Math Homework 3: Shapes',
//     start: new Date(2020, 10, 12, 23, 0, 0),
//     end: new Date(2020, 10, 12, 23, 59, 59),
//   },
//   {
//     color: '#E74856',
//     title: 'Math Quiz 1: Triangles',
//     start: new Date(2020, 10, 13, 11, 0, 0),
//     end: new Date(2020, 10, 13, 12, 0, 0),
//   },
//   {
//     color: '#E74856',
//     title: 'Math Quiz 2: Subtraction',
//     start: new Date(2020, 10, 15, 11, 0, 0),
//     end: new Date(2020, 10, 15, 12, 0, 0),
//   },
//   {
//     color: '#E74856',
//     title: 'Math Quiz 3: Addition',
//     start: new Date(2020, 10, 16, 11, 0, 0),
//     end: new Date(2020, 10, 16, 12, 0, 0),
//   },
//   {
//     title: 'Study For Math Exam!',
//     start: new Date(2020, 10, 17, 16, 0, 0),
//     end: new Date(2020, 10, 17, 18, 0, 0),
//   },
//   {
//     color: '#E74856',
//     title: 'Math Exam 1: Addition and Subtraction',
//     start: new Date(2020, 10, 18, 17, 0, 0),
//     end: new Date(2020, 10, 18, 19, 30, 0),
//   },
// ]
