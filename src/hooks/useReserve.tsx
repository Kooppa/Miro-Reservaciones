import reserveApi from '../api/reserveApi';
import { ReservationRequest } from '../interfaces/reservation';

export const useReserve = () => {

  const reserve = async( request: ReservationRequest ) => {
    try {
      await reserveApi.post('', request);
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    reserve,
  };

};
