import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Trendy Blogs</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: 'dodgerblue',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
