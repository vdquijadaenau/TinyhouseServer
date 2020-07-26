require("dotenv").config();

import {connectDatabase} from "../src/database";
import {listings} from "./seedListing";
import {users} from "./seedUsers";

const seed = async () => {
    try {
        console.log(`[seed] : running...`);

        // const db = await connectDatabase();
        // listings.forEach(async (listing) => {
        //     await db.listings.insertOne(listing);
        // });
        //
        // users.forEach(async (user) =>{
        //     await db.users.insertOne(user);
        // })
        console.log(`[seed] : success`);
    } catch (e) {
        throw new Error("failed to seed database");
    }
};


seed()