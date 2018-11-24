import React from 'react';
import classNames from 'classnames';

import style from './style.less';
import guitar from '../../assets/img/fender-jaguar.png';
import playSound from '../../assets/img/play_guitar.png';

/*
 * Import Sounds
 */
import sound_1 from '../../assets/sounds/sound_1.mp3';
import sound_2 from '../../assets/sounds/sound_2.mp3';
import sound_3 from '../../assets/sounds/sound_3.mp3';
import sound_4 from '../../assets/sounds/sound_4.mp3';
import sound_5 from '../../assets/sounds/sound_5.mp3';
import sound_6 from '../../assets/sounds/sound_6.mp3';
import sound_7 from '../../assets/sounds/sound_7.mp3';
import sound_8 from '../../assets/sounds/sound_8.mp3';
import sound_9 from '../../assets/sounds/sound_9.mp3';
import sound_10 from '../../assets/sounds/sound_10.mp3';

const sounds = [
	sound_1, sound_2, sound_3,
	sound_4, sound_5, sound_6,
	sound_7, sound_8,
	sound_9, sound_10
];


class Guitar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notesEnabled: false,
			isPlaying: '',
			currentPlaying: null
		};
	}

	openNotes() {
		this.setState(state => ({
			notesEnabled: !state.notesEnabled
		}));

		this.endSound();
	}

	playSound(sound) {
		if(this.state.currentPlaying != sound) {
			this.setState({
				isPlaying: sounds[sound],
				currentPlaying: sound
			}, () => {
				this.refs.audio.pause();
				this.refs.audio.load();
				this.refs.audio.play();
			});
		} else {
			this.setState({
				isPlaying: '',
				currentPlaying: null
			}, () => {
				this.refs.audio.pause();
			});
		}
	}

	endSound() {
		this.setState({
			isPlaying: '',
			currentPlaying: null
		}, () => {
			this.refs.audio.pause();
		});
	}

	render() {
		return (
			<div className={style.guitar}>
				<audio controls ref="audio" onEnded={this.endSound.bind(this)}>
					<source src={this.state.isPlaying}/>
				</audio>

				<div className={style.innerGuitar}>
					<div className={classNames({[style.notes]: true, [style.active]: this.state.notesEnabled})}>
						<a onClick={() => this.playSound(0)} className={classNames({[style.playing]: this.state.currentPlaying == 0})}>
							<span className={style.noPlay}>♩</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(1)} className={classNames({[style.playing]: this.state.currentPlaying == 1})}>
							<span className={style.noPlay}>♪</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(2)} className={classNames({[style.playing]: this.state.currentPlaying == 2})}>
							<span className={style.noPlay}>♫</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(3)} className={classNames({[style.playing]: this.state.currentPlaying == 3})}>
							<span className={style.noPlay}>♬</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(4)} className={classNames({[style.playing]: this.state.currentPlaying == 4})}>
							<span className={style.noPlay}>♭</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(5)} className={classNames({[style.playing]: this.state.currentPlaying == 5})}>
							<span className={style.noPlay}>♮</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(6)} className={classNames({[style.playing]: this.state.currentPlaying == 6})}>
							<span className={style.noPlay}>♯</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(7)} className={classNames({[style.playing]: this.state.currentPlaying == 7})}>
							<span className={style.noPlay}>ø</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(8)} className={classNames({[style.playing]: this.state.currentPlaying == 8})}>
							<span className={style.noPlay}>♩</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
						<a onClick={() => this.playSound(9)} className={classNames({[style.playing]: this.state.currentPlaying == 9})}>
							<span className={style.noPlay}>♫</span>
							<span className={style.onPlay}><img src={playSound} alt="Player Song Icon"/></span>
						</a>
					</div>

					<img src={guitar} alt="Guitar Fender" onClick={this.openNotes.bind(this)}/>
					<span className={classNames({[style.clickText]: true, [style.clicked]: this.state.notesEnabled})} onClick={this.openNotes.bind(this)}>Click here</span>
				</div>
			</div>
		);
	}
}

export default Guitar;