import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Validation from 'redux-form-fieldarray-validation';
import { reduxForm, Field } from 'redux-form';


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
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Search by id, name"
        />
        <button onClick={handleSubmit}>submit form</button>
      </form>
    );
  }
}

export default Form;
