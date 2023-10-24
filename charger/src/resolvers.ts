import { Charger, ICharger } from "./models/Charger";

export const resolvers = {
  Query: {
    chargers: async () => {
      return await Charger.find();
    }
  },
  Mutation: {
    addCharger: async (_: undefined, { charger }: { charger: ICharger }) => {
      const c = new Charger({
        ...charger
      });
      await c.save();
      console.log("----- charger", { c });
      return c;
    },
    updateCharger: async (_: undefined, { charger }: { charger: ICharger }) => {
      if (charger.id === undefined) {
        return charger;
      }
      console.log("---- update", { charger });
      await Charger.updateOne({ _id: charger.id }, { $set: charger });
      const newCharger = await Charger.findOne({ _id: charger.id });
      return newCharger;
    },
    deleteCharger: async (_: undefined, { id }: { id: string }) => {
      await Charger.deleteOne({ _id: id });
      return id;
    }
  },
  User: {
    chargers: async (user: { id: string }) => {
      return await Charger.find({ userId: user.id });
    }
  },
  Charger: {
    user(charger: ICharger) {
      console.log("@@@@@@ Charger.user", charger);
      return {
        __typename: "User",
        id: charger.userId
      };
    },
    __resolveReference: async (reference: ICharger) => {
      console.log("####### Resolve Charger", reference);
      return await Charger.findOne({ _id: reference.id });
    }
  }
};
