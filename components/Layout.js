import Navbar from './Navbar';
import Left from './Left';
import Right from './Right';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />
			<div className="content">
				<Left />
				{children}
				<Right />
			</div>
		</div>
	);
};

export default Layout;
