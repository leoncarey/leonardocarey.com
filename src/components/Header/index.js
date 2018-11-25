import React from 'react';
import style from './style.less';

class Header extends React.Component {
	render() {
		return (
			<header className={style.header}>
				<div className={style.container}>
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
								<li><a href="#skills">Skills</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;