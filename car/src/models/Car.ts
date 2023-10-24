import m from "mongoose";

export interface ICar {
  id: string;
  registrationNumber: string;
  name: string;
  vin: string;
  model: string;
  modelYear: string;
  userId: string;
  chargerId: string;
  batterySize: number;
}

const carSchema = new m.Schema<ICar>({
  registrationNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  vin: {
    type: String,
    required: false,
  },
  model: {
    type: String,
    required: false,
  },
  modelYear: {
    type: String,
    required: false,
  },
  batterySize: {
    type: Number,
    required: false,
  },
  userId: {
    type: String,
    required: false,
  },
  chargerId: {
    type: String,
    required: false,
  },
});

export const Car = m.model<ICar>("Car", carSchema);

carSchema.statics.build = (attrs) => {
  return new Car(attrs);
};
