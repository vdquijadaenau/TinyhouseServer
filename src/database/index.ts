import {MongoClient} from "mongodb";
import {Database, User, Listing, Booking} from "../lib/types";


const url = `mongodb+srv://${process.env.USER}:${process.env.USER_PASSWORD}@${process.env.CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
export const connectDatabase = async (): Promise<Database> => {

        const client = await MongoClient.connect(url, options);

        const db = client.db(process.env.DBNAME);
        return {
            bookings: db.collection<Booking>("bookings"),
            listings: db.collection<Listing>("listings"),
            users: db.collection<User>("users")
        };

};

