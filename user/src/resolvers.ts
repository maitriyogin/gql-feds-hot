import { IUser, User } from "./models/User";

export const resolvers = {
  Query: {
    users: async () => {
      console.log("----- USER RESOLVER - QUERY USERS");
      return await User.find();
    }
  },
  Mutation: {
    addUser: async (_: undefined, { user }: { user: IUser }) => {
      const u = new User({
        ...user
      });
      await u.save();
      return u;
    },
    updateUser: async (_: undefined, { user }: { user: IUser }) => {
      if (user.id === undefined) {
        return user;
      }
      await User.updateOne({ id: user.id }, { $set: user });
      const newUser = await User.findOne({ _id: user.id });
      return newUser;
    },
    deleteUser: async (_: undefined, { id }: { id: string }) => {
      await User.deleteOne({ id });
      return id;
    }
  },
  User: {
    __resolveReference: async (reference: IUser) => {
      console.log("####### USER RESOLVER - Resolve User", reference);
      return await User.findOne({ _id: reference.id });
    }
  }
};
