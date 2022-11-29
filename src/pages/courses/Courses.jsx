import React, { useState } from 'react'
import { useRef } from 'react'
import { Rating } from '@mui/material'
import { GiFireAce, GiGlobeRing, GiLizardTongue, GiPlanePilot } from 'react-icons/gi'

export const CoursePreview = (course) => {
  return (
    <div className='w-full p-3 d-flex flex-col align-items-start justoify-content-start gap-2'>
      <div
        className='w-full h-64 rounded-lg shadow-md'
        style={{
          backgroundImage: `url(${course.image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center'
        }}></div>
      <div className='w-full d-flex flex-row align-items-center justify-content-start gap-2'>
        <Rating name="read-only" value={course.rating} readOnly />
        <span className='text-muted'>{course.ratings} ratings</span> |
        <span className='text-muted'>{course.lessons ? course.lesson : 1} lessons</span> |
        <span className='text-muted'>{course.duration}</span> |
        <span className='fw-bold text-[#FAAF00]'>{course.price}</span>
      </div>
      <span className='fs-2 fw-bolder '>{course.title}</span>
      <p className='fw-bold'>{course.description.substring(0, 200)} ...</p>
      <div className='w-full d-flex flex-row align-items-center justify-content-start gap-2 my-3'>
        <span className='bg-[#4D7A7A] text-[#ffffff] hover:bg-green-800 rounded-full px-3 py-1 cursor-pointer'>
          Enroll Now
        </span>
        <span className='d-flex flex-col align-items-start justify-content-start'>
          <span>Enroll to start learning {course.title} today</span>
          <span className="text-muted text-xs">100% money back guarantee</span>
        </span>
      </div>
      <div className="row">
        <div className='col-sm-6 p-2'>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <GiGlobeRing className='text-primary fs-1' />
            <div className="d-flex flex-col align-items-start justify-content-center">
              <span className='fw-bold'>100% Online</span>
              <span className='text-muted'>Start now and learn at your own schedule</span>
            </div>
          </div>
        </div>
        <div className='col-sm-6 p-2'>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <GiFireAce className='text-primary fs-1' />
            <div className="d-flex flex-col align-items-start justify-content-center">
              <span className='fw-bold'>{course.duration} to complete</span>
              <span className='text-muted'>Start now and learn at your own schedule</span>
            </div>
          </div>
        </div>
        <div className='col-sm-6 p-2'>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <GiLizardTongue className='text-primary fs-1' />
            <div className="d-flex flex-col align-items-start justify-content-center">
              <span className='fw-bold'>Flexible schedule</span>
              <span className='text-muted'>Start now and learn at your own schedule</span>
            </div>
          </div>
        </div>
        <div className='col-sm-6 p-2'>
          <div className="d-flex align-items-center justify-content-start gap-2">
            <GiPlanePilot className='text-primary fs-1' />
            <div className="d-flex flex-col align-items-start justify-content-center">
              <span className='fw-bold'>English, French and Spanish</span>
              <span className='text-muted'>Start now and learn at your own schedule</span>
            </div>
          </div>
        </div>
      </div>
      <p>{course.description}</p>
    </div>
  )
}

const Courses = () => {
  const [activeCourse, setActiveCourse] = useState(null)
  const courses = [
    { id: 1, rating: 4, ratings: 200, title: "Course name", description: "The alarm went off at exactly 6:00 AM as it had every morning for the past five years. Barbara began her morning and was ready to eat breakfast by 7:00 AM. The day appeared to be as normal as any other, but that was about to change. In fact, it was going to change at exactly 7:23 AM.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=1" },
    { id: 2, rating: 4, ratings: 200, title: "Course name", description: "What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=2" },
    { id: 3, rating: 4, ratings: 200, title: "Course name", description: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=3" },
    { id: 4, rating: 4, ratings: 200, title: "Course name", description: "I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. The smell and feel of wet wood being turned are unique. The water is sprayed out as I cut through the different layers of wood. A log can turn into anything one's imagination can think of with the right set of hands-on tools. I have those hands and imagination. I use all of my senses and intuition to create a beautiful object. That is why I enjoy turning wood.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=4" },
    { id: 5, rating: 4, ratings: 200, title: "Course name", description: "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=5" },
    { id: 6, rating: 4, ratings: 200, title: "Course name", description: "There was a time when this wouldn't have bothered her. The fact that it did actually bother her bothered her even more. What had changed in her life that such a small thing could annoy her so much for the entire day? She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=6" },
    { id: 7, rating: 4, ratings: 200, title: "Course name", description: "“Ingredients for life,” said the backside of the truck. They mean food, but really food is only 1 ingredient of life. Life has so many more ingredients such as pain, happiness, laughter, joy, tears, and smiles. Life also has hard work, easy play, sleepless nights, and sunbathing by the ocean. Love, hatred, envy, self-assurance, and fear could be just down aisle 3 ready to be bought when needed. How I wish I could pull ingredients like these off shelves in a store.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=7" },
    { id: 8, rating: 4, ratings: 200, title: "Course name", description: "The alarm went off at exactly 6:00 AM as it had every morning for the past five years. Barbara began her morning and was ready to eat breakfast by 7:00 AM. The day appeared to be as normal as any other, but that was about to change. In fact, it was going to change at exactly 7:23 AM.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=8" },
    { id: 9, rating: 4, ratings: 200, title: "Course name", description: "What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=9" },
    { id: 10, rating: 4, ratings: 200, title: "Course name", description: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=10" },
    { id: 11, rating: 4, ratings: 200, title: "Course name", description: "I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. The smell and feel of wet wood being turned are unique. The water is sprayed out as I cut through the different layers of wood. A log can turn into anything one's imagination can think of with the right set of hands-on tools. I have those hands and imagination. I use all of my senses and intuition to create a beautiful object. That is why I enjoy turning wood.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=11" },
    { id: 12, rating: 4, ratings: 200, title: "Course name", description: "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=12" },
    { id: 13, rating: 4, ratings: 200, title: "Course name", description: "There was a time when this wouldn't have bothered her. The fact that it did actually bother her bothered her even more. What had changed in her life that such a small thing could annoy her so much for the entire day? She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=13" },
    { id: 14, rating: 4, ratings: 200, title: "Course name", description: "“Ingredients for life,” said the backside of the truck. They mean food, but really food is only 1 ingredient of life. Life has so many more ingredients such as pain, happiness, laughter, joy, tears, and smiles. Life also has hard work, easy play, sleepless nights, and sunbathing by the ocean. Love, hatred, envy, self-assurance, and fear could be just down aisle 3 ready to be bought when needed. How I wish I could pull ingredients like these off shelves in a store.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=14" },
    { id: 15, rating: 4, ratings: 200, title: "Course name", description: "The alarm went off at exactly 6:00 AM as it had every morning for the past five years. Barbara began her morning and was ready to eat breakfast by 7:00 AM. The day appeared to be as normal as any other, but that was about to change. In fact, it was going to change at exactly 7:23 AM.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=15" },
    { id: 16, rating: 4, ratings: 200, title: "Course name", description: "What was beyond the bend in the stream was unknown. Both were curious, but only one was brave enough to want to explore. That was the problem. There was always one that let fear rule her life.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=16" },
    { id: 17, rating: 4, ratings: 200, title: "Course name", description: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=17" },
    { id: 18, rating: 4, ratings: 200, title: "Course name", description: "I love the feel of wood curls flying off the lathe as I begin to shape the log in front of me. The sound of scraping changes based on the wetness of the wood, the speed at which the lathe is turning, and the type of cut I am making. The smell and feel of wet wood being turned are unique. The water is sprayed out as I cut through the different layers of wood. A log can turn into anything one's imagination can think of with the right set of hands-on tools. I have those hands and imagination. I use all of my senses and intuition to create a beautiful object. That is why I enjoy turning wood.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=18" },
    { id: 19, rating: 4, ratings: 200, title: "Course name", description: "She had been told time and time again that the most important steps were the first and the last. It was something that she carried within her in everything she did, but then he showed up and disrupted everything. He told her that she had it wrong. The first step wasn't the most important. The last step wasn't the most important. It was the next step that was the most important.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=19" },
    { id: 20, rating: 4, ratings: 200, title: "Course name", description: "There was a time when this wouldn't have bothered her. The fact that it did actually bother her bothered her even more. What had changed in her life that such a small thing could annoy her so much for the entire day? She knew it was ridiculous that she even took notice of it, yet she was still obsessing over it as she tried to fall asleep.", price: '$100', duration: "1 month", image: "https://picsum.photos/500/300?random=20" }
  ]

  const coursePreviewPanel = useRef()

  const loadCoursePreview = (course) => {
    setActiveCourse(CoursePreview(course))
  }

  useState(() => {
    loadCoursePreview(courses[0])
  }, [])


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
                    <span className='text-sm'>{course.description.substring(0, 100)} ...</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-sm-8'>
            <div className='sticky top-[100px] mb-3 min-h-[80vh] shadow rounded-3 shadow bg-white coursePreviewPanel w-full' ref={coursePreviewPanel}>
              {activeCourse}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
