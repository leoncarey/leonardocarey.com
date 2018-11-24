import React from 'react';
import style from './style.less';

class Felix extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			walk: 1250
		};
	}

	render() {
		setTimeout(() => {
			if(this.state.walk < window.innerWidth) {
				this.setState(state => ({
					walk: state.walk += 1
				}));
			} else {
				this.setState(state => ({
					walk: -85
				}));
			}
		}, 50);

		return (
			<div className={style.felix} style={{backgroundPositionX: this.state.walk}}></div>
		);
	}
}

export default Felix;