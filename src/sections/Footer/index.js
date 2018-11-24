import React from 'react';

import style from './style.less';
import facebookIcon from '../../assets/img/icon-facebook.png';
import githubIcon from '../../assets/img/icon-github.png';
import linkedinIcon from '../../assets/img/icon-linkedin.png';
import lionMGM from '../../assets/img/lion-mgm.gif';

class Footer extends React.Component {
	render() {
		return (
			<footer className={style.footer}>
				<div className={style.container}>
					<div className={style.lionMGM}>
						<h5>Thank you!</h5>

						<img src={lionMGM} alt="Lion MGM"/>
					</div>

					<div className={style.presents}>
						Develop by Leonardo Carey
					</div>

					<ul className={style.socialFooter}>
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
			</footer>
		);
	}
}

export default Footer;