import m from "mongoose";

export interface ICharger {
  id: string;
  serialNumber: string;
  vendor: string;
  productName: string;
  color: string;
  status: string;
  userId: string;
}

const chargerSchema = new m.Schema<ICharger>({
  serialNumber: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: false,
  },
  productName: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  userId: {
    type: String,
    required: false,
  },
});

export const Charger = m.model<ICharger>("Charger", chargerSchema);

chargerSchema.statics.build = (attrs) => {
  return new Charger(attrs);
};
