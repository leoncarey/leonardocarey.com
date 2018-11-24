import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';

import style from './style.less';
import picAbout from '../../assets/img/gabileo.jpg';

class About extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'about'}>
				<div className={style.aboutWrapper}>
					<div className={style.container}>
						<div className={style.about}>
							<div className={style.contentAbout}>
								<h2 className={style.generalSubTitle}>
									About me
								</h2>

								<h3 className={style.generalTitle}>
									The history of my life!
								</h3>

								<div className={style.description}>
									<div className={style.halfSide}>
										<div className={style.innerHalf}>
											<h4 className={style.genericSubtitle}>Personal</h4>
											<p>
												I am 29 years old, married with Gaby and live in Porto Alegre. I'm a web
												developer
												FullStack (But better as front-end).<br/>
												I know play electric guitar and many instruments. I'm christian and
												devotee to God.
											</p>
										</div>
									</div>

									<div className={style.halfSide}>
										<div className={style.innerHalf}>
											<h4 className={style.genericSubtitle}>Professional</h4>
											<p>
												Today, I work as a fullStack developer at <a href="http://base.digital"
																							 target="_blank">BASE</a>.
												Usually, I'm better with frontend than backend, but I build both.<br/>
											</p>

											<p>
												As the old saying goes:
												<span className={style.quoteText}><i>"The good is the enemy of the great."</i></span>
											</p>

											<p>
												Oh chills! Umpteen chills.<br/>
												Thank you.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className={`${style.pics} ${style.pic}`}>
								<img src={picAbout} alt="Photo Gaby & Leo"/>
							</div>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default About;