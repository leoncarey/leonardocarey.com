import React from 'react';
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';

import style from './style.less';

class IronMan extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			openedMask: false
		};
	}

	openMask() {
		this.setState(state => ({
			openedMask: !state.openedMask
		}));
	}

	render() {
		return (
			<ScrollableAnchor id={'iron-man'}>
				<div className={style.ironManContainer}>
					<div className={style.container}>
						<div className={style.ironManInner}>
							<div className={classNames({[style.ironMan]: true, [style.opened]: this.state.openedMask})}
								 onClick={this.openMask.bind(this)}>
								<header className={style.helmet}>
									{/*<!-- Red paths -->*/}
									<div className={style.behindHelmet}></div>
									<div className={style.topHelmet}></div>
									<div className={style.ears}></div>
									<div className={style.jaw}></div>
									<div className={style.cheeks}>
										<aside className={style.cheekLeft}></aside>
										<aside className={style.cheekRight}></aside>
									</div>
									<div className={style.chin}></div>

									<div className={style.insideHelmet}>
										<div className={style.face}></div>
									</div>

									{/*<!-- Yellow mask -->*/}
									<div className={style.mask}>
										<div className={style.behindMask}>
											<div className={style.cheekLeftBehind}></div>
											<div className={style.cheekRightBehind}></div>
										</div>
										<div className={style.topMask}>
											<aside className={style.sideLeft}></aside>
											<aside className={style.sideRight}></aside>
										</div>
										<div className={style.cheeksMask}>
											<aside className={style.cheekLeft}></aside>
											<aside className={style.cheekRight}></aside>
										</div>
										<div className={style.bottomMask}></div>
										<div className={style.eyes}>
											<div className={style.leftEye}>
												<div className={style.lightEye}></div>
											</div>
											<div className={style.rightEye}>
												<div className={style.lightEye}></div>
											</div>
										</div>
										<div className={style.eyebrows}></div>
									</div>

									<div className={style.chinMask}>
										<div className={style.sideLeft}></div>
										<div className={style.cornerLeft}></div>
										<div className={style.sideRight}></div>
										<div className={style.cornerRight}></div>
									</div>
								</header>

								<aside className={style.talkBalloon}>
				<span>
					Click me!
				</span>
								</aside>
							</div>

							<div className={style.sideInfo}>
								<h5 className={style.title}>
									Front-end <span className={style.emoji}>❤</span>
								</h5>

								<h6 className={style.subTitle}>
									IronMan 90% css, 10% joker 💪
								</h6>

								<p>
									When the mission needs a technological upgrade, Tony Stark gears up in an advanced suit
									that lets him prepare for battle and get ready to take down the bad guys.
								</p>

								<p>
									But that time Tony can't go. So, Mr. Carey will go help us! And the code will be the
									best ever ever.
								</p>
							</div>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default IronMan;