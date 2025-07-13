import { OptionsInterface } from "./interfaces";

export const ProductOptions: OptionsInterface[] = [
	{value: 'Passenger Lift'},
	{value: 'Cargo Lift'},
	{value: 'Hospital Lift'},
	{value: 'Capsule Lift'},
	{value: 'Escalator'},
	{value: 'Dumbwaiter'},
	{value: 'Generator'},
	{value: 'Other'}
]

export const WorkOptions: OptionsInterface[] = [
	{value: 'Full Project'},
	{value: 'Servicing'},
	{value: 'Installation'},
	{value: 'Repair'}
];

export const PassengerLoadOptions: OptionsInterface[] = [
  {value: '6/350'},
  {value: '8/480'},
  {value: '10/600'}
]

export const CargoLoadOptions: OptionsInterface[] = [
  {value: '500'},
  {value: '1000'},
  {value: '1500'}
]