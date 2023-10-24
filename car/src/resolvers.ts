import { Car, ICar } from "./models/Car";

export const resolvers = {
  Query: {
    cars: async () => {
      console.log("----- XXX CAR RESOLVER - QUERY CARS");
      return await Car.find();
    }
  },
  Car: {
    user(car: ICar) {
      console.log("@@@@@@ CAR RESOLVER - Resolve simple User, Car.user", car);
      return {
        __typename: "User",
        id: car.userId
      };
    },
    charger(car: ICar) {
      console.log("@@@@@@ CAR RESOLVER - Resolve simple Car, Car.charger", car);
      return {
        __typename: "Charger",
        id: car.chargerId
      };
    }
  },
  Mutation: {
    addCar: async (_: undefined, { car }: { car: ICar }) => {
      const c = new Car({
        ...car
      });
      await c.save();
      console.log("----- car", { c });
      return c;
    },
    updateCar: async (_: undefined, { car }: { car: ICar }) => {
      if (car.id === undefined) {
        return car;
      }
      await Car.updateOne({ _id: car.id }, { $set: car });
      const newCar = await Car.findOne({ _id: car.id });
      console.log("---- update", { car, newCar });
      return newCar;
    },
    deleteCar: async (_: undefined, { id }: { id: string }) => {
      await Car.deleteOne({ _id: id });
      return id;
    }
  },
  User: {
    cars: async (user: { id: string }) => {
      console.log("###### CAR RESOLVER - extend User, resolve Car", { user });
      return await Car.find({ userId: user.id });
    }
  },
  Charger: {
    cars: async (charger: { id: string }) => {
      console.log("###### CAR RESOLVER - extend Charger, resolve Car", {
        charger
      });
      return await Car.find({ chargerId: charger.id });
    }
  }
};
