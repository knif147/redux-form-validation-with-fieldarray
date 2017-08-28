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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      wrapperWidth: 0,
      slideWidth: 0
    }, _this.componentDidMount = function () {
      _this.checkLenghtOfChildren();
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
    }, _this.checkLenghtOfChildren = function () {
      if (!_this.props.children || _this.props.children.length === 0) {
        return null;
      }
      if (_this.props.children && !_this.props.children.length) {
        return null;
      }
      return true;
    }, _this.handleChangeSlide = function (index, clickedOnControlls, clickedOnLeftArrow) {
      var _this$props = _this.props,
          children = _this$props.children,
          slidesToShow = _this$props.slidesToShow,
          loop = _this$props.loop;


      var currentSlide = index;
      if (loop) {
        if (index === slidesToShow + (children.length - (slidesToShow - 1))) {
          currentSlide = 0;
        }
      } else if (children.length - slidesToShow < index && !clickedOnLeftArrow) {
        currentSlide = 0;
      }
      if (index < 0) {
        currentSlide = children.length - slidesToShow;
      }

      return _this.setState({
        selectedItem: currentSlide
      }, function () {
        if (clickedOnControlls) {
          _this.handleClearIntervalAutoPlay();
          _this.autoPlay();
        }
      });
    }, _this.bindEvents = function () {
      return window.addEventListener('resize', _this.debounce(_this.computeWrapperWidth, 400));
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
      var w = _this.wrapper && _this.wrapper.offsetWidth;
      if (w) {
        _this.setState({
          wrapperWidth: w,
          slideWidth: w / _this.props.slidesToShow || w
        });
      }
    }, _this.renderItems = function () {
      return [].concat(_toConsumableArray(_this.props.children), _toConsumableArray(_this.props.children.slice(0, _this.props.slidesToShow))).map(function (item, index) {
        return _react2.default.createElement(
          'li',
          {
            key: index,
            className: 'react-carousel-item' + (_this.state.selectedItem === index ? ' active' : ''),
            style: { width: _this.state.slideWidth }
          },
          item
        );
      });
    }, _this.renderDots = function () {
      var LENGTH = _this.props.slidesToShow === 1 ? _this.props.children.length : _this.props.children.length - (_this.props.slidesToShow - 1);
      var els = [];

      var _loop = function _loop(index) {
        // (this.props.children.length + index)
        els.push(_react2.default.createElement('li', {
          key: index,
          onClick: function onClick() {
            return _this.handleChangeSlide(index, true);
          },
          className: 'dot' + (_this.state.selectedItem === index || _this.state.selectedItem === 0 && index === 0 ? ' active' : '')
        }));
      };

      for (var index = 0; index < LENGTH; index += 1) {
        _loop(index);
      }
      return els;
    }, _this.renderArrows = function () {
      return [_react2.default.createElement('li', {
        key: 'left-arrow',
        className: 'left-arrow icon-left-open center-vertical',
        onClick: _this.debounce(function () {
          if (_this.state.selectedItem === _this.props.children.length - 1) {
            return _this.handleChangeSlide(_this.props.children.length - 2, true, true);
          }
          return _this.handleChangeSlide(_this.state.selectedItem - 1);
        }, 40)
      }), _react2.default.createElement('li', {
        key: 'right-arrow',
        className: 'right-arrow icon-right-open center-vertical',
        onClick: _this.debounce(function () {
          return _this.handleChangeSlide(_this.state.selectedItem + 1, true);
        }, 40)
      })];
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Carousel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.checkLenghtOfChildren()) {
        return null;
      }
      var position = this.state.selectedItem === 0 ? '0px' : -(this.state.slideWidth * this.state.selectedItem) + 'px';
      var transformValue = 'translate3d(' + position + ',0,0)';
      var transitionTime = this.props.transitionTime + 'ms';
      if (this.state.selectedItem === this.props.children.length + 1 || this.state.selectedItem === 0) {
        transitionTime = 0 + 'ms';
      }
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
        width: this.state.wrapperWidth * (this.props.children.length + this.props.slidesToShow)
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
  children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
  transitionTime: _propTypes2.default.number,
  dots: _propTypes2.default.bool,
  arrows: _propTypes2.default.bool,
  autoPlay: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  autoplaySpeed: _propTypes2.default.number,
  slidesToShow: _propTypes2.default.number
};
Carousel.defaultProps = {
  transitionTime: 500,
  autoplaySpeed: 5000,
  autoPlay: true,
  dots: true,
  arrows: true,
  loop: false,
  slidesToShow: 1
};
exports.default = Carousel;