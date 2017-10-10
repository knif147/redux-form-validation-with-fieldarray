import { createReduxFormValidator, validations } from 'redux-form-validation-with-fieldarray';

const validate = createReduxFormValidator({
  firstname: [validations.required, validations.alphabet],
  lastname: (lastname, formData) => {
    const validationArray = [validations.required];
    if (lastname && ((lastname.indexOf('123')) || (lastname.indexOf('123') === 0))) {
      validationArray.push(validations.alphabet);
    }
    console.log(lastname, formData);
    return validationArray;
  },
  children: {
    name: (name, formData, index) => {
      console.log(name, formData, index);
      return [validations.required, validations.alphabet];
    },
    phone_number: [validations.required, validations.integer]
  },
});
export default validate;
