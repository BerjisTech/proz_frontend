import React from 'react'
import Feed from '../../components/Feed'
import 'react-icons/gi'
import { GiBriefcase, GiHelp, GiWallet } from 'react-icons/gi'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { BsGrid1X2Fill } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <div className='m-5'>
      <div className='row'>
        <div className='col-sm-8'>
          {/* Jobs */}
          <div className='rounded-3 shadow bg-white border-1'>
            <div className='row h-full border-bottom-1'>
              <div className='col-sm-8 h-full'>
                <div className='d-flex align-items-center justify-content-start mb-3'>
                  <img src='/images/translate.png' alt='open-book' className='border-1 w-[70px] h-[70px] p-1 rounded-full shadow img-fluid' />
                  <div className='ms-3 mt-2'>
                    <p className="text-[12px] fw-bold">Active job</p>
                    <div className='d-flex flex-column align-items-start justify-content-start'>
                      <span className="fs-4">Translate Legal Document...</span>
                      <span>Spanish to English</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-4'>
                <div className='d-flex align-items-center justify-content-center h-full '>
                  <a href='/dashboard/job/1' className='btn btn-sm bg-[#186362] btn btn-sm py-2 px-3 rounded-3 text-white hover:bg-[#2E6969]'>Finish Translating</a>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-6 border-end-1'>
                <div className='p-2 text-center'>
                  <a href='/dashboard/jobs' className='text-[#186362] text-decoration-none'>
                    <span className="fw-bold">13</span> Jobs Completed
                  </a>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='p-2 text-center'>
                  <a href='/dashboard/jobs' className='text-[#186362] text-decoration-none'>
                    <span className="fw-bold">2</span> Ongoing Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ProZPay */}
          <div className='rounded-3 shadow bg-[#DFEDEB] border-1 border-[#2E6969] p-2 mt-3'>
            <div className='d-flex align-items-center justify-content-center'>
              <img src='/images/money-bag.jpg' alt='open-book' className='border-1 w-[50px] h-[50px] rounded-full img-fluid' />
              <span className='flex-fill fw-bold ps-3 text-[#186362]'>Manage your invoices and payments with ease</span>
              <a href='/dashboard/prozpay' className='bg-[#186362] py-2 px-3 rounded-3 text-white hover:bg-[#2E6969]'>Visit ProZPay&trade;</a>
            </div>
          </div>
          {/* Extra cards */}
          <div className='mt-4'>
            <div className='d-flex align-items-center justify-content-between'>
              <span className='fs-3'>Usefull tools</span>
              <AiOutlineEllipsis className='fs-1' />
            </div>
            <div className='bg-white rounded-3 border-1 row m-0 p-0'>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-red-200 rounded-full'><GiWallet size={50} className="text-red-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>ProzPay&trade;</span>
                  <span className='text-gray-500'>Manage all your funds in one place. Organize your invoices, handle disputes and send notiofications to your clients</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="dashboard/prozpay" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit ProzPay</a>
                    <a href="dashboard/help/prozpay" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-purple-200 rounded-full'><GiBriefcase size={50} className="text-purple-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Job Management</span>
                  <span className='text-gray-500'>Manage your jobs. Keep all files in one place and streamline your communication with clients. You can also collaborate...</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="dashboard/jobs" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Manage My Jobs</a>
                    <a href="dashboard/help/jobs" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-orange-200 rounded-full'><BsGrid1X2Fill size={50} className="p-1 text-orange-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Apps & Integration</span>
                  <span className='text-gray-500'>Integrete other apps to enjoy ProZ tp the fullest. Get access to TMTown, Protemos, CafeTran and many more</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="dashboard/apps" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit AppStore</a>
                    <a href="dashboard/help/apps" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
              <div className='col-sm-6 m-0 border-1 p-3'>
                <div className='d-flex align-items-start justify-content-start flex-col gap-3'>
                  <span className='p-3 bg-pink-200 rounded-full'><GiWallet size={50} className="text-pink-800 d-flex align-items-center justify-content-center" /></span>
                  <span className='fw-bold'>Community</span>
                  <span className='text-gray-500'>Interact with the community to get the latest trends and news from other translators and intepreters.</span>
                  <span className='d-flex align-items-center justify-content-center gap-2'>
                    <a href="dashboard/prozpay" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3'>Visit ProzPay</a>
                    <a href="dashboard/prozpay/help" className='text-[12px] px-2 py-1 border-1 bg-blue-200 text-blue-800 fw-bold rounded-3 d-flex align-items-center justify-content-center gap-1'>Help <GiHelp /></a>
                    <AiOutlineEllipsis className='fs-3 text-blue-800' />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-4'>
          {/* Recent Activity */}
          <div className='rounded-3 shadow bg-white border-1 sticky top-5'>
            <div className='d-flex align-items-center justify-content-between p-2 border-bottom-1'>
              <span className='fw-bold'>Recent Activity</span>
              <a href='/dashboard/activity' className='text-decoration-none text-[#186362]'>View All</a>
            </div>
            <div className='p-2'>
              <Feed feed_icon='/images/money-bag.jpg' feed_title='You have received a payment' feed_description='Translate Legal Document...' feed_extra_text='1 day ago' feed_link="/dashboard/prozpay/1" />
              <Feed feed_icon='/images/translate.png' feed_title='You have completed a job' feed_description='Translate Legal Document...' feed_extra_text='2 days ago' feed_link="/dashboard/job/1" />
              <Feed feed_icon='/images/translate.png' feed_title='You have a new job' feed_description='Translate Legal Document...' feed_extra_text='2 days ago' feed_link="/dashboard/job/1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
