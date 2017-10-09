import { createReduxFormValidator, validations } from 'redux-form-validation-with-fieldarray';

const validate = createReduxFormValidator({
  firstname: [validations.required, validations.alphabet],
  lastname: (v) => {
    if (v > 0) {
      return [validations.required, validations.alphabet];
    }
    return [];
  },
  people: {
    name: [validations.required, validations.alphabet],
    value: [validations.required]
  },
});
export default validate;
