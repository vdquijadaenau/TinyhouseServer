import {IResolvers} from "apollo-server-express";
import {Database, Listing} from "../../../lib/types";
import {FindAndModifyWriteOpResultObject, ObjectId} from "mongodb";



export const listingResolvers: IResolvers = {
    Query: {
        listings: async (_root: undefined, _args: {}, {db}: { db: Database }): Promise<Listing[]> => {
            return await db.listings.find({}).toArray();
        }
    },
    Mutation: {
        deleteListing: async (_root: undefined, {id}: { id: string }, {db}: { db: Database }): Promise<Listing> => {

            const deleteRes:FindAndModifyWriteOpResultObject<Listing> = await db.listings.findOneAndDelete({_id: new ObjectId(id)});

            if (deleteRes.value===null) {
                throw new Error("failed to delete listing");
            }
            return deleteRes.value!;

        }
    },
    Listing: {
        id: (listing: Listing) => listing._id.toString()
    }
};