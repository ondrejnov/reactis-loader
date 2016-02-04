import React from 'react';

export default class Loader extends React.Component {

	static propTypes = {
		visible: React.PropTypes.bool,
		delay: React.PropTypes.number,
		image: React.PropTypes.string
	};

	static defaultProps = {
		visible: false,
		delay: 400,
		opacity: 0.25,
		background: '#E5E5E5',
		image: '/img/ajax-loader.gif'
	};

	constructor(props) {
		super(props);
		this.state = {visible: false};
		if (props.visible) {
			this.timeout = setTimeout(() => {
				this.setState({visible: true});
			}, props.delay);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.visible && !this.props.visible) {
			this.timeout = setTimeout(() => {
				this.setState({visible: true});
			}, this.props.delay);
		}
		else {
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
			this.state.visible = nextProps.visible;
		}
	}

	render() {
		if (!this.state.visible) {
			return false;
		}

		return (
			<span>
				<div style={{background:this.props.background, zIndex: 1000, opacity:this.props.opacity, position:'absolute', top: 0, width: '100%', bottom: 0}}>
				</div>
				<div style={{position:'absolute', top: '50%', left: '50%', width: 64, bottom: 0}}>
					<img src={this.props.image} />
				</div>
			</span>
		)
	}
}