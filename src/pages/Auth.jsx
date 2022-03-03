import React, { useContext } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { Toast } from "../components/toast"
import { AuthContext } from "../context/AuthContext"
import TextChat from "../public/images/textchat.png"

export default function Auth({ path, component: Form }) {
  const { login, user, register } = useContext(AuthContext)

  const submit = async (e) => {
    e.preventDefault()

    let formValue =
      path === "/login"
        ? {
            email: e.target[0].value,
            password: e.target[1].value,
          }
        : {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            confirmPassword: e.target[3].value,
          }

    if (path === "/login") {
      await login(formValue)
    }
    if (path === "/register") {
      const { password, confirmPassword, username, email } = formValue

      if (password !== confirmPassword) return Toast.error("password not match")

      await register({ username, email, password })
    }
  }
  console.log(121212)
  if (localStorage[user]) return <Redirect to="/" />

  return (
    <div className="flex items-center justify-center w-full h-screen  text-white">
      <div className="flex flex-col md:flex-row gap-2 re">
        <div className="shrink-0">
          <figure className="bg-purple-500 bg-opacity-20 rounded-[30px] h-[350px]">
            <img src={TextChat} />
          </figure>
        </div>
        <div className="w-[350px] md:w-[350px] lg:w-[450px] xl:w-[550px] bg-white border border-[#ffffff12] shadow-lg bg-opacity-10 outline-white backdrop-blur-md rounded-[30px] mt-[-150px] md:ml-[-200px] md:mt-0 ">
          <div className="p-[20px] h-[100%] ">
            <h1 className="font-bold mb-3 text-center text-xl">
              Gòy Login lẹ i
            </h1>
            <form onSubmit={submit} className="flex flex-col h-[100%]">
              <Form />

              <button
                onSubmit={submit}
                className="w-full bg-blue-500 font-bold sm:mt-[auto] p-2 rounded-full md:mb-[40px]"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
