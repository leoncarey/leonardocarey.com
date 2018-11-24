import React from "react";
import ReactDom from "react-dom";
import App from './sections/App';

import 'normalize.css';
import './theme.less';

ReactDom.render(
	<App/>,
	document.getElementById("app")
);