import React from 'react'
import 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { BiDotsVertical } from 'react-icons/bi'
const JobSearchResults = () => {
    return (
        <div className="mt-10">
            <div className="flex items-center justify-between">
                <h1 className="font-bold text-3xl my-4">2 jobs found | sorted by recent</h1>
                <BiDotsVertical className="text-xl" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <span className="text-sm flex items-center rounded py-1 pr-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        Translator
                    </span>
                    <span className="text-sm flex items-center rounded py-1 pr-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        ₹50Cr - ₹150Cr
                    </span>
                    <span className="text-sm flex items-center rounded py-1 pr-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        Mumbai, Bengaluru,Pune
                    </span>
                </div>
                <span className="text-blue-800 cursor-pointer">See all</span>
            </div>
            <div className="shadow-lg shadow-indigo-500/40 p-3 rounded-3 pb-10">
                <span className="font-bold text-2xl"> Applications</span>
                <div className="flex items-center justify-start hover:shadow-xl p-3 rounded-5">
                    <img src="https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" className="w-14 h-14 rounded-full mt-4 border-2" alt="avatar" />
                    <div className='flex flex-col flex-1 ml-3'>
                        <span className="font-bold">Eng-Chinese (Mandarin/Cantonese/Taiwanese)</span>
                        <span className="text-sm text-gray-600">Translation</span>
                        <span>Germany Translator</span>
                    </div>
                    <div className='flex flex-col ml-3'>
                        <span className="text-blue-600 text-sm font-medium">Learn more »</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSearchResults
