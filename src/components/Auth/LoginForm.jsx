import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export default function LoginForm({ onChange }) {
  const history = useHistory()

  return (
    <>
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="inputForm"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        required
        className="inputForm"
      />

      <p className="text-[14px] sm:text-[15px] mb-4 mt-2">
        Don't have an account?
        <span
          className="cursor-pointer ml-2 font-[600] rounded-full hover:text-blue-400 text-blue-700 transition-all"
          onClick={() => {
            history.push("/register")
          }}
        >
          register here
        </span>
      </p>
    </>
  )
}
