
import './App.css'
import FeaturedJob from './Components/FeaturedJob/FeaturedJob'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HeaderMain from './Components/HeaderMain/HeaderMain'
import JobList from './Components/JobList/JobList'

function App() {

  return (
    <div className="App">
      <HeaderMain></HeaderMain>
      <JobList></JobList>
      <FeaturedJob></FeaturedJob>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
