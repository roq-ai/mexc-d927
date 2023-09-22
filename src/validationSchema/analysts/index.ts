import * as yup from 'yup';

export const analystValidationSchema = yup.object().shape({
  name: yup.string().required(),
  experience: yup.number().integer().nullable(),
  specialization: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
