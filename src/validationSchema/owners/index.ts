import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  business_name: yup.string().nullable(),
  business_type: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
