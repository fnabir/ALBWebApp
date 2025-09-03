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
  {value: '6/450'},
  {value: '8/550'},
  {value: '9/600'},
  {value: '10/700'},
  {value: '11/750'},
  {value: '13/900'},
  {value: '15/1000'},
  {value: '17/1150'},
  {value: '20/1350'},
  {value: '24/1600'},
]

export const CargoLoadOptions: OptionsInterface[] = [
  {value: '1000'},
  {value: '2000'},
  {value: '3000'},
  {value: '5000'},
]