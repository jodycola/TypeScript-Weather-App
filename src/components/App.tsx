import React, { ReactNode } from 'react'
import { Search } from './Search'
import { Footer } from './Footer'

const App: React.FC = () => {

  // App Props
  function Header({ children }: { children: ReactNode }) {
    return <h1> {children} </h1>
  }

  return (
    <div className="app">
      <Header> <strong className="heading">TypeScript Weather App</strong> </Header>
      <Search/>
      <Footer/>
    </div>
  )
}

export default App

