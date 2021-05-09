const Experience = () => {
	return (
		<section id="experience" className="experience__section">
			<div className="experience__content">
				<div className="exp__h">
					<h1>
						<span>02.</span> Where I've Worked
					</h1>
					<div className="h__line" />
				</div>
				<div className="experience">
					<div className="l__col">
						<div className="highlight__line">
							<div className="highlight" />
						</div>
						<div className="buttons">
							<button id="tahjir" className="button tahjirBtn">
								Tahjir
							</button>
							<button id="arti" className="button artiBtn">
								Artilytics
							</button>
						</div>
					</div>

					<div className="r__col at-tahjir display">
						<div className="r__col-h">
							<h1>
								FRONTEND/UI/UX
								<span>
									@
									<a style={{ color: '#63ffd9' }} href="https://tahjir.com/">
										Tahjir
									</a>
								</span>
							</h1>
							<p className="r__sub-h">Jan 2020 - Present</p>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>
									Participated in every step of the product development process from ideation through
									development and improvement for features.
								</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>
									Designed and developed web application using custom sass library and Django web
									framework.
								</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>
									Designed and implemented mobile experience leading to 40% growth in monthly active
									mobile users.
								</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>Implemented Custom Design System reducing time to develop User interfaces.</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>
									Created multiple POC designs on figma to help prioritize new features for product
									team.
								</p>
							</div>
						</div>
					</div>

					<div className="r__col at-arti hide">
						<div className="r__col-h">
							<h1>
								FULLSTACK
								<span>
									@
									<a style={{ color: '#63ffd9' }} href="https://artilytics.com/">
										Artilytics
									</a>
								</span>
							</h1>
							<p className="r__sub-h">Jan 2020 - Present</p>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>blablabla</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>Worked with product manager to prioritise and execute on feature sets.</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>Interfaced with Django web framework to create a data driven UX.</p>
							</div>
							<div className="r__job">
								<img src="./arrow.svg" alt="" />
								<p>Led a complete redesign of the existing website.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
