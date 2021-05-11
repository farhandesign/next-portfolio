import { motion } from 'framer-motion';
import NeonBtn from './NeonBtn';

const easing = [ 0.6, -0.05, 0.01, 0.99 ];

const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			ease: easing
		}
	}
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1
		}
	}
};

const Intro = () => {
	return (
		<motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
			<section className="intro__section">
				<div className="content">
					<motion.div
						variants={fadeInUp}
						initial={fadeInUp.initial}
						animate={fadeInUp.animate}
						transition={{ ease: easing }}
					>
						<h3 className="hi">Hi, my name is</h3>
						<h1 className="name">Farhan Hasan.</h1>
						<h1 className="my-work">I build things for the web.</h1>
						<p>
							I'm a web developer based in Dubai, UAE specializing in building (and occasionally
							designing) exceptional websites, applications, and everything in between.
						</p>
						<NeonBtn text="Get In Touch" />
					</motion.div>
				</div>
			</section>
		</motion.div>
	);
};

export default Intro;
