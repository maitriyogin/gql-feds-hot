import { server } from "./apollo-gateway";

server
  .listen({
    port: 4003,
    cors: {
      origin: "*", // <- allow request from all domains
      credentials: true,
    },
  })
  .then(({ url }) => {
    console.log(`🚀 ESL Query Gateway XXX ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
