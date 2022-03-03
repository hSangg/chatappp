import React from "react"
import { useHistory } from "react-router-dom"

export default function RegisterForm() {
  const history = useHistory()
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="username"
        required
        className="inputForm"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
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
      <input
        type="password"
        name="passwordConfirm"
        placeholder="passwordConfirm"
        required
        className="inputForm"
      />

      <p className="text-[14px] sm:text-[15px] mb-4 mt-2">
        Already have an account?
        <span
          className="cursor-pointer ml-2 font-[600] rounded-full hover:text-blue-400 text-blue-700 transition-all"
          onClick={() => {
            history.push("/login")
          }}
        >
          login here
        </span>
      </p>
    </>
  )
}
