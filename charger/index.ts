const m = require("mongoose");
const { server } = require("./src/apollo-server");

const start = async () => {
  try {
    await m.connect("mongodb://charger-mongo-srv:27017/chargers");
    console.log("Connected to Mongo - Workorder");
  } catch (err) {
    console.log("----- MONGO Connection error!", err);
  }

  server.listen({ port: 4000 }).then(({ url }: { url: string }) => {
    console.log(`🚀 Charger Server ready at ${url}`);
  });
};

start();
