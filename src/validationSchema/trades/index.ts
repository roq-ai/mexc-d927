import * as yup from 'yup';

export const tradeValidationSchema = yup.object().shape({
  trade_type: yup.string().required(),
  trade_date: yup.date().required(),
  quantity: yup.number().integer().nullable(),
  price: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  market_id: yup.string().nullable().required(),
});
