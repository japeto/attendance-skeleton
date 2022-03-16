
import CourseList from './QuestionList';
import './styles.css';

function Course() {
  
  const courses = [{
    id:'750030M',
    name:'Course 1'
  },{
    id:'750083M',
    name:'Course 2'
  }];
  
  return (
    <div className="Center">
      <h3>Seleccione el curso</h3>
      <ul className="UL-Vertical">
        {
          courses.map((a_course) => 
                <CourseList course={a_course} key={a_course.id}/>)
        }
      </ul>
    </div>
  );
}

export default Course;
