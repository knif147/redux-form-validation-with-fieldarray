import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Input extends PureComponent {

  static propTypes = {
    input: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    tabIndex: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object,
    classContainer: PropTypes.object,
  };

  render() {
    const {
      input, placeholder, label, disabled, className, autoComplete = false,
      meta: { touched, error },
      type = 'text',
      tabIndex, classContainer = { className: `c-floating-label ${className || ''} ${input.value ? 'hasValue' : ''}` },
      ...rest
    } = this.props;

    return (
      <div {...classContainer}>
        <input
          id={input.name}
          disabled={disabled}
          placeholder={placeholder}
          autoComplete={autoComplete}
          type={type}
          tabIndex={tabIndex}
          {...input}
          {...rest}
        />
        <span className="bar" />
        {label && <label htmlFor={input.name}>{label}</label>}
        {touched && error && <span className="danger">{error}</span>}
      </div>
    );
  }
}
