import React from "react";

import Header from "../../components/Header";
import Contacts from '../../components/Contacts';
import Banner from '../Banner';
import About from '../About';
import Felix from '../../components/Felix';
import IronMan from '../IronMan';
import Portfolio from '../Portfolio';
import Skills from '../Skills';
import Footer from "../../sections/Footer";

import style from './style.less';

const App = () => {
	return (
		<React.Fragment>
			<Header/>
			<Contacts/>

			<div className={style.mainContainer}>
				<Banner/>
				<About/>
				<Felix/>
				<IronMan/>
				<Portfolio/>
				<Skills/>
				<Footer/>
			</div>
		</React.Fragment>
	);
};

export default App;