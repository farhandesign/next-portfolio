const Left = () => {
	return (
		<div className="left__col">
			<div className="social-media">
				<a className="social__links" href="https://github.com/farhandesign" target="_blank">
					<img src="./github.svg" alt="" />
					<img className="colored__icons" src="./github-col.svg" alt="" />
				</a>
				<a className="social__links" href="https://www.linkedin.com/in/farhan-hasan-r" target="_blank">
					<img src="./linkedin.svg" alt="" />
					<img className="colored__icons" src="./linkedin-col.svg" alt="" />
				</a>
				{/* <a className="social__links" href="">
					<img src="./slack.svg" alt="" />
				</a> */}
			</div>
			<div className="line" />
		</div>
	);
};

export default Left;
