import { useState } from 'react';

const Experience = () => {
	const [ showT, setShowT ] = useState(true);
	const [ showA, setShowA ] = useState(false);

	const [ highlight, setHighlight ] = useState('top');

	const handleTahjir = () => {
		setShowA(false);
		setShowT(true);
		setHighlight('top');
	};
	const handleArti = () => {
		setShowA(true);
		setShowT(false);
		setHighlight('bottom');
	};

	const position = {
		marginTop: 'auto',
		marginLeft: 'auto'
	};

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
							<div className="highlight" style={highlight === 'bottom' ? position : null} />
						</div>
						<div className="buttons">
							<button id="tahjir" className="button tahjirBtn" onClick={handleTahjir}>
								Tahjir
							</button>
							<button id="arti" className="button artiBtn" onClick={handleArti}>
								Artilytics
							</button>
						</div>
					</div>

					{showT && (
						<div className="r__col at-tahjir">
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
										Participated in every step of the product development process from ideation
										through development and improvement for features.
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
										Designed and implemented mobile experience leading to 40% growth in monthly
										active mobile users.
									</p>
								</div>
								<div className="r__job">
									<img src="./arrow.svg" alt="" />
									<p>Implemented Custom Design System reducing time to develop User interfaces.</p>
								</div>
								<div className="r__job">
									<img src="./arrow.svg" alt="" />
									<p>
										Created multiple POC designs on figma to help prioritize new features for
										product team.
									</p>
								</div>
							</div>
						</div>
					)}

					{showA && (
						<div className="r__col at-arti">
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
								<p className="r__sub-h">Nov 2019 - Dec 2019</p>
								<div className="r__job">
									<img src="./arrow.svg" alt="" />
									<p>
										Designed and developed a visually appealing and responsive website for
										Artilytics.
									</p>
								</div>
								<div className="r__job">
									<img src="./arrow.svg" alt="" />
									<p>
										Allow prospective clients to be able to subscribe to Artilytics Newsletter and
										request a demo.
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Experience;
