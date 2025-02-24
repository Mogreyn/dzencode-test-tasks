import { ConvertCurrencyProps } from '@/types/convertCurrency.types';

const convertCurrency = (price: ConvertCurrencyProps['price']) => {
  return (price * 42).toFixed(2);
};

export default convertCurrency;
