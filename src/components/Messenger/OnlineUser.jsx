import React from "react"

export default function OnlineUser() {
  return (
    <div className="flex items-center gap-2 mb-5">
      <figure className="w-[40px] h-[40px] relative">
        <div className="absolute top-0 right-0 w-[12px] rounded-full h-[12px] bg-blue-500 "></div>
        <img
          className="rounded-full"
          src="https://cdn.dribbble.com/users/3076374/screenshots/11136576/dribbble_4x.png"
        />
      </figure>
      <h1 className="text-xl">name</h1>
    </div>
  )
}
