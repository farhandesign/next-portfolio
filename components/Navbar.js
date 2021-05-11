import React from 'react';
import { motion } from 'framer-motion';

const easing = [ 0.6, -0.05, 0.01, 0.99 ];

const fadeInUp = {
	initial: {
		y: 10,
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

const Navbar = () => {
	const handleResume = () => {
		window.open('./farhan-resume2.pdf');
	};

	return (
		<nav>
			<motion.a
				initial={fadeInUp.initial}
				animate={fadeInUp.animate}
				transition={{ ease: easing }}
				className="logo"
				href="/"
			>
				F
			</motion.a>
			<div className="links">
				<motion.ul initial={fadeInUp.initial} animate={fadeInUp.animate} transition={{ ease: easing }}>
					<li>
						<a href="#about">
							<span>01.</span> About
						</a>
					</li>
					<li>
						<a href="#experience">
							<span>02.</span> Experience
						</a>
					</li>
					<li>
						<a href="#work">
							<span>03.</span> Work
						</a>
					</li>
					<li>
						<a href="#contact">
							<span>04.</span> Contact
						</a>
					</li>
					<li>
						<a className="nav__resume" href="" onClick={handleResume}>
							Resume
						</a>
					</li>
				</motion.ul>
			</div>

			<div className="dropdown__menu">
				<a className="btn">
					<svg height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
							fill="#CCD6F6"
						/>
						<path
							d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
							fill="#CCD6F6"
						/>
						<path
							d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
							fill="#CCD6F6"
						/>
					</svg>
				</a>
				<div className="dropdown__container">
					<div>
						<a href="#about">
							<span>01.</span> About
						</a>
						<a href="#experience">
							<span>02.</span> Experience
						</a>
						<a href="#work">
							<span>03.</span> Work
						</a>
						<a href="#contact">
							<span>04.</span> Contact
						</a>
						<a className="nav__resume" href="">
							Resume
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
