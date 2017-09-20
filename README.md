# redux-form-validation-with-fieldarray

Easy validation for redux-form's fields(** And support FieldArray **)

### Installation
npm:
```bash
npm install redux-form-validation-with-fieldarray
```

yarn:
```bash
yarn add redux-form-validation-with-fieldarray
```

### Example

This is validate.js:
```js
import { createReduxFormValidator, validations } from 'redux-form-validation-with-fieldarray';

const validate = createReduxFormValidator({
  firstname: [validations.required, validations.alphabet],
  lastname: [validations.required, validations.alphabet],
  people: {
    name: [validations.required, validations.alphabet],
    value: [validations.required]
  },
});
export default validate;

```

And in your form component:
```js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, FieldArray, Field } from 'redux-form';
import FieldArrayComponent from './FieldArrayComponent';
import Input from './Input';
import validate from './validation';

@reduxForm({
  form: 'SomeForm',
  validate,
  initialValues: {
    people: [{}]
  }
})

class Form extends PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func,
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form>
        <div>
          <Field
            name="firstname"
            component={Input}
            placeholder="firstname"
          />
          <Field
            name="lastname"
            component={Input}
            placeholder="lastname"
          />
        </div>
        <br />
        <FieldArray
          name="people"
          component={FieldArrayComponent}
        />
        <button onClick={handleSubmit}>submit form</button>
      </form>
    );
  }
}

export default Form;


```