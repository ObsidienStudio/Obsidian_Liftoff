import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '006256fba5595640e08c3a50d90a4ffd32789fbb', queries });
export default client;
  