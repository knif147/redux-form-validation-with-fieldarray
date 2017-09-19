import memoize from 'lru-memoize';
import { createValidator, required, alphabet } from 'redux-form-fieldarray-validation';

const validate = createValidator({
  firstname: [required, alphabet],
  lastname: [required, alphabet],
  people: {
    name: [required, alphabet],
    value: [required]
  },
});
export default memoize(10)(validate);
