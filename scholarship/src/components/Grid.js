// src/components/Grid.js
import React, { useState, useEffect } from 'react';
import './Grid.css';

const Grid = () => {
  let api = 'http://localhost:5000/courses';
  const [data, setData] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchApiData(api);
  }, []);

  console.log('data.......................', data);

  return (
    <>
      <h2>Course Grid</h2>
      <div className="grid-container">
        {data.map((course) => (
          <div key={course.course_id} className="grid-item">
            <h3>{course.course_name}</h3>
            <p>Tuition: ${course.course_tuition}</p>
            <p>Duration: {course.course_duration}</p>
            <p>university_name: {course.university_name}</p>
            <p>level_name: {course.level_name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
