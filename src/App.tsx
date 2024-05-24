import Home from 'pages/Home/Home'
import Layout from 'pages/Layout/Layout'
import Weather from 'pages/Weather/Weather'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} /> 
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>   
    </BrowserRouter>
  )
}

export default App

