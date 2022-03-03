import React from "react"
import { LightningBoltIcon } from "@heroicons/react/solid"

export default function InputText() {
  return (
    <>
      <input
        name="text"
        placeholder="chat here"
        className="w-full bg-black backdrop-blur-sm border ml-2 border-gray-700 bg-opacity-70 rounded-full py-[6px] px-4 outline-none "
      />
      <LightningBoltIcon className="w-5 absolute right-3 top-[50%] translate-y-[-50%]" />
    </>
  )
}
