import {Button} from 'react-bootstrap';
import React from 'react';
import shallowEqual from 'react-pure-render/shallowEqual';
import classNames from 'classnames';


export default class LoadingButton extends React.Component {

	static propTypes = {
		loading: React.PropTypes.bool.isRequired,
		disabled: React.PropTypes.bool,
		title: React.PropTypes.string.isRequired,
		bsStyle: React.PropTypes.string,
		icon: React.PropTypes.string,
		onClick: React.PropTypes.func.isRequired
	};

	static defaultProps = {
		bsStyle: 'primary',
		icon: 'fa fa-check position-left',
		disabled: false
	};

	shouldComponentUpdate(nextProps, nextState) {

		const shouldUpdate =
			!shallowEqual(this.props, nextProps) ||
			!shallowEqual(this.state, nextState);

		return shouldUpdate;
	}

	render() {
		return (
			<Button disabled={this.props.loading}
					type="submit"
					className={classNames({disabled: this.props.disabled})}
					bsStyle={this.props.bsStyle}
					onClick={()=>this.props.onClick()}>
				<span>
					{this.props.loading && <i className="fa fa-spinner rotate position-left" />}
					{!this.props.loading && <i className={this.props.icon} />}{this.props.title}
				</span>
			</Button>
		);
	}
}