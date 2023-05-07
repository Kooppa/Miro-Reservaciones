/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import reserveApi from '../api/reserveApi';
import { AvailableHoursResponse } from '../interfaces/reservation';

export const useAvailability = ( date: string ) => {

  const [ isLoading, setIsLoading ] = useState(true);
  const [ isError, setIsError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(null as string | null);
  const [ availableHours, setAvailableHours ] = useState(null as AvailableHoursResponse | null);

  useEffect(() => {
    getAvailability();
  }, []);

  const getAvailability = async() => {
    try {
      setIsError( false );
      setErrorMessage( null );
      const { data } = await reserveApi.get<AvailableHoursResponse>(`/available-hours/${ date }`);
      setAvailableHours( data );
    } catch ( error ) {
      setIsError( true );
      if ( axios.isAxiosError( error ) ) {
        const { detail } = error.response?.data as any;
        setErrorMessage(detail || 'Ha ocurrido un error');
      } else {
        setErrorMessage('Ha ocurrido un error');
      }
    }
    setIsLoading( false );
  };

  return {
    getAvailability,
    isLoading,
    availableHours,
    isError,
    errorMessage,
  };

};
