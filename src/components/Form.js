import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Validation from 'redux-form-fieldarray-validation';
import { reduxForm, FieldArray } from 'redux-form';
import FieldArrayComponent from './FieldArrayComponent';

@reduxForm({
  form: 'test'
})

class Form extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    console.log(Validation());
    return (
      <form>
        <FieldArray
          name="name"
          component={FieldArrayComponent}
        />
        <button onClick={handleSubmit}>submit form</button>
      </form>
    );
  }
}

export default Form;
