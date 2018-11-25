import React from 'react';

import style from './style.less';
import facebookIcon from '../../assets/img/icon-facebook.png';
import githubIcon from '../../assets/img/icon-github.png';
import linkedinIcon from '../../assets/img/icon-linkedin.png';

class Contacts extends React.Component {
	render() {
		return (
			<header className={style.contacts}>
				<div className={style.contactsInner}>
					<div className={style.contactMail}>
						<a className={style.contactMailLink} href="mailTo:careycoder@gmail.com">
							<strong>E-mail:</strong> careycoder@gmail.com
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
			</header>
		);
	}
}

export default Contacts;