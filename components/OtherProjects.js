const cards = [
	{
		cardId: 111,
		heading: 'E-Commerce website with Headless CMS',
		details: 'Built a basic e-commerce website with Commerce.js and integrated Stripe for payments.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'one',
		link: 'https://react-commerce-store.netlify.app',
		github: 'https://github.com/farhandesign/commercejs-react-store'
	},
	{
		cardId: 112,
		heading: 'Time to Have More Fun',
		details:
			'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'two',
		link: 'https://react-commerce-store.netlify.app/'
	},
	{
		cardId: 113,
		heading: 'Building a Headless Mobile App CMS From Scratch',
		details:
			'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'three',
		link: 'https://react-commerce-store.netlify.app'
	},
	{
		cardId: 114,
		heading: 'Google Keep Clone',
		details: 'A simple Google Keep clone built with Vue and Firebase.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'four',
		link: 'https://react-commerce-store.netlify.app'
	},
	{
		cardId: 115,
		heading: 'Apple Music Embeddable Web Player Widget',
		details:
			'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'five',
		link: 'https://react-commerce-store.netlify.app'
	},
	{
		cardId: 116,
		heading: 'Apple Music Facebook Messenger Integration',
		details:
			'Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on The Verge.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'six',
		link: 'https://react-commerce-store.netlify.app'
	}
];

const OtherProjects = () => {
	return (
		<section className="other-projects__section">
			<h1 className="other__h">Other Noteworthy Projects</h1>
			<a className="view" href="https://github.com/farhandesign?tab=repositories">
				view the archive
			</a>
			<div className="cards__container">
				{cards.map((card) => (
					<div key={card.cardId} className={`card ${card.grid}`}>
						<div className="card__h">
							<img className="folder-icon" src="./folder.svg" alt="" />
							<div>
								{card.github && (
									<a className="card__link" href={card.github} target="_blank">
										<img src="./github2.svg" alt="" />
									</a>
								)}

								<a className="card__link" href={card.link} target="_blank">
									<img src="./link2.svg" alt="" />
								</a>
							</div>
						</div>
						<div className="card__body">
							<h1>{card.heading}</h1>
							<p>{card.details}</p>
						</div>
						<div className="card__footer">
							<p>{card.with[0]}</p>
							<p>{card.with[1]}</p>
							<p>{card.with[2]}</p>
							<p>{card.with[3]}</p>
						</div>
					</div>
				))}
			</div>
			<a className="show" href="https://github.com/farhandesign?tab=repositories">
				Show More
			</a>
		</section>
	);
};

export default OtherProjects;
