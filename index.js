'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jean.h.ma on 2/8/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var style = {
	navigation: {
		display: 'flex',
		flexDirection: "row",
		justifyContent: "center",
		height: '60px',
		backgroundColor: "black",
		boxSizing: "border-box"
	},
	leftButton: {
		flex: 0.3,
		color: "white",
		display: "flex"
	},
	rightButton: {
		flex: 0.3,
		color: "white",
		display: "flex"
	},
	title: {
		flex: 0.4,
		fontSize: '2rem',
		display: "flex",
		justifyContent: "center",
		color: "white",
		alignItems: "center"
	},
	backButton: {
		display: "flex",
		backgroundColor: "black",
		color: "white",
		border: "none",
		outline: "none",
		flex: 1,
		justifyContent: "center"
	}
};

var NavigationBar = function (_Component) {
	_inherits(NavigationBar, _Component);

	function NavigationBar() {
		_classCallCheck(this, NavigationBar);

		return _possibleConstructorReturn(this, (NavigationBar.__proto__ || Object.getPrototypeOf(NavigationBar)).apply(this, arguments));
	}

	_createClass(NavigationBar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'navigation', style: style.navigation },
				_react2.default.createElement(
					'div',
					{ className: 'navigation-left-button', style: style.leftButton },
					this.props.renderLeftButton.call(null, this)
				),
				_react2.default.createElement(
					'div',
					{ className: 'navigation-title', style: style.title },
					this.props.title
				),
				_react2.default.createElement(
					'div',
					{ className: 'navigation-right-button', style: style.rightButton },
					this.props.renderRightButton.call(null, this)
				)
			);
		}
	}]);

	return NavigationBar;
}(_react.Component);

NavigationBar.propTypes = {
	title: _react.PropTypes.string.isRequired,
	renderLeftButton: _react.PropTypes.func,
	renderRightButton: _react.PropTypes.func
};
NavigationBar.defaultProps = {
	renderLeftButton: function renderLeftButton(self) {
		return _react2.default.createElement(
			'button',
			{ className: 'back-button', style: style.backButton, onClick: function onClick(event) {
					window.history.back();
				} },
			'Back'
		);
	},
	renderRightButton: function renderRightButton() {
		return null;
	}
};
exports.default = NavigationBar;
