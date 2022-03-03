import axios from "axios"
import React, { useEffect, useState } from "react"

export default function ChattingUser({ person }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    ;(async () => {
      const {
        data: { infor },
      } = await axios.get(`http://localhost:5000/api/user?userId=${person}`)
      setUser(infor)
    })()
  }, [])

  return (
    <div className="flex cursor-pointer items-center gap-4 pb-2">
      <figure className="w-8 h-8">
        <img
          className="rounded-full"
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
        />
      </figure>
      <h1 className="text-[15px] font-[500]">{user?.username}</h1>
    </div>
  )
}
