import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes/app-routes'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles'
import { Footer } from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ToastContainer />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App