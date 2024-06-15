import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    age: Number
})

const UserCollection = model("user", UserSchema)
export default UserCollection;