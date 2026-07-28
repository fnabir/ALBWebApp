import { OptionsInterface } from "./interfaces";

export const ProductOptions: OptionsInterface[] = [
  { value: "Passenger Lift" },
  { value: "Cargo Lift" },
  { value: "Hospital Lift" },
  { value: "Capsule Lift" },
  { value: "Escalator" },
  { value: "Dumbwaiter" },
  { value: "Generator" },
  { value: "Other" },
];

export const WorkOptions: OptionsInterface[] = [
  { value: "Full Project" },
  { value: "Servicing" },
  { value: "Installation" },
  { value: "Repair" },
];

export const PassengerLoadOptions: OptionsInterface[] = [
  { value: "6/450", label: "6 Persons/450 Kgs." },
  { value: "8/550", label: "8 Persons/550 Kgs." },
  { value: "9/600", label: "9 Persons/600 Kgs." },
  { value: "10/700", label: "10 Persons/700 Kgs." },
  { value: "11/750", label: "11 Persons/750 Kgs." },
  { value: "13/900", label: "13 Persons/900 Kgs." },
  { value: "15/1000", label: "15 Persons/1000 Kgs." },
  { value: "17/1150", label: "17 Persons/1150 Kgs." },
  { value: "20/1350", label: "20 Persons/1350 Kgs." },
  { value: "24/1600", label: "24 Persons/1600 Kgs." },
];

export const CargoLoadOptions: OptionsInterface[] = [
  { value: "1000", label: "1000 Kgs." },
  { value: "2000", label: "2000 Kgs." },
  { value: "3000", label: "3000 Kgs." },
  { value: "5000", label: "5000 Kgs." },
];
