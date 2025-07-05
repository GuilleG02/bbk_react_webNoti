import './App.css'

import Header from './views/Header'
import Footer from './views/Footer'
import Form from './views/Form'
import Home from './views/Home'
import List from './views/List'

import { GlobalProvider } from './context/GlobalState'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <GlobalProvider>

    <Header />

    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
    </Routes>

    <Footer />
     
    </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
