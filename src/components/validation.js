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
