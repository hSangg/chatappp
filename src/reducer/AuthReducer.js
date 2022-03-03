import { TYPE_REDUCER } from "../util/common"
const AuthReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case TYPE_REDUCER.LOGIN_START: {
      return {
        user: null,
        isFetching: true,
        error: false,
      }
    }

    case TYPE_REDUCER.LOGIN_SUCCESS: {
      return {
        user: payload,
        isFetching: false,
        error: false,
      }
    }

    case TYPE_REDUCER.LOGIN_FAILURE: {
      return {
        user: null,
        isFetching: false,
        error: true,
      }
    }

    case TYPE_REDUCER.FOLLOW: {
      return {
        ...state,
        user: { ...state.user },
        following: [...state.user.following, payload],
      }
    }

    case TYPE_REDUCER.UNFOLLOW: {
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (following) => following !== payload
          ),
        },
      }
    }

    default:
      break
  }
}

export default AuthReducer
