import m from "mongoose";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  age: number;
  nationalSecurity: string;
  dogname: string;
}

const userSchema = new m.Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  nationalSecurity: {
    type: String,
    required: false,
  },
  dogname: {
    type: String,
    required: false,
  },
});

export const User = m.model<IUser>("User", userSchema);

userSchema.statics.build = (attrs) => {
  return new User(attrs);
};
