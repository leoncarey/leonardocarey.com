import React from "react";
import classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';

import style from './style.less';

/*
 * Import Images
 */
import image_1 from '../../assets/img/portfolio/amaa.jpg';
import image_2 from '../../assets/img/portfolio/altgrupo.png';
import image_3 from '../../assets/img/portfolio/andre-morini.png';
import image_4 from '../../assets/img/portfolio/fegaray.png';
import image_5 from '../../assets/img/portfolio/jimo.png';

const imagesPortfolio = [image_1, image_2, image_3, image_4, image_5];

class Portfolio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentCustomer: 0
		};
	}

	setCustomer(customer) {
		this.setState(state => ({
			currentCustomer: customer
		}));
	}

	render() {
		return (
			<ScrollableAnchor id={'portfolio'}>
				<div className={style.portfolioWrapper}>
					<div className={style.portfolio}>
						<div className={style.itemsPortfolio}>
							<div className={style.container}>
								<aside className={style.halfSide}>
									<h5 className={style.title}>
										Portfolio
										<small>List of happy customers</small>
									</h5>

									<ul className={style.itemsClient}>
										<li className={classNames({
											[style.itemClient]: true,
											[style.active]: this.state.currentCustomer == 0
										})}
											onClick={this.setCustomer.bind(this, 0)}>
											<div className={style.itemContent}>
												<span>ø</span>
												<span>AMAA Acervos</span>
											</div>
										</li>

										<li className={classNames({
											[style.itemClient]: true,
											[style.active]: this.state.currentCustomer == 1
										})}
											onClick={this.setCustomer.bind(this, 1)}>
											<div className={style.itemContent}>
												<span>ø</span>
												<span>Altgrupo</span>
											</div>
										</li>

										<li className={classNames({
											[style.itemClient]: true,
											[style.active]: this.state.currentCustomer == 2
										})}
											onClick={this.setCustomer.bind(this, 2)}>
											<div className={style.itemContent}>
												<span>ø</span>
												<span>André Morini Coach</span>
											</div>
										</li>

										<li className={classNames({
											[style.itemClient]: true,
											[style.active]: this.state.currentCustomer == 3
										})}
											onClick={this.setCustomer.bind(this, 3)}>
											<div className={style.itemContent}>
												<span>ø</span>
												<span>Fe Garay</span>
											</div>
										</li>

										<li className={classNames({
											[style.itemClient]: true,
											[style.active]: this.state.currentCustomer == 4
										})}
											onClick={this.setCustomer.bind(this, 4)}>
											<div className={style.itemContent}>
												<span>ø</span>
												<span>Jimo(by BASE)</span>
											</div>
										</li>
									</ul>
								</aside>

								<aside className={style.halfSide}>
									<div className={style.containerImagePortfolio}>
										<div className={style.imagePortfolio}
											 style={{backgroundImage: `url(${imagesPortfolio[this.state.currentCustomer]})`}}></div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default Portfolio;