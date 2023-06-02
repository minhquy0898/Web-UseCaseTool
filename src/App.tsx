import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/Loading'
import MainRouter from './routes/MainRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = props => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
            <MainRouter/>
        </BrowserRouter>
        <ToastContainer />
      </Suspense>

    </div>
  )
}

App.propTypes = {}

export default App