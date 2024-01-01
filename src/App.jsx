import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import NotFound from './components/NotFound'
import Blog from './pages/blog/Blog'
import './styles/index.scss'
import { AppProvider } from './utils/AppContext'

function App() {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AppProvider>
  )
}

export default App
