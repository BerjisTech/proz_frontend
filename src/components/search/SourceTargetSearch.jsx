import React from 'react'

const SourceTargetSearch = () => {
    return (
        <form className="rounded-4 shadow bg-white p-3 min-w-[50%]" action="/dashboard/search">
            <div className="d-flex align-items-center justify-content-center">
                <select className="form-select flex-fill form-select-sm border-none focuse:outline-none focus:border-none" aria-label=".form-select-sm example">
                    <option defaultValue>Source</option>
                    <option value="1">English</option>
                    <option value="2">Mandarin</option>
                    <option value="3">Korean</option>
                </select>
                <img src="/images/icons/swap.png" alt="swap" className="mx-2 w-[20px]" />
                <select className="form-select flex-fill form-select-sm border-none focuse:outline-none focus:border-none" aria-label=".form-select-sm example">
                    <option defaultValue>Target</option>
                    <option value="1">Siswati</option>
                    <option value="2">Kiswahili</option>
                    <option value="3">Luganda</option>
                </select>
                <button className="btn btn-outline-success bg-[#2E6969] border-[#2E6969]" type="submit">
                    <img src="/images/icons/search-white.png" alt="search" className="w-[50px]" />
                </button>
            </div>
        </form>
    )
}

export default SourceTargetSearch
