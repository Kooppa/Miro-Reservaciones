export interface ReservationDate {
  dateString: string;
  day: number;
  month: number;
  year: number;
}
export interface AvailableHoursResponse {
  day:            string;
  availableHours: AvailableHour[];
}

export interface AvailableHour {
  startTime: string;
  endTime:   string;
}

export interface Confirmation {
  startTime: string;
  endTime:   string;
  day:       number;
  monthName: string;
}

export interface ReservationRequest {
  startTime: string;
  endTime:   string;
  day:       string;
}
