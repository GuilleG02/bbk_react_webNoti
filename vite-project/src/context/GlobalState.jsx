import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
    news: [],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    const getNews = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`

      )
      dispatch({
        type: 'GET_NEWS',
        payload: res.data.results,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GlobalContext.Provider
        value={{
            news: state.news,
            getNews,
        }}
    >
        {children}
    </GlobalContext.Provider>
)


}






