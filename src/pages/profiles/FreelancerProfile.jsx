// MUI
import {
    FormControl, InputLabel, Select, Rating,
    Box, Tab, Button, ButtonGroup,
    InputAdornment, OutlinedInput
} from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab'

// BOOTSTRAP
import Modal from 'react-bootstrap/Modal';

import React from 'react'
import { BsTranslate } from 'react-icons/bs'
import { FiGlobe, FiInstagram, FiMail, FiMapPin, FiTwitter } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import Rates from '../../components/profile/Rates'
import { ShortJobDescription } from '../../components/jobs/JobDescription';
import { useState } from 'react';
import { LimitedWordTextarea } from '../../components/general_ui_components/Reusables';
import { GiPaperClip } from 'react-icons/gi';

const FreelancerProfile = () => {
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const [category, setCategory] = useState('')
    const [sub_category, setSubCategory] = useState('')
    const categoryRef = React.useRef()
    const subCategoryRef = React.useRef()
    const quoteFormRef = React.useRef()

    const submitQuote = (e) => {
        e.preventDefault()
        console.log('submitting quote')
        console.log(FormData(quoteFormRef.current))
    }

    const handleCategoryChange = (event) => { setCategory(event.target.value) }
    const handleSubCategoryChange = (event) => { setSubCategory(event.target.value) }

    const handleCloseQuoteModal = () => setShowQuoteModal(false);
    const handleShowQuoteModal = () => setShowQuoteModal(true);

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

    const handleJobTabChange = (event, newValue) => {
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
                                <span onClick={handleShowQuoteModal} className='btn bg-[#ffffff] btn-sm text-[#186362] border-1 border-[#186362]'>Request Quote</span>
                                <Modal show={showQuoteModal} onHide={handleCloseQuoteModal}>
                                    <form ref={quoteFormRef} onSubmit={submitQuote}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Request Quote</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex align-items-start justify-content-start gap-2 border-bottom-1 py-3'>
                                                <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' alt='open-book' className='border-2 border-[#ffffff] border-1 w-[50px] h-[50px] rounded-full img-fluid' />
                                                <div className='d-flex align-items-start justify-content-between flex-col'>
                                                    <span className='fw-bold'>John  Doe</span>
                                                    <span>Hi, please provide your request details below and I'll get back to you.</span>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-start justify-content-start flex-col gap-2 my-3 py-3 border-bottom-1'>
                                                <LimitedWordTextarea limit={2500} />
                                                <label>
                                                    <span className='d-flex gap-2 align-items-center fw-bold cursor-pointer btn border-1 border-[#c0c0c0] text-gray-800 bg-gray-200'>Select File <GiPaperClip /> </span>
                                                    <input type={'file'} className='d-none' />
                                                </label>
                                            </div>
                                            <div className='d-flex align-items-start justify-content-start flex-col gap-2 my-3 py-3 border-bottom-1'>
                                                <span className='fw-bold'>Choose Category</span>
                                                <div className='d-flex align-items-start justify-content-start flex-wrap gap-2 w-full'>
                                                    <div className="flex-fill">
                                                        <FormControl fullWidth>
                                                            <InputLabel id="categorySelectLabel">Category</InputLabel>
                                                            <Select native
                                                                labelId="categorySelectLabel"
                                                                id="categorySelect"
                                                                value={category}
                                                                label="Category"
                                                                onChange={handleCategoryChange}
                                                                className="border-none outline-none"
                                                                required
                                                                ref={categoryRef}
                                                            >
                                                                <option aria-label="None" value=""></option>
                                                                <option aria-label="None" value="tranlsate">Translation</option>
                                                                <option value="transcribe">Transcription</option>
                                                                <option value="interpret">Interpretation</option>
                                                                <option value="voiceover">Voiceover</option>
                                                                <option value="proofread">Proofreading</option>
                                                                <option value="subtitling">Subtitling</option>
                                                                <option value="captioning">Captioning</option>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <FormControl fullWidth>
                                                            <InputLabel id="subCategorySelectLabel">Sub Category</InputLabel>
                                                            <Select native
                                                                labelId="subCategorySelectLabel"
                                                                id="subCategorySelect"
                                                                value={sub_category}
                                                                label="Sub Category"
                                                                onChange={handleSubCategoryChange}
                                                                className="border-none outline-none"
                                                                required
                                                                disabled={category ? false : true}
                                                                ref={subCategoryRef}
                                                            >
                                                                <option aria-label="None" value=""></option>
                                                                <option aria-label="None" value="medicine">Medicine</option>
                                                                <option value="law">Law</option>
                                                                <option value="finance">Finance</option>
                                                                <option value="engineering">Engineering</option>
                                                                <option value="business">Business</option>
                                                                <option value="marketing">Marketing</option>
                                                                <option value="education">Education</option>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-start justify-content-start flex-col gap-2 my-3 py-3 border-bottom-1'>
                                                <span className='fw-bold'>How soon do you need this service delivered?</span>
                                                <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                                    <Button>24 hours</Button>
                                                    <Button>7 days</Button>
                                                    <Button>14 days</Button>
                                                    <Button>1 month</Button>
                                                    <Button>Other</Button>
                                                </ButtonGroup>
                                            </div>
                                            <div className='d-flex align-items-start justify-content-start flex-col gap-2 my-3 py-3 border-bottom-1'>
                                                <span className='fw-bold'>What's your budget for the service?</span>
                                                <FormControl fullWidth>
                                                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                                    <OutlinedInput
                                                        id="outlined-adornment-amount"
                                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                                        label="Amount"
                                                        type='number'
                                                        inputProps={{ min: 0 }}
                                                        required
                                                    />
                                                </FormControl>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            {/* <Button variant="secondary" onClick={handleCloseQuoteModal}>
                                                Close
                                            </Button> */}
                                            <Button type="submit" className='btn bg-primary text-white'>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </form>
                                </Modal>
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
                            <TabList onChange={handleJobTabChange} aria-label="lab API tabs example">
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
