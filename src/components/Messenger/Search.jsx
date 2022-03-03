import React from "react"
import SearchLogo from "../../public/images/search.png"

export default function Search() {
  return (
    <div className="sm:mt-5 relative">
      <input
        type="text"
        placeholder="Search here"
        className="border-none rounded-full py-[6px] text-center px-[10px] bg-black bg-opacity-10 outline-none w-full bg-white  backdrop-blur-md mt-[9px]"
      />
      <figure className="w-[23px] absolute top-[15px] left-2">
        <img src={SearchLogo} />
      </figure>
    </div>
  )
}
