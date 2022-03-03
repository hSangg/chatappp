export const TYPE_REDUCER = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",
  FOLLOW: "FOLLOW",
  UNFOLLOW: "UNFOLLOW",
}

export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "https://git.heroku.com/salty-reef-59464.git/api"
    : "http://localhost:5000/api"
