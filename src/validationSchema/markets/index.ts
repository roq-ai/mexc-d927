import * as yup from 'yup';

export const marketValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().nullable(),
  opening_hours: yup.date().nullable(),
  closing_hours: yup.date().nullable(),
});
