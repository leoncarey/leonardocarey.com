import React from "react";
import ReactDom from "react-dom";
import Favicon from 'react-favicon';

import App from './sections/App';

import 'normalize.css';
import favicon from './assets/img/favicon.png';

/*
 * Preloader configuring
 */
	import Preload from 'react-preload';
	import Loader from './components/Loader';

	import image_1 from './assets/img/bg-portfolio.png';
	import image_2 from './assets/img/borders.png';
	import image_3 from './assets/img/felix.gif';
	import image_4 from './assets/img/fender-jaguar.png';
	import image_5 from './assets/img/gabileo.jpg';
	import image_6 from './assets/img/gabys.jpg';
	import image_7 from './assets/img/icon-facebook.png';
	import image_8 from './assets/img/icon-github.png';
	import image_9 from './assets/img/icon-linkedin.png';
	import image_10 from './assets/img/iron-mask.jpg';
	import image_11 from './assets/img/lion-mgm.gif';
	import image_12 from './assets/img/play_guitar.png';
	import image_13 from './assets/img/up-decor.png';
	import image_14 from './assets/img/game/megaman-sprite.png';
	import image_15 from './assets/img/portfolio/altgrupo.png';
	import image_16 from './assets/img/portfolio/amaa.jpg';
	import image_17 from './assets/img/portfolio/andre-morini.png';
	import image_18 from './assets/img/portfolio/fegaray.png';
	import image_19 from './assets/img/portfolio/jimo.png';

	const configLoader = {
		loadingIndicator: (Loader),
		images: [
			image_1, image_2, image_3, image_4, image_5,
			image_6, image_7, image_8, image_9, image_10,
			image_11, image_12, image_13, image_14, image_15,
			image_16, image_17, image_18, image_19
		]
	};
/*
 * Preloader configuring end
 */


ReactDom.render(
	<div>
		<Favicon url={favicon}/>

		<Preload
			loadingIndicator={configLoader.loadingIndicator}
			images={configLoader.images}
			autoResolveDelay={3000}
			resolveOnError={true}
			mountChildren={true}>
			<App/>
		</Preload>
	</div>
	,
	document.getElementById("app")
);