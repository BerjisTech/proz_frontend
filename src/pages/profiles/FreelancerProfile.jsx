import { Rating } from '@mui/material'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import React from 'react'
import { BsTranslate } from 'react-icons/bs'
import { FiGlobe, FiInstagram, FiMail, FiMapPin, FiTwitter } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Rates from '../../components/profile/Rates'
import { ShortJobDescription } from '../../components/jobs/JobDescription';

const FreelancerProfile = () => {
    // const [freelancer, setFreelancer] = React.useState({})
    // const [loading, setLoading] = React.useState(true)
    // const [error, setError] = React.useState(false)
    // const [error_message, setError_message] = React.useState('')

    const url_params = useParams()
    const freelancer_id = url_params.freelancer_id

    // React.useEffect(() => {
    //     const get_freelancer = async () => {
    //         try {
    //             const response = await fetch(`${process.env.REACT_APP_PROZ_API_V2_URL}freelancer/${freelancer_id}`)
    //             console.log(response)
    //             const data = await response.json()
    //             setFreelancer(data)
    //             setLoading(false)
    //         } catch (error) {
    //             setError(true)
    //             setError_message(error.message)
    //             setLoading(false)
    //         }
    //     }
    //     get_freelancer()
    // }, [freelancer_id])

    // if (loading) {
    //     return <div>Loading...</div>
    // }

    // if (error) {
    //     return <div>{error_message}</div>
    // }

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='m-0 p-0'>
            <div className='bg-[url(https://d1m1s6un1a8qgj.cloudfront.net/static/head-banner.svg)] h-[200px] w-full shadow'></div>
            <div className=''>
                <div className='d-flex align-items-center justify-content-start px-4 gap-4 flex-wrap'>
                    <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='open-book' className='border-2 border-[#ffffff] mt-[-50px] border-1 w-[150px] h-[150px] rounded-full img-fluid' />
                    <div className='d-flex align-items-start justify-content-between flex-fill flex-wrap wrap'>
                        <div className='d-flex align-items-start justify-content-start flex-col'>
                            <span className='fw-bold text-[30px]'>John Doe</span>
                            <span className='d-flex align-items-center justify-content-start'>Translator, Interpreter, Transcriber, Voiceover Artist ...</span>
                            <span className='text-muted d-flex align-items-center justify-content-start gap-2'><FiMapPin className='text-[#186362]' /> Somewhere, North Korea</span>
                            <span className='d-flex align-items-center justify-content-start gap-2'><BsTranslate className='text-[#186362]' /> Korean, Japanese, Chinese ...</span>
                        </div>
                        <div className='d-flex align-items-end justify-content-between flex-col gap-2'>
                            <div className='d-flex align-items-end justify-content-center flex-col'>
                                <Rating value={4.5} precision={0.5} />
                                <span className="text-muted text-xs">200 reviews</span>
                            </div>
                            <div className='d-flex align-items-end justify-content-center gap-1'>
                                <FiGlobe className='text-green-800 text-[18px] cursor-pointer' />
                                <FiInstagram className='text-blue-800 text-[18px] cursor-pointer' />
                                <FiTwitter className='text-blue-400 text-[18px] cursor-pointer' />
                                <FiMail className='text-red-800 text-[18px] cursor-pointer' />
                            </div>
                            <div className='d-flex align-items-end justify-content-center gap-1'>
                                <a href={`/hire/${freelancer_id}`} className='btn bg-[#186362] btn-sm text-[#ffffff]'>Contact Me</a>
                                <a href={`/hire/${freelancer_id}`} className='btn bg-[#ffffff] btn-sm text-[#186362] border-1 border-[#186362]'>Get A Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-start justify-content-start flex-wrap gap-4 px-4'>
                <div className='d-flex align-items-center justify-content-start flex-wrap w-full mt-3 gap-2'>
                    <span className='fw-bold fs-4'>My Services & Rates</span>
                    <div className='d-flex align-items-center justify-content-start gap-3 flex-wrap'>
                        <Rates languages="Cantonese, Korean" service="Translate" price="20 per hour" />
                        <Rates languages="Korean traditional, Korean (South)" service="Voice Over" price="20 per hour" />
                        <Rates languages="Mandarin, Cantonese, Korean" service="Transcription" price="20 per hour" />
                        <Rates languages="Mandarin, Cantonese, Korean" service="Intepretation/Translation" price="20 per hour" />
                    </div>
                </div>
                <div className='d-flex align-items-start justify-content-start flex-col'>
                    <span className='fw-bold fs-4'>About Me</span>
                    <p>
                        I am a Chinese native speaker. I received my BA degree in English Language and Literature in China and studied MA program in Comparative Literature in USA. I also have MS degree in Computer Information Systems. With my skills and background in both language art and IT fields, I am capable of translating documents across different areas.

                        Over the years, I have written and translated numerous documents between English and Chinese. I have taught undergraduate Chinese classes in US. I have also helped people with limited English skills appear in immigration court.

                        I deliver quality works, respect and commit to deadline. I aim to satisfy your organizational needs. Please feel free to contact me.
                    </p>
                </div>
                <div className='d-flex align-items-start justify-content-start flex-col w-full'>
                    <span className='fw-bold fs-4'>Work History</span>
                    <TabContext value={value} className='w-full bg-red-100'>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Previous Jobs" value="1" />
                                <Tab label="Ongoing Jobs" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='w-full'>
                            <div className='d-flex align-items-start justify-content-start flex-col gap-3 w-full'>
                                <ShortJobDescription is_done={true} rating={5} review="Perfect job as usual" />
                                <ShortJobDescription is_done={true} rating={4} />
                                <ShortJobDescription is_done={true} rating={4.5} />
                                <ShortJobDescription is_done={true} rating={3.5} review="Nicely done!" />
                                <ShortJobDescription is_done={true} rating={4} review="Nicely done!" />
                                <ShortJobDescription is_done={true} rating={5} />
                                <ShortJobDescription is_done={true} rating={5} review="Nicely done!" />
                                <ShortJobDescription is_done={true} rating={3.5} review="Nicely done!" />
                                <ShortJobDescription is_done={true} rating={4.5} />
                                <ShortJobDescription is_done={true} rating={4} review="Nicely done!" />
                            </div>
                        </TabPanel>
                        <TabPanel value="2" className='w-full'>
                            <div className='d-flex align-items-start justify-content-start flex-col gap-3 w-full'>
                                <ShortJobDescription is_done={false} />
                                <ShortJobDescription is_done={false} />
                                <ShortJobDescription is_done={false} />
                                <ShortJobDescription is_done={false} />
                            </div>
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    )
}

export default FreelancerProfile
