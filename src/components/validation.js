import { createReduxFormValidator, validations } from 'redux-form-validation-with-fieldarray';

const validate = createReduxFormValidator({
  firstname: [validations.required, validations.alphabet],
  lastname: (lastname, data) => {
    console.log('lastname, data', lastname, data);
    return [validations.required];
  },
  people: {
    name: (name) => {
      console.log(name);
      return [validations.required, validations.alphabet];
    },
    value: [validations.required]
  },
});
export default validate;
