import React from "react"
import Heart from "../../public/images/notifyheart.png"

export default function StartChatting() {
  return (
    <div className="h-[100%] flex flex-col items-center justify-center">
      <figure className="w-[380px] relative">
        <img src={Heart} />

        <h1 className="font-bold text-3xl left-[30px] top-[50%] absolute">
          Nhắn gửi <br></br> yêu thương
        </h1>
      </figure>
    </div>
  )
}
