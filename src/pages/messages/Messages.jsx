import React from 'react'
import { BiMicrophone, BiPaperclip, BiSend } from 'react-icons/bi'
import { GoSmiley } from 'react-icons/go'
import MyChats from '../../components/chats/MyChats'

const Messages = () => {
  return (
    <div className='row h-full m-0 p-0'>
      <div className="m-0 p-0">
        <div className="min-w-full d-flex border-b">
          <div className="border-r border-gray-300 lg:col-span-1">
            <div className="mx-3 my-3">
              <div className="relative text-gray-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                  placeholder="Search" required />
              </div>
            </div>

            <ul className="overflow-auto h-[full]">
              <MyChats />
            </ul>
          </div>
          <div className="hidden flex-fill lg:col-span-2 lg:block">
            <div className="w-full">
              <div className="relative flex items-center p-3 border-b border-gray-300">
                <img className="object-cover w-10 h-10 rounded-full"
                  src="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg" alt="username" />
                <span className="block ml-2 font-bold text-gray-600">Emma</span>
                <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                </span>
              </div>
              <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
                <ul className="space-y-2">
                  <li className="flex justify-start">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span className="block">Hi</span>
                    </div>
                  </li>
                  <li className="flex justify-end">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span className="block">Hiiii</span>
                    </div>
                  </li>
                  <li className="flex justify-end">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                      <span className="block">how are you?</span>
                    </div>
                  </li>
                  <li className="flex justify-start">
                    <div className="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                      <span className="block">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <button>
                  <GoSmiley className="text-[20px] mx-1" />
                </button>
                <button>
                  <BiPaperclip className="text-[20px] mx-1" />
                </button>

                <input type="text" placeholder="Message"
                  className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message" required />
                <button>
                  <BiMicrophone className="text-[20px] mx-1" />
                </button>
                <button type="submit">
                  <BiSend className="text-[20px] mx-1" />
                </button>
              </div>
            </div>
          </div>
          <div className="border-l border-gray-300 lg:col-span-1">
            <div className="mx-3 my-3">
              <div className="relative text-gray-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </span>
                <input type="search" className="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
                  placeholder="Search" required />
              </div>
            </div>

            <ul className="overflow-auto h-[full]">

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
