import React from "react"

export default function Message({ own, text }) {
  return (
    <div className={`mt-[20px] flex flex-col`}>
      <div className={`flex ${own ? "flex-row-reverse" : ""} gap-5`}>
        <figure className="w-10 h-10 shrink-0 ">
          <img
            className="rounded-full"
            src="https://cdn.dribbble.com/users/1068771/screenshots/6902238/dribbble_final_s_4x.jpg?compress=1&resize=400x300"
          />
        </figure>
        <p
          className={`flex max-w-[450px] ${
            own ? "bg-white bg-opacity-20" : "bg-black bg-opacity-30"
          }  p-3 rounded-md `}
        >
          {text}
        </p>
      </div>
      <p className={`mt-1 opacity-40 ${own ? "text-right" : ""} text-[14px]`}>
        2 hours ago
      </p>
    </div>
  )
}
