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
import memoize from 'lru-memoize';
import { createValidator, required, alphabet } from 'redux-form-fieldarray-validation';

const validate = createValidator({
  firstname: [required, alphabet],
  lastname: [required, alphabet],
  // This is for FieldArray component
  people: {
    name: [required, alphabet],
    value: [required]
  },
});
export default memoize(10)(validate);

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