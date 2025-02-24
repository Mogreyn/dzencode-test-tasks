import formatDate from './formatDate';
import { fetchDataProps } from '@/types/fetchData.types';
import { StoreCardProps } from '@/types/StoreCard.types';
import { API } from '@/config/constants';

export const fetchData = async (): Promise<StoreCardProps[]> => {
  const response = await fetch(API);
  const data: fetchDataProps[] = await response.json();

  const formattedData = data.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
    sellDate: formatDate(item.sellDate),
    serial: item.serial,
  }));

  return formattedData;
};
