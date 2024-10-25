import mongoose, { Document, Model, Schema } from "mongoose"


interface Adress extends Document{
  street: string;
  city:string;
  state:string;
  zip:string;
}

export interface IUser extends Document {
    name: string,
    email: string ,
    password: string,
    address: Adress;
    contact_number: string;
}


const AdressSchema:Schema<Adress> = new mongoose.Schema({
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zip: {type: String, required: true},
})
const UserSchema: Schema<IUser> = new mongoose.Schema({
  name: { type: String, required: true },
  email:{type: String ,required:true},
  password: { type: String, required: true },
  address: { type: AdressSchema, required: true },
  contact_number:{ type: String, required: true },
},{timestamps: true})

const UserModel:Model<IUser> = mongoose.model<IUser>('User',UserSchema)

export default  UserModel