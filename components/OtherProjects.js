import Link from 'next/link';

const cards = [
	{
		cardId: 111,
		heading: 'Built a basic e-commerce website with Commerce.js and Stripe',
		details: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'one'
	},
	{
		cardId: 112,
		heading: 'Time to Have More Fun',
		details:
			'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'two'
	},
	{
		cardId: 113,
		heading: 'Building a Headless Mobile App CMS From Scratch',
		details:
			'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'three'
	},
	{
		cardId: 114,
		heading: 'Google Keep Clone',
		details: 'A simple Google Keep clone built with Vue and Firebase.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'four'
	},
	{
		cardId: 115,
		heading: 'Apple Music Embeddable Web Player Widget',
		details:
			'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'five'
	},
	{
		cardId: 116,
		heading: 'Apple Music Facebook Messenger Integration',
		details:
			'Facebook Messenger chat bot extension featuring authentication and full song streaming from within the Messenger app. Read more about it on The Verge.',
		with: [ 'Commerce.Js', 'React', 'Stripe', 'Material-UI' ],
		gird: 'six'
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
								<Link href={`/projects/${card.cardId}`}>
									<a className="card__link" href="">
										<img src="./link2.svg" alt="" />
									</a>
								</Link>
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
			<a className="show" href="">
				Show More
			</a>
		</section>
	);
};

export default OtherProjects;
