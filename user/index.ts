import m from "mongoose"
import { server } from './src/apollo-server'

const start = async () => {
  try {
    await m.connect("mongodb://user-mongo-srv:27017/users");
    console.log("Connected to Mongo - Users");
  } catch (err) {
    console.log("----- MONGO Connection error!", err);
  }

  server.listen({port: 4002}).then(({ url }: {url:string}) => {
    console.log(`🚀 User Server ready at ${url}`);
  });

};

start();


