import React from "react"
import ChatLogo from "../../public/images/chatlogo.png"

export default function LogoMessenger() {
  return (
    <div className="mt-5 ml-5">
      <div className="flex items-center gap-2">
        <figure className="w-[50px]">
          <img src={ChatLogo} />
        </figure>
        <h1 className="text-xl font-[600] hidden sm:block">Message</h1>
      </div>
    </div>
  )
}
