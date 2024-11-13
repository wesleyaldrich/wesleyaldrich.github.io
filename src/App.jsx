import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import ScrollToTop from './Components/ScrollToTop';
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"
import AboutMe from "./Pages/AboutMe"
import Music from "./Pages/Music"

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about-me" element={<AboutMe />} />
				<Route path="/music" element={<Music />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;