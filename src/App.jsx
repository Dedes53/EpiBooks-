import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import BookList from "./components/BookList"

import fantasy from './books/fantasy.json'
function App() {


  return (
    <>
      <MyNav brand="EpiBooks!" />
      <Welcome />
      <BookList book={fantasy} />
    </>
  )
}

export default App
