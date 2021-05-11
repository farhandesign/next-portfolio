const Projects = () => {
	return (
		<section id="work" className="projects-section">
			<div className="projects__h">
				<h1>
					<span>03.</span> Some Things I've Built
				</h1>
				<div className="h__line" />
			</div>

			<div className="project__container2">
				<div className="project__picture">
					<img src="https://res.cloudinary.com/dnvxsefyc/image/upload/v1617337980/app_zjcxdh.png" alt="" />
				</div>
				<div className="about__project">
					<h1 className="featured">Featured Project</h1>
					<h1 className="project__name">Campgrounds</h1>
					<p className="project__p">
						Built a website for camping. Users can create their own camps or leave reviews and ratings for
						other camps. Integrated Mapbox API to show camp locations.
					</p>
					<div className="tech-stack">
						<p>Node.js</p>
						<p>MongoDB</p>
						<p>Javascript</p>
						<p>Bootstrap</p>
					</div>
					<div className="project__links">
						<a target="_blank" href="https://github.com/farhandesign/campgrounds">
							<img src="./github2.svg" alt="" />
						</a>
						<a target="_blank" href="https://desolate-garden-98037.herokuapp.com/">
							<img src="./link.svg" alt="" />
						</a>
					</div>
				</div>
			</div>

			<div className="project__container">
				<div className="project__picture">
					<img
						src="https://res.cloudinary.com/dnvxsefyc/image/upload/v1617338012/evently_kdtvkr.png"
						alt=""
					/>
				</div>
				<div className="about__project">
					<h1 className="featured">Featured Project</h1>
					<h1 className="project__name">Evently</h1>
					<p className="project__p">
						Built a CRUD app for events. Users can signup and post about their own events or share them on
						other platforms. React-helmet is used to dynamically inject meta data for better SEO.
					</p>
					<ul className="tech-stack">
						<li>React.js</li>
						<li>Node.js</li>
						<li>MongoDB</li>
						<li>Bootstrap</li>
					</ul>
					<div className="project__links">
						<a href="https://desolate-garden-98037.herokuapp.com/" target="_blank">
							<img src="./github2.svg" alt="" />
						</a>
						<a href="https://astro-events-frontend.herokuapp.com/" target="_blank">
							<img src="./link.svg" alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
