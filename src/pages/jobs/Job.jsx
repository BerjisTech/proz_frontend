import axios from 'axios'
import React, { useRef, useState } from 'react'
import { BiBook, BiChat, BiFile, BiGroup, BiHelpCircle, BiMicrophone, BiMoney, BiNote, BiPaperclip, BiSend, BiTask, BiTimer } from 'react-icons/bi'
import { GoSmiley } from 'react-icons/go'

const JobFiles = () => { return (<>Files</>) }
const JobNotes = () => { return (<>Notes</>) }
const JobTasks = () => { return (<>Tasks</>) }
const JobTime = () => { return (<>Time</>) }
const JobDetails = () => { return (<>Details</>) }
const JobMessages = () => {
  return (
    <div className='d-flex flex-col h-full'>
      <div className="flex-fill overflow-y-auto">
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
const JobMembers = () => { return (<>Members</>) }
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
const InternalTermSearch = ({ search_param }) => {
  const termSearch = useState('')
  
  const [searchResults, setSearchResults] = useState([])
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)
  const searchRef = useRef(null)

  useRef(() => {
    searchRef.current.focus()
    setSearchResultsLoading(true)
    axios.get(`/api/search/${search_param}/${termSearch}`)
      .then(res => {
        setSearchResults(res.data)
        setSearchResultsLoading(false)
      })
      .catch(err => {
        console.log(err)
        setSearchResultsLoading(false)
      })
  }, [])

  return (
    <div className="relative text-gray-600">
      {searchResultsLoading && <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-10">
        <div className="d-flex align-items-center justify-content-center h-full">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>}
      {searchResults.length > 0 && <div className="absolute top-0 left-0 w-full bg-white z-10">
        <div className="d-flex flex-col gap-2">
          {searchResults.map((result, index) => {
            return (
              <div className="d-flex align-items-center justify-content-start gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  searchRef.current.value = result.name
                  setSearchResults([])
                }}>
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
  const [termSearch, setTermSearch] = useState('')

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

  const handleSearch = () => {
    setTermSearch(InternalTermSearch({ search_param: termSearch, termSearch }))
  }

  useRef(() => {
    setJobFeatures('files')
    handleSearch()
  }, [])

  return (
    <div className='row m-0 p-0 h-full'>
      <div className='col-sm-2 h-full m-0 p-0'>
        <div className='d-flex flex-col gap-2 h-full overflow-y-auto'>
          <JobFeatureLinks feature='files' setJobFeatures={setJobFeatures} featureIcon={<BiBook className='text-[20px]' />} />
          <JobFeatureLinks feature='notes' setJobFeatures={setJobFeatures} featureIcon={<BiNote className='text-[20px]' />} />
          <JobFeatureLinks feature='tasks' setJobFeatures={setJobFeatures} featureIcon={<BiTask className='text-[20px]' />} />
          <JobFeatureLinks feature='time' setJobFeatures={setJobFeatures} featureIcon={<BiTimer className='text-[20px]' />} />
          <JobFeatureLinks feature='details' setJobFeatures={setJobFeatures} featureIcon={<BiFile className='text-[20px]' />} />
          <JobFeatureLinks feature='messages' setJobFeatures={setJobFeatures} featureIcon={<BiChat className='text-[20px]' />} />
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
            name="term_search" required onChange={(e) => { handleSearch(e.target.value) }} />
          <div className='flex-fill w-full overflow-y-auto'>
            {termSearch}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Job
