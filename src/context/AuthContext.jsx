import { createContext, useContext, useEffect, useReducer } from "react"
import AuthReducer from "../reducer/AuthReducer"
import { apiUrl, TYPE_REDUCER } from "../util/common"
import axios from "axios"
import { Toast } from "../components/toast"

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
}

export const AuthContext = createContext(INITIAL_STATE)
const AuthContextProvider = ({ children }) => {
  const [{ user, isFetching, error }, dispatch] = useReducer(AuthReducer, {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  })

  const login = async (formValue) => {
    dispatch({ type: TYPE_REDUCER.LOGIN_START })
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, formValue)

      if (response.data.success)
        dispatch({
          type: TYPE_REDUCER.LOGIN_SUCCESS,
          payload: response.data,
        })
    } catch (error) {
      Toast.error(error.response.data.message)
      dispatch({
        type: TYPE_REDUCER.LOGIN_FAILURE,
        payload: error,
      })
    }
  }

  const register = async (formValue) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, formValue)
      console.log("response", response)
      dispatch({
        type: TYPE_REDUCER.LOGIN_SUCCESS,
        payload: response.data,
      })
    } catch (error) {
      Toast.error(error.response.data.message)
      console.log({ error })
      dispatch({
        type: TYPE_REDUCER.LOGIN_FAILURE,
        payload: error,
      })
    }
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  const value = { user, isFetching, error, dispatch, login, register }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
