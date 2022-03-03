import axios from "axios"
import React, { useContext, useEffect, useRef, useState } from "react"
import OnlineUser from "../components/Messenger/OnlineUser"
import InputText from "../components/Messenger/InputText"
import Message from "../components/Messenger/Message"
import Search from "../components/Messenger/Search"
import { AuthContext } from "../context/AuthContext"
import LogoMessenger from "../components/Messenger/LogoMessenger"
import ChattingUser from "../components/Messenger/ChattingUser"
import StartChatting from "../components/Messenger/StartChatting"
import io from "socket.io-client"
import { apiUrl } from "../util/common"

//@my_id: 621ab59260b8e190f586b448

export default function Messenger() {
  const {
    user: { user },
  } = useContext(AuthContext)

  console.log(process.env)

  const [conversations, setConversations] = useState([])
  const [currentConver, setCurrentConver] = useState("")
  const [message, setMessage] = useState([])
  const [arrivalMessage, setArrivalMessage] = useState(null)
  const socket = useRef()
  const scrollRef = useRef(null)

  useEffect(() => {
    socket.current = io("https://safe-thicket-39861.herokuapp.com/")
  }, [])

  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data?.senderId,
        text: data?.text,
        createdAt: Date.now(),
      })
    })
  }, [])

  useEffect(() => {
    arrivalMessage &&
      currentConver?.members?.includes(arrivalMessage.sender) &&
      setMessage((pre) => [...pre, arrivalMessage])
  }, [arrivalMessage, currentConver])

  useEffect(() => {
    socket.current.emit("addUser", user._id)
    socket.current.on("getUsers", (userList) => {})
  }, [user])

  useEffect(() => {
    ;(async () => {
      const {
        data: { conversation },
      } = await axios.get(`${apiUrl}/conversation/${user._id}`)
      setConversations(conversation)
    })()
  }, [user._id])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          `${apiUrl}/message/${currentConver._id}`
        )

        setMessage(data.message)
      } catch (error) {}
    })()
  }, [currentConver._id])

  const chatting = async (e) => {
    e.preventDefault()

    const formValue = {
      sender: user._id,
      text: e.target[0].value,
      conversationId: currentConver._id,
    }

    const receiverId = currentConver?.members?.find((x) => x !== user._id)

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: e.target[0].value,
    })

    try {
      const { data } = await axios.post(`${apiUrl}/message`, formValue)

      setMessage((pre) => [...pre, data.message])
    } catch (error) {}

    e.target[0].value = ""
  }

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [message])

  return (
    <div className="text-white background ">
      <div className="flex gap-2 h-screen bg-black bg-opacity-50 sm:scale-90 sm:rounded-[50px] backdrop-blur-lg">
        {/* LEFT */}
        <div className="flex-[3.5] hidden sm:block">
          <LogoMessenger />
          <div className="mt-4">
            {conversations.map((x, i) => (
              <div onClick={() => setCurrentConver(x)} className="ml-7">
                <ChattingUser
                  key={i}
                  person={
                    x?.members[0] === user?._id ? x?.members[1] : x?.members[0]
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER */}
        <div className="flex-[5.5] flex flex-col p-2 relative">
          <Search />
          <div className="overflow-y-scroll scrollbar-hide mt-3 mb-[40px] flex-1 relative">
            {currentConver._id ? (
              <div ref={scrollRef}>
                {message.map((x, i) => (
                  <>
                    <Message
                      key={i}
                      text={x?.text}
                      own={x?.sender === user._id}
                    />
                  </>
                ))}
              </div>
            ) : (
              <StartChatting />
            )}
          </div>
          <div className="absolute bottom-2 left-0 right-2 flex">
            <form onSubmit={chatting} className="flex-1">
              <InputText />
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-[3.5] hidden sm:block">
          <div className="mt-5 ml-5 p-2">
            <h1 className="mt-3 font-bold text-xl">Online</h1>
            <div className="mt-5">
              <OnlineUser />
              <OnlineUser />
              <OnlineUser />
              <OnlineUser />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
