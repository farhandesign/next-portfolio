const About = () => {
	return (
		<section id="about" className="about__section">
			<div className="about__content">
				<div className="about__h">
					<h1>
						<span>01.</span> About Me
					</h1>
					<div className="h__line" />
				</div>
				<div className="about__me">
					<div className="about__p">
						<div className="intro">
							<p>
								I enjoy creating things that live on the internet, whether that be websites,
								applications, or anything in between. My goal is to always build products that provide
								pixel-perfect, performant experiences.
							</p>
							<p>
								Creative solution seeker with a keen eye for design. Excellent work ethic and ability to
								leverage technical, analytical and problem-solving skills. Committed to learning and
								growing as a developer. Adept at working and contributing to a highly collaborative work
								environment.
							</p>
							<p>Here are a few technologies I've been working with:</p>
						</div>
						<div className="tech">
							<div className="col">
								<h2>FRONTEND</h2>
								<p>Html, CSS & SCSS</p>
								<p>Javascript</p>
								<p>Bootstrap</p>
							</div>
							<div className="col">
								<h2>BACKEND</h2>
								<p>Node.js / Express.js</p>
								<p>MongoDB (Mongoose)</p>
							</div>
							<div className="col">
								<h2>FRAMEWORKS</h2>
								<p>React.js</p>
								<p>Next.js</p>
								<p>jQuerry</p>
							</div>
							<div className="col">
								<h2>SOURCE CONTROL</h2>
								<p>Git</p>
								<h2>UI/UX</h2>
								<p>Figma</p>
							</div>
						</div>
					</div>
					<div className="about__img">
						<div className="img__container">
							<img src="./profile.jpg" alt="" />
							<div className="border" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
