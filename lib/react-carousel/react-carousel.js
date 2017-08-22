'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./react-carousel.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedItem: 0,
      wrapperWidth: 0
    }, _this.componentDidMount = function () {
      _this.computeWrapperWidth();
      _this.bindEvents();
      _this.autoPlay();
    }, _this.componentWillUnmount = function () {
      return _this.unBindEvents();
    }, _this.debounce = function (fun, mil) {
      return function () {
        clearTimeout(_this.timer);
        _this.timer = setTimeout(function () {
          fun();
        }, mil);
      };
    }, _this.handleChangeSlide = function (index) {
      _this.handleClearIntervalAutoPlay();
      var currentSlide = index;
      if (_this.state.selectedItem === _this.props.children.length - 1) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = _this.props.children.length - 1;
      }
      _this.setState({
        selectedItem: currentSlide
      }, function () {
        return _this.autoPlay();
      });
    }, _this.bindEvents = function () {
      window.addEventListener('resize', _this.computeWrapperWidth);
    }, _this.unBindEvents = function () {
      window.removeEventListener('resize', _this.computeWrapperWidth);
      _this.handleClearIntervalAutoPlay();
    }, _this.autoPlay = function () {
      if (_this.props.autoPlay) {
        _this.autoPlayInterval = setInterval(function () {
          return _this.handleChangeSlide(_this.state.selectedItem + 1);
        }, _this.props.autoplaySpeed);
        return _this.autoPlayInterval;
      }
      return null;
    }, _this.handleClearIntervalAutoPlay = function () {
      return clearInterval(_this.autoPlayInterval);
    }, _this.computeWrapperWidth = function () {
      var w = _this.wrapper.offsetWidth;
      if (w) {
        _this.setState({
          wrapperWidth: w
        });
      }
    }, _this.renderItems = function () {
      return _this.props.children.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index, className: 'react-carousel-item', style: { width: _this.state.wrapperWidth || 0 } },
          item
        );
      });
    }, _this.renderDots = function () {
      return _this.props.children.map(function (item, index) {
        return _react2.default.createElement('li', {
          key: index,
          onClick: function onClick() {
            return _this.handleChangeSlide(index);
          },
          className: 'dot' + (_this.state.selectedItem === index ? ' active' : '')
        });
      });
    }, _this.renderArrows = function () {
      return [_react2.default.createElement('li', {
        key: 'left-arrow',
        className: 'left-arrow icon-left-open center-vertical',
        onClick: _this.debounce(function () {
          return _this.handleChangeSlide(_this.state.selectedItem - 1);
        }, 40)
      }), _react2.default.createElement('li', {
        key: 'right-arrow',
        className: 'right-arrow icon-right-open center-vertical',
        onClick: _this.debounce(function () {
          return _this.handleChangeSlide(_this.state.selectedItem + 1);
        }, 40)
      })];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.children || this.props.children.length === 0) {
        return null;
      }
      var position = this.state.selectedItem === 0 ? '0px' : -(this.state.wrapperWidth * this.state.selectedItem) + 'px';
      var transformValue = 'translate3d(' + position + ',0,0)';
      var transitionTime = this.props.transitionTime + 'ms';
      var ulStyle = {
        WebkitTransform: transformValue,
        MozTransform: transformValue,
        MsTransform: transformValue,
        OTransform: transformValue,
        transform: transformValue,
        msTransform: transformValue,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime,
        width: this.state.wrapperWidth * this.props.children.length
      };
      return _react2.default.createElement(
        'div',
        { className: 'react-carousel-wrapper', ref: function ref(_ref2) {
            _this2.wrapper = _ref2;
          } },
        _react2.default.createElement(
          'div',
          { className: 'react-carousel-railroad' },
          _react2.default.createElement(
            'ul',
            { className: 'react-carousel-stage', style: ulStyle },
            this.renderItems()
          ),
          this.props.arrows && _react2.default.createElement(
            'ul',
            { className: 'react-carousel-arrows center-vertical' },
            this.renderArrows()
          )
        ),
        this.props.dots && _react2.default.createElement(
          'ul',
          { className: 'react-carousel-dots' },
          this.renderDots()
        )
      );
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.propTypes = {
  children: _propTypes2.default.array,
  transitionTime: _propTypes2.default.number,
  dots: _propTypes2.default.bool,
  arrows: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  autoplaySpeed: _propTypes2.default.number
};
Carousel.defaultProps = {
  transitionTime: 500,
  autoplaySpeed: 8000,
  autoPlay: true,
  dots: true,
  arrows: true
};
exports.default = Carousel;