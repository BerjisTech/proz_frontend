import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { BiBook, BiChat, BiFile, BiGroup, BiHelpCircle, BiMicrophone, BiMoney, BiNote, BiPaperclip, BiSend, BiTask, BiTimer } from 'react-icons/bi'
import { GoSmiley } from 'react-icons/go'
import { Link } from 'react-router-dom'

const JobFiles = () => {
  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Size', selector: row => row.size, sortable: true },
    { name: 'Type', selector: row => row.type, sortable: true },
    { name: 'Date', selector: row => row.date, sortable: true },
    { name: 'Action', selector: row => row.download_link, sortable: true }
  ]
  const files = [
    { id: 1, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 2, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 3, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 4, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 5, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 6, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 7, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 8, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 9, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 10, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 11, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 12, name: "Court Case 0097234/123", size: "2kb", type: "pdf", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },

  ]
  return (
    <DataTable
      title="Files"
      columns={columns}
      data={files}
      pagination
      highlightOnHover
      pointerOnHover
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15, 20]}
      paginationComponentOptions={{
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        noRowsPerPage: false,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
      }}
    />
  )
}
const JobNotes = () => { return (<>Notes</>) }
const JobTasks = () => { return (<>Tasks</>) }
const JobTime = () => { return (<>Time</>) }
const JobDetails = () => { return (<>Details</>) }
const ChatBubble = ({ message, isMe, file_type }) => {
  return (
    <div className={`d-flex flex-col ${isMe ? 'align-items-end' : 'align-items-start'} w-full`}>
      {file_type ? <div className="w-[250px] h-[100px] bg-[url(https://blogs.sap.com/wp-content/uploads/2022/02/Picture1-6.png)] my-1 rounded cursor-pointer"></div> : null}
      <div className={`relative max-w-xl px-4 py-2 text-gray-700 ${isMe ? 'bg-gray-100' : 'bg-green-100'} rounded shadow`}>
        <span className="block">{message}</span>
      </div>
    </div>
  )
}

