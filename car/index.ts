const m = require("mongoose");
const { server } = require("./src/apollo-server");

const start = async () => {
  try {
    await m.connect("mongodb://car-mongo-srv:27017/cars");
    console.log("Connected to Mongo - Cars");
  } catch (err) {
    console.log("----- Car MONGO Connection error!", err);
  }

  server.listen({ port: 4001 }).then(({ url }: { url: string }) => {
    console.log(`🚀 Car Server ready at ${url}`);
  });
};

start();
