import React from 'react';

import style from './style.less';
import facebookIcon from '../../assets/img/icon-facebook.png';
import githubIcon from '../../assets/img/icon-github.png';
import linkedinIcon from '../../assets/img/icon-linkedin.png';

class Header extends React.Component {
	render() {
		return (
			<header className={style.header}>
				<div className={style.container}>
					<div className={style.headerTop}>
						<div className={style.contactMail}>
							<a className={style.contactMailLink} href="mailTo:careycoder@gmail.com">
								<strong>contact:</strong> careycoder@gmail.com
							</a>
						</div>

						<ul>
							<li>
								<a href="https://www.facebook.com/LeonardoCareyCoder" target="_blank">
									<img src={facebookIcon} alt="Facebook icone"/></a>
							</li>

							<li>
								<a href="https://github.com/leoncarey" target="_blank">
									<img src={githubIcon} alt="Github icone"/></a>
							</li>

							<li>
								<a href="https://www.linkedin.com/in/leonardo-carey" target="_blank">
									<img src={linkedinIcon} alt="Linkedin icone"/>
								</a>
							</li>
						</ul>
					</div>

					<div className={style.innerHeader}>
						<a className={style.logo} href="/">
							<span className={style.details}> </span>
							<span className={style.textLogo}>Leonardo<strong>Carey</strong></span>
						</a>

						<nav className={style.menu}>
							<ul>
								<li className={style.active}><a href="#home">Home</a></li>
								<li><a href="#about">About</a></li>
								<li><a href="#portfolio">Portfolio</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;