import NeonBtn from './NeonBtn';

const Intro = () => {
	return (
		<section className="intro__section">
			<div className="content">
				<h3 className="hi">Hi, my name is</h3>
				<h1 className="name">Farhan Hasan.</h1>
				<h1 className="my-work">I build things for the web.</h1>
				<p>
					I'm a web developer based in Dubai, UAE specializing in building (and occasionally designing)
					exceptional websites, applications, and everything in between.
				</p>
				<NeonBtn text="Get In Touch" />
				{/* <a className="intro__btn" href="mailto:farhan.design@outlook.com">
					Get In Touch
				</a> */}
			</div>
		</section>
	);
};

export default Intro;
