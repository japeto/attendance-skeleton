

import './styles.css';

function CourseList(props) {
  let course = props.course;

  return <div className="container">
    <div className="Notice Notice-success">
        <strong>{course.id}</strong> | <b>Name</b>: {course.name}
    </div>
  </div>;
}

export default CourseList;
