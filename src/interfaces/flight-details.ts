export interface FlightDetails {
  flightNumber: string;
  origin: string;
  destination: string;
  departureTime: Date;
  arrivalTime: Date;
  isOutbound?: boolean;
  price: number;
}
