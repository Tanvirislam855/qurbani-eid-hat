
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import dns, { setDefaultResultOrder } from "dns";
// import { setDefaultAutoSelectFamily } from "net";
// dns.setDefaultResultOrder(ipv4first);
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("qurbani-eid-hat");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID  ,
          clientsecret: process.env.GOOGLE_CLIENT_SECRET 
        }
      }
});