const JobMessages = () => {
  return (
    <div className='d-flex flex-col h-full'>
      <div className="flex-fill overflow-y-auto"
        style={{
          backgroundImage: 'url(https://external-preview.redd.it/GJGsrbWf1VjnkfRcy7-YDHakVzw8ehHZrZXjxiDpSag.jpg?auto=webp&s=116ad48f229926e0d7d42bca7f0ccd3dfc48ad31)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}>
        <div className="space-y-2 d-flex flex-col w-full p-6 overflow-y-auto align-items-end justify-content-end h-full">
          <ChatBubble message="Hello" isMe={true} />
          <ChatBubble message="Hi" isMe={false} />
          <ChatBubble message="Were you able to find the file I requested" isMe={true} />
          <ChatBubble message="It'd be nice if I started the work today" isMe={true} />
          <ChatBubble message="Oh, yes" isMe={false} />
          <ChatBubble message="Here" isMe={false} file_type="pdf" />
          <ChatBubble message="Thanks for the reminder" isMe={false} />
          <ChatBubble message="Don't sweat it" isMe={true} />
        </div>
      </div>
      <div className="min-h-[70px] px-2 d-flex gap-3 align-items-center justify-content-between">
        <button>
          <GoSmiley className="text-[20px]" />
        </button>
        <button>
          <BiPaperclip className="text-[20px]" />
        </button>

        <input type="text" placeholder="Message"
          className="block flex-fill py-2 pl-4 bg-gray-100 rounded-full outline-none focus:text-gray-700"
          name="message" required />
        <button>
          <BiMicrophone className="text-[20px]" />
        </button>
        <button type="submit">
          <BiSend className="text-[20px]" />
        </button>
      </div>
    </div>
  )
}
const JobPayments = () => { return (<>Payments</>) }
const JobSupport = () => { return (<>Support</>) }
const JobMembers = () => {
  const members = [
    { id: 1, role: 'Translator', name: 'Stanley E', email: 'john@doe.com', phone: '+1 234 567 890', status: 'active', profile_image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 2, role: 'Client', name: 'Ford H', email: 'john@doe.com', phone: '+1 234 567 890', status: 'active', profile_image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 3, role: 'Collaborator, Intepreter', name: 'Ben O', email: 'john@doe.com', phone: '+1 234 567 890', status: 'active', profile_image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 4, role: 'Collaborator, Translator', name: 'Lilly P', email: 'john@doe.com', phone: '+1 234 567 890', status: 'active', profile_image: 'https://www.w3schools.com/howto/img_avatar.png' },
    { id: 5, role: 'Proz Support', name: 'Yana D', email: 'john@doe.com', phone: '+1 234 567 890', status: 'active', profile_image: 'https://www.w3schools.com/howto/img_avatar.png' },
  ]

  const columns = [
    { name: '', selector: row => <Image src={row.profile_image} roundedCircle className='w-[40px] h-[40px]' /> },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Phone', selector: row => row.phone, sortable: true },
    { name: 'Role', selector: row => row.role, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true }
  ]
  return (
    <DataTable
      title="Job Members"
      columns={columns}
      data={members}
      pagination
      highlightOnHover
      pointerOnHover
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15, 20]}
      paginationComponentOptions={{
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        noRowsPerPage: false,
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
      }}
    />
  )
}
const JobFeatureLinks = ({ feature, setJobFeatures, featureIcon }) => {
  const handleClick = () => {
    setJobFeatures(feature)
  }
  return (
    <div className="d-flex align-items-center justify-content-start gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100"
      onClick={handleClick}>
      {featureIcon ? featureIcon : <BiPaperclip className="text-[20px]" />}
      <span>{feature}</span>
    </div>
  )
}
const InternalTermSearch = ({ searchResults, searchResultsLoading }) => {

  return (
    <div className="w-full d-flex">
      {searchResultsLoading && <div className="w-full">
        <div className="d-flex align-items-center justify-content-center h-full">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>}
      {searchResults.length > 0 && <div className="">
        <div className="d-flex flex-col gap-2">
          {searchResults.map((result, index) => {
            return (
              <div className="d-flex align-items-center justify-content-start gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100">
                <BiPaperclip className="text-[20px]" />
                <span>{result.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      }
    </div>
  )
}

const Job = () => {
  const [activeJobFeature, setActiveJobFeature] = useState('messages')
  const [termSearchPanel, setTermSearchPanel] = useState(false)
  const termSearchRef = useRef(null)
  const [searchResults, setSearchResults] = useState([])
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)

  const setJobFeatures = (feature) => {
    switch (feature) {
      case 'files':
        setActiveJobFeature(<JobFiles />)
        break
      case 'notes':
        setActiveJobFeature(<JobNotes />)
        break
      case 'tasks':
        setActiveJobFeature(<JobTasks />)
        break
      case 'time':
        setActiveJobFeature(<JobTime />)
        break
      case 'details':
        setActiveJobFeature(<JobDetails />)
        break
      case 'messages':
        setActiveJobFeature(<JobMessages />)
        break
      case 'payments':
        setActiveJobFeature(<JobPayments />)
        break
      case 'support':
        setActiveJobFeature(<JobSupport />)
        break
      case 'members':
        setActiveJobFeature(<JobMembers />)
        break
      default:
        setActiveJobFeature(<JobDetails />)
        break
    }
  }

  const handleSearch = (term_search) => {
    setSearchResultsLoading(true)
    axios.get(`/api/search/${term_search}`)
      .then(res => {
        setSearchResults(res.data)
        setSearchResultsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setSearchResultsLoading(true)
      })
    setTermSearchPanel(InternalTermSearch({ searchResults, searchResultsLoading }))
  }

  useEffect(() => {
    setJobFeatures('messages')
  }, [])

  return (
    <div className='row m-0 p-0 h-full'>
      <div className='col-sm-2 h-full m-0 p-0'>
        <div className='d-flex flex-col gap-2 h-full overflow-y-auto'>
          <JobFeatureLinks feature='details' setJobFeatures={setJobFeatures} featureIcon={<BiFile className='text-[20px]' />} />
          <JobFeatureLinks feature='messages' setJobFeatures={setJobFeatures} featureIcon={<BiChat className='text-[20px]' />} />
          <JobFeatureLinks feature='files' setJobFeatures={setJobFeatures} featureIcon={<BiBook className='text-[20px]' />} />
          <JobFeatureLinks feature='notes' setJobFeatures={setJobFeatures} featureIcon={<BiNote className='text-[20px]' />} />
          <JobFeatureLinks feature='tasks' setJobFeatures={setJobFeatures} featureIcon={<BiTask className='text-[20px]' />} />
          <JobFeatureLinks feature='time' setJobFeatures={setJobFeatures} featureIcon={<BiTimer className='text-[20px]' />} />
          <JobFeatureLinks feature='payments' setJobFeatures={setJobFeatures} featureIcon={<BiMoney className='text-[20px]' />} />
          <JobFeatureLinks feature='support' setJobFeatures={setJobFeatures} featureIcon={<BiHelpCircle className='text-[20px]' />} />
          <JobFeatureLinks feature='members' setJobFeatures={setJobFeatures} featureIcon={<BiGroup className='text-[20px]' />} />

        </div>
      </div>
      <div className='col-sm-8 h-full m-0 p-0 border-start-1 border-end-1'>
        {activeJobFeature}
      </div>
      <div className='col-sm-2 h-full m-0 p-0'>
        <div className='d-flex flex-col gap-2 h-full'>
          <input type="text" placeholder="Enter Term To Search"
            className="block w-full py-2 pl-4 bg-gray-100 outline-none focus:text-gray-700"
            name="term_search" required onChange={(e) => { handleSearch(e.target.value) }} ref={termSearchRef} />
          <div className='flex-fill w-full overflow-y-auto'>
            {termSearchPanel}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job
