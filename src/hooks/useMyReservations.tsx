import { useEffect, useState } from 'react';
import reserveApi from '../api/reserveApi';
import { useReserve } from './useReserve';
import { ReservationRequest } from '../interfaces/reservation';

export const useMyReservations = () => {

  const [ reservations, setReservations ] = useState([] as ReservationRequest[]);
  const [ isLoading, setIsLoading ] = useState( true );

  const { reserve } = useReserve();

  useEffect(() => {
    getMyReservations();
  }, [ reserve ]);

  const getMyReservations = async() => {
    try {
      const { data } = await reserveApi.get('/my-reservations');
      setReservations( data );
    } catch (error) {
      console.log(error);
    }
    setIsLoading( false );
  };

  return {
    reservations,
    isLoading,
  };
};
