import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
		<Navbar />
		<div className="container">
			<img src={require("./jackson-sophat-_t-l5FFH8VA-unsplash.jpg")} width="70%" alt=""/>
			<div className="content">
				<h1>Introduction</h1>
				<p>
				<span className="first-letter">L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque leo lorem, interdum nec facilisis id, varius eu sem. Donec congue enim lectus, vitae porttitor lorem molestie at. Nulla vitae quam nisl. Mauris convallis bibendum neque, volutpat tempus ligula posuere nec. Praesent urna eros, tincidunt a dictum vestibulum, volutpat nec odio. Phasellus sit amet metus fermentum, dictum ex sed, laoreet felis. Pellentesque ullamcorper, felis eget porta placerat, augue eros condimentum lectus, a mollis urna tellus ac velit. Sed at tortor molestie, condimentum diam sed, ultrices velit.
				</p>
				<h4>Why CSS?</h4>
				<p>
				Vestibulum accumsan non erat eu blandit. Aenean consequat, diam at consectetur malesuada, tortor leo ultricies ligula, id tincidunt tortor arcu eget nisl. Nunc eu nunc elit. Suspendisse sed neque vulputate, suscipit tortor sit amet, ullamcorper lorem. Ut vel magna ac urna molestie mollis. Curabitur id aliquet mauris. Aliquam ullamcorper mollis ante, congue finibus ipsum facilisis a. Aenean dictum ullamcorper sagittis.
				</p>
				<p>
				Integer a odio sit amet nisi facilisis sagittis. Integer ut mauris ultricies, volutpat sem eget, ultricies turpis. Donec sodales, leo id sagittis eleifend, elit nulla commodo nisi, a sodales augue quam in diam. Duis eu viverra dui, eget interdum lectus. Ut dignissim, dolor et semper consequat, orci nisi tincidunt augue, sed blandit ligula nulla vitae nibh. Donec finibus eros ac mollis vulputate. Aliquam sagittis, nulla vitae ultricies aliquam, nisl tellus luctus nibh, vitae cursus eros justo vitae ligula.
				</p>
				<h4>CSS trends in 2022</h4>
				<p>
				Vestibulum accumsan non erat eu blandit. Aenean consequat, diam at consectetur malesuada, tortor leo ultricies ligula, id tincidunt tortor arcu eget nisl. Nunc eu nunc elit. Suspendisse sed neque vulputate, suscipit tortor sit amet, ullamcorper lorem. Ut vel magna ac urna molestie mollis. Curabitur id aliquet mauris. Aliquam ullamcorper mollis ante, congue finibus ipsum facilisis a. Aenean dictum ullamcorper sagittis.
				</p>
				<p>
				Integer a odio sit amet nisi facilisis sagittis. Integer ut mauris ultricies, volutpat sem eget, ultricies turpis. Donec sodales, leo id sagittis eleifend, elit nulla commodo nisi, a sodales augue quam in diam. Duis eu viverra dui, eget interdum lectus. Ut dignissim, dolor et semper consequat, orci nisi tincidunt augue, sed blandit ligula nulla vitae nibh. Donec finibus eros ac mollis vulputate. Aliquam sagittis, nulla vitae ultricies aliquam, nisl tellus luctus nibh, vitae cursus eros justo vitae ligula.
				</p>
				<h4>Conclusion</h4>
				<p>
				Vestibulum accumsan non erat eu blandit. Aenean consequat, diam at consectetur malesuada, tortor leo ultricies ligula, id tincidunt tortor arcu eget nisl. Nunc eu nunc elit. Suspendisse sed neque vulputate, suscipit tortor sit amet, ullamcorper lorem. Ut vel magna ac urna molestie mollis. Curabitur id aliquet mauris. Aliquam ullamcorper mollis ante, congue finibus ipsum facilisis a. Aenean dictum ullamcorper sagittis.
				</p>
			</div>
			<div className="subscribe">
				<h5>
					Subscribe to my Newsletter
				</h5>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
						<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<button type="submit" className="btn btn-primary submit">Subscribe</button>
				</form>
			</div>
		</div>
    </div>
  );
}

export default App;
