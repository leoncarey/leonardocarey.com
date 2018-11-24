import React from "react";

import Header from "../../components/Header";
import Banner from '../Banner';
import About from '../About';
import Felix from '../../components/Felix';
import IronMan from '../IronMan';
import Portfolio from '../Portfolio';
import Footer from "../../sections/Footer";

import style from './style.less';

const App = () => {
	return <React.Fragment>
		<Header/>

		<div className={style.mainContainer}>

			<Banner/>
			<About/>
			<Felix/>
			<IronMan/>
			<Portfolio/>
			<Footer/>

		</div>
	</React.Fragment>;
};

export default App;