import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="notfound-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
      alt="not found"
      className="notfound-img"
    />
    <h1 className="notfound-heading">Page not found</h1>
    <Link to="/">
      <button type="button">Go Home</button>
    </Link>
  </div>
)
export default NotFound
