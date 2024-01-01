import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'
import AvgComponents from './components/AvgComponents'
import FeedbackContex, { FeedbackProvider } from './context/FeedbackContext'


function App() {

  return (
    <FeedbackProvider>
      <Navbar />
      <div className="container p-5 bg-dark">
        <Form />
        <AvgComponents />
        <ListGroup />
      </div>
    </FeedbackProvider>
  )
}

export default App