import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
// Task4: Import all the required elements from the react-router-dom
import {Link, useParams, Outlet} from 'react-router-dom'


function Learn() {
    const {courseId} = useParams();
    const course = coursesData.find((course) => course.id === courseId)
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to="/courses" >
          <h2 className={style.back}>{"<<"}</h2>

        </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          {/*Task4: List of Chapters must be rendered here  */}
          <ul>
            {course.chapters.map((chap,i) => {
              return(
                <div className={style.chapterId} key={i}>
                  {/*Task-5 create link to each chapter to outlet chapter details */}
                  <Link to={`chapter/${chap.chapter}`}>
                  {chap.title}
                  </Link>
                  
                </div>
              )
            })}
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here 
         * using useOutletContext() we can get all course info in chapter.js file
        */}
        <Outlet context={{...course}}/> 
      </div>
    </div>
</div>
  );
}

export default Learn;
