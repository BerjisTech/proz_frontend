import React from 'react'
import 'react-icons/fi'
import 'react-icons/gi'
import 'react-icons/bi'
import { FiPenTool } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';

const Tranlsate = () => {
  const draftJobs = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    },
  ]
  return (
    <div>
      <h1>Tranlsate</h1>
      <div className="jobs">
        {/* List jobs with name, description, tags, time, pay, job link, language */}
        {draftJobs.map((job) => (
          <div className="job d-flex gap-2 bg-[#F6F9F8] my-3 p-3 hover:shadow-lg" key={job.id}>
            <div className='flex-fill h-full'>
              <div className='d-flex flex-column'>
                <span className='fw-bold'>Job Title Here</span>
                <div className='text-[13px] my-2'>
                  <span className='fw-bold me-1'>Company name here</span>
                  <span>Location here</span>
                </div>
                <p>
                  Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
              </div>
            </div>
            <div className='h-[100]'>
              <div className="gap-2 h-full d-flex flex-col justify-content-between align-items-end">
                <div className='w-full d-flex align-items-center justify-content-between'>
                  <span className='text-[10px] text-gray-600'>Posted 12 days ago</span>
                  <FiPenTool />
                  <GiCancel />
                </div>
                <div className='w-full d-flex align-items-center justify-conmtent-between'>
                  <span className='text-gray-600'>19 views</span>
                  <a href={`/job/translate/${job.id}`} className='px-2 py-1 rounded-2 bg-[#336666] text-[#ffffff]'>View</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default Tranlsate;
