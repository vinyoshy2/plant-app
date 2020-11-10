import Navbar from "./Navbar";
import "./Profile.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <p> Profile photo </p>
      <div className='horizontal-divider'/>
      <Navbar />
    </div>
  )
}

export default Sidebar