import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

export default class FieldArrayComponent extends PureComponent {

  static propTypes = {
    fields: PropTypes.object,
  };

  render() {
    const { fields } = this.props;
    return (
      <div>
        {fields.map((item, index) =>
          [<div key={index}>
            <Field name={`${item}.name`} component="input" label="attribute name" />
            <Field name={`${item}.value`} component="input" label="attribute value" />
            <button
              className="button-icon remove-pd xs-pull-left"
              type="button"
              onClick={() => fields.remove(index)}
            >
              remove
            </button>
          </div>]
        )}
        <br />
        <h3 className="cursor underline">
          <span onClick={() => fields.push({})}>
            Add more attributes
          </span>
        </h3>
      </div>
    );
  }
}
