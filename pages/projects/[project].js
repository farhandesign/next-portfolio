import { motion } from 'framer-motion';

const project = () => {
	return (
		<motion.dev exit={{ opacity: 0 }}>
			<main className="main-container">
				<h1>Project</h1>
			</main>
		</motion.dev>
	);
};

export default project;
