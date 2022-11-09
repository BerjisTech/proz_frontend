import React from 'react'
import { useRef } from 'react'

export const CoursePreview = (course) => {
  return (
    `<div class='w-full p-3'>
      <img src=${course.image} alt=${course.title} class='w-[100%] h-auto rounded-3'/>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <p>${course.price}</p>
    </div>`
  )
}

const Courses = () => {
  const courses = [
    { id: 1, title: "Course name", description: "First course in the list.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=1" },
    { id: 2, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=2" },
    { id: 3, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=3" },
    { id: 4, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=4" },
    { id: 5, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=5" },
    { id: 6, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=6" },
    { id: 7, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=7" },
    { id: 8, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=8" },
    { id: 9, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=9" },
    { id: 10, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=10" },
    { id: 11, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=11" },
    { id: 12, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=12" },
    { id: 13, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=13" },
    { id: 14, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=14" },
    { id: 15, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=15" },
    { id: 16, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=16" },
    { id: 17, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=17" },
    { id: 18, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=18" },
    { id: 19, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=19" },
    { id: 20, title: "Course name", description: "Some type of description goes here", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=20" }
  ]

  const coursePreviewPanel = useRef()

  const loadCoursePreview = (course) => {
    let coursePreview = CoursePreview(course)
    coursePreviewPanel.current.innerHTML = coursePreview
  }


  return (
    <div>
      <div className=''>
        <div className='d-flex align-items-start justify-content-between w-full gap-3 flex-wrap m-2'>
          <span className='fs-3'>Courses</span>
          <a href="https://www.proz.com/business/100">View All Courses</a>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            {courses.map(course => (
              <div className='cursor-pointer' key={course.id} onClick={() => loadCoursePreview(course)}>
                <div className='d-flex align-items-center justify-content-start gap-2 shadow rounded-3 bg-white mb-3 h-[100px]'>
                  <div className='h-[90px] w-[140px] m-1 rounded-2' style={{ backgroundImage: `url(${course.image})` }}></div>
                  <div className='d-flex align-items-start justify-content-start flex-col flex-fill gap-3 h-100 my-2 me-1'>
                    <span className='fw-bold'>{course.title} <span className='text-sm fw-light text-muted'>{course.price}</span></span>
                    <span className='text-sm'>{course.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-sm-8'>
            <div className='sticky top-[100px] h-[80vh] shadow rounded-3 shadow bg-white coursePreviewPanel w-full' ref={coursePreviewPanel}>
              Course preview goes here
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
