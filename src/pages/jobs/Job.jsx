import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { BiBook, BiChat, BiFile, BiGroup, BiHelpCircle, BiMicrophone, BiMoney, BiNote, BiPaperclip, BiSend, BiStar, BiTask, BiTimer } from 'react-icons/bi'
import { GoSmiley } from 'react-icons/go'
import { RiTranslate2 } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { randomColor } from '../../components/Helpers'

const File = () => {
  return (
    <div></div>
  )
}

const JobFiles = () => {
  const files = [
    { id: 1, name: "Court Case 0097234/234", size: "2kb", type: "pdf", shared_by: "John Doe", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 2, name: "Court Case 0097234/567", size: "2kb", type: "xlsx", shared_by: "Jane Doe", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 3, name: "Plaintif Confidential", size: "2kb", type: "docx", shared_by: "Mary Jane", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 4, name: "Court Case 0097234/123", size: "2kb", type: "ppt", shared_by: "Adrianna", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 5, name: "Court Case 0097234/123", size: "2kb", type: "txt", shared_by: "Big Man", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 6, name: "Court Case 0097234/123", size: "2kb", type: "docx", shared_by: "Hol'tigh Asknee", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 7, name: "Court Case 0097234/123", size: "2kb", type: "docx", shared_by: "Asknee", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 8, name: "Court Case 0097234/123", size: "2kb", type: "pdf", shared_by: "Blighmee", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 9, name: "Court Case 0097234/123", size: "2kb", type: "pdf", shared_by: "Greg", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 10, name: "Court Case 0097234/123", size: "2kb", type: "txt", shared_by: "Eugine", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 11, name: "Court Case 0097234/123", size: "2kb", type: "txt", shared_by: "Aurora", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },
    { id: 12, name: "Court Case 0097234/123", size: "2kb", type: "xlsx", shared_by: "Kristyen", date: "3 days ago", download_link: <Link to="/dashboard/dummy.pdf" download>Download</Link> },

  ]
  return (
    <div className='d-flex flex-col h-full w-full'>
      <div className='min-h-[70px] w-full'>

      </div>
      <div className='d-flex flex-grow overflow-y-auto'>
        <div className='row'>
          {
            files.map((file, index) => (
              <div className='col-sm-3 py-3'>
                <div className='d-flex flex-col shadow rounded gap-2 p-3'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <span><BiStar /></span>
                    <span><AiOutlineEllipsis className='rotate-90' /></span>
                  </div>
                  <div className='d-flex flex-col items-center gap-3 justify-center cursor-pointer'>
                    <Image src={`/images/icons/${file.type}.png`} className='w-[150px] shadow rounded p-3' />
                    <span className='fw-bold'>{file.name}</span>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between align-items-center'>
                    <span><b>File Size</b><br /> {file.size}</span>
                    <a href="/dashboard/client/12345" className="rounded w-[40px] h-[40px] text-white d-flex items-center justify-center shadow fw-bold bg-" style={{ backgroundColor: randomColor() }}>{file.shared_by.substring(0, 1)}</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
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
  const messagesEndRef = React.createRef()
  let scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  useEffect(() => {
    scrollToBottom()
  }, [])
  return (
    <div className='d-flex flex-col h-full'>
      <div className="flex-fill overflow-y-auto"
        style={{
          backgroundImage: 'url(https://external-preview.redd.it/GJGsrbWf1VjnkfRcy7-YDHakVzw8ehHZrZXjxiDpSag.jpg?auto=webp&s=116ad48f229926e0d7d42bca7f0ccd3dfc48ad31)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}>
        <div className="d-flex flex-col w-full gap-2 p-6 align-items-end justify-content-end">
          <ChatBubble message="Hello" isMe={true} />
          <ChatBubble message="Hi" isMe={false} />
          <ChatBubble message="Were you able to find the file I requested" isMe={true} />
          <ChatBubble message="It'd be nice if I started the work today" isMe={true} />
          <ChatBubble message="Oh, yes" isMe={false} />
          <ChatBubble message="Here" isMe={false} file_type="pdf" />
          <ChatBubble message="Thanks for the reminder" isMe={false} />
          <ChatBubble message="Don't sweat it" isMe={true} />
          <ChatBubble message="Hello" isMe={true} />
          <ChatBubble message="Hi" isMe={false} />
          <ChatBubble message="Were you able to find the file I requested" isMe={true} />
          <ChatBubble message="It'd be nice if I started the work today" isMe={true} />
          <ChatBubble message="Oh, yes" isMe={false} />
          <ChatBubble message="Here" isMe={false} file_type="pdf" />
          <ChatBubble message="Thanks for the reminder" isMe={false} />
          <ChatBubble message="Don't sweat it" isMe={true} />
          <ChatBubble message="Hello" isMe={true} />
          <ChatBubble message="Hi" isMe={false} />
          <ChatBubble message="Were you able to find the file I requested" isMe={true} />
          <ChatBubble message="It'd be nice if I started the work today" isMe={true} />
          <ChatBubble message="Oh, yes" isMe={false} />
          <ChatBubble message="Here" isMe={false} file_type="pdf" />
          <ChatBubble message="Thanks for the reminder" isMe={false} />
          <ChatBubble message="Don't sweat it" isMe={true} />
          <div ref={messagesEndRef} />
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
              <div className="d-flex align-items-center justify-content-start gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100" key={index}>
                {result.name}
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
      case 'file':
        setActiveJobFeature(<File />)
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
    const demo_search_results = [
      { id: 0, name: [<b><u>Previous searches</u></b>] },
      { id: 1, name: [<RiTranslate2 className="text-[20px]" />, " Plaintif: ", <em>Demandante</em>] },
      { id: 2, name: [<RiTranslate2 className="text-[20px]" />, " Defendant: ", <em>Demandado</em>] },
      { id: 3, name: [<RiTranslate2 className="text-[20px]" />, " Court: ", <em>Juzgado</em>] },
      { id: 4, name: [<RiTranslate2 className="text-[20px]" />, " Judicial District: ", <em>Juzgado</em>] }
    ]
    setJobFeatures('files')
    setTermSearchPanel(InternalTermSearch({ searchResults: demo_search_results, searchResultsLoading: false }))
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
