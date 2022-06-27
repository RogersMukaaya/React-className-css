function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
		<img src={require("./button-boarder-02.png")} className="logo" width="30" height="30" alt=""/>
		<h3><a className="navbar-brand" href="#">WebPieces Blog</a></h3>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		  <span className="navbar-toggler-icon"></span>
		</button>
	  
		<div className="collapse navbar-collapse right-nav" id="navbarSupportedContent">
		  <ul className="navbar-nav mr-auto">
			<li className="nav-item active">
			  <a className="nav-link text-primary" href="#">CSS</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">HTML</a>
			</li>
			<li className="nav-item">
			  <a className="nav-link" href="#">Javascript</a>
			</li>
		  </ul>
		  <form className="form-inline my-2 my-lg-0 search-form">
			<button className="btn btn-primary my-2 my-sm-0 login" type="submit">Login</button>
			<button className="btn btn-outline-success my-2 my-sm-0 search" type="submit">Sign up</button>
		  </form>
		</div>
	</nav>
  );
}

export default Navbar;
