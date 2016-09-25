'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = (0, _radium2.default)(_class = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'pageButton',
    value: function pageButton(num, style) {
      var _this2 = this;

      var onClick = this.props.onPageClick ? function () {
        return _this2.props.onPageClick(num);
      } : function () {};

      return _react2.default.createElement(
        'div',
        { key: 'page_' + num,
          style: style,
          onClick: onClick },
        num
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var currentPage = _props.currentPage;
      var totalPages = _props.totalPages;


      var styles = {
        container: {
          display: 'flex',
          flexWrap: 'wrap'
        },
        button: {
          backgroundColor: '#fff',
          padding: '5px 10px',
          cursor: 'pointer'
        },
        active: {
          cursor: 'default',
          color: '#fff',
          backgroundColor: '#337ab7'
        }
      };

      var buttons = [];
      for (var i = 1; i <= totalPages; i++) {
        buttons.push(this.pageButton(i, [styles.button, i === currentPage ? styles.active : {}]));
      }

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        buttons
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component)) || _class;

Pagination.PropTypes = {
  currentPage: _react2.default.PropTypes.number.isRequired,
  totalPages: _react2.default.PropTypes.number.isRequired,
  onPageClick: _react2.default.PropTypes.func
};

exports.default = Pagination;