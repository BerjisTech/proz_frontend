import React from 'react'

const MyChats = () => {
    const [chats, setChats] = React.useState([])

    React.useEffect(() => {
        fetchChats()
    }, [])

    const fetchChats = async () => {
        return fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }).then(
            (response) => response.json()
        ).then((data) => {
            setChats(data)
        })
    }

    console.log(chats)

    return (
        <div className="">
            <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold fs-3">Chats</span>
                <span className="text-blue-800 cursor-pointer">See all</span>
            </div>
            {chats.length === 0 ? (
                <div className="text-sm pt-3">No chats found</div>
            ) : (chats && chats.length > 0 && chats.map((chat, index) => {
                return (
                    <a href={`chat/${index}`} className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
                        <img className="object-cover w-10 h-10 rounded-full"
                            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg" alt="username" />
                        <div className="w-full pb-2">
                            <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">{chat.name}</span>
                                <span className="block ml-2 text-sm text-gray-600">25 minutes</span>
                            </div>
                            <span className="block ml-2 text-sm text-gray-600">{chat.text}</span>
                        </div>
                    </a>
                )
            }))}
        </div>
    )
}

export default MyChats
