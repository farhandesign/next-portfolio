import Intro from '../components/Intro';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import OtherProjects from '../components/OtherProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<main className="main-container">
			<Intro />
			<About />
			<Experience />
			<Projects />
			<OtherProjects />
			<Contact />
			<Footer />
		</main>
	);
}
