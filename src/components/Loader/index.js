import React from 'react';
import style from './style.less';

import loaderGif from '../../assets/img/loader.gif';

const Loader = (
	<div className={style.loader}>
		<img src={loaderGif} alt="Loader Leonardo Carey"/>
	</div>
);

export default Loader;