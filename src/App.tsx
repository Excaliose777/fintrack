import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Summary from './components/Summary/Summary'
import Transaction from './components/Transaction/Transaction'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      <Header onMenuToggle={toggleSidebar} menuOpen={sidebarOpen} />
      <div className="app__content">
        <Navbar isOpen={sidebarOpen} />
        <main className={`app__main ${!sidebarOpen ? 'expanded' : ''}`}>
          <div className="dashboard">
            <div className="dashboard__header">
              <div className="dashboard__title">
                <h1>Wallet Ledger</h1>
                <span className="dropdown-arrow">▼</span>
                <div className='dashboard__status'>
                  <span className="status-dot active"></span>
                  <span>Active</span>
                </div>
              </div>
              <div className="dashboard__share">
                <button className='dashboard__share-text'>Share</button>
                <button className='dashboard__share-option'>⋯</button>
              </div>
            </div>
            
            <div className="dashboard__users">
              <div className="user-avatars">
                <div className="avatar">          <img 
            src="images/avatar.png" 
            alt="Profile" 
          /></div>
                <div className="avatar"><img 
            src="images/avatar2.png" 
            alt="Profile" 
          /></div>
                <div className="avatar"><img 
            src="images/avatar3.png" 
            alt="Profile" 
          /></div>
                <div className="avatar"><img 
            src="images/avatar4.png" 
            alt="Profile" 
          /></div>
              </div>

              <p>Ava, Liam, Noah +12 others</p>
            </div>

            <div className="dashboard__tabs">
              <button className="tab active">Overview</button>
              <button className="tab">Transactions</button>
            </div>

            <Summary />
            <Transaction />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
