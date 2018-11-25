import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import styles from './style.less';

class Skills extends React.Component {
	render() {
		return (
			<ScrollableAnchor id={'skills'}>
				<div className={styles.skills}>
					<h4>Skills</h4>

					<div className={styles.station_3}></div>
					<div className={styles.station_1}></div>
					<div className={styles.station_2}></div>
					<div className={styles.station_4}></div>

					<div className={styles.craft_1}></div>
					<div className={styles.craft_2}></div>

					<div className={styles.rock_4}></div>
					<div className={styles.rock_1}></div>
					<div className={styles.rock_3}></div>
					<div className={styles.rock_2}></div>
					<div className={styles.rock_5}></div>

					<div className={styles.shadowAstronaut}></div>
					<div className={styles.astronaut}></div>
				</div>
			</ScrollableAnchor>
		);
	}
}

export default Skills;