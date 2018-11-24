import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import Guitar from '../../components/Guitar';
import style from './style.less';

class Banner extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'home'}>
				<div className={style.bannerWrapper}>
					<div className={style.container}>
						<div className={style.banner}>
							<div className={style.innerBanner}>
								<div className={style.contentText}>
									<h1>
										Because to build code is cool like play guitar.
									</h1>
								</div>
							</div>

							<Guitar />
						</div>
					</div>

					<a href="#about" className={style.arrowDown}><span> </span></a>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default Banner;