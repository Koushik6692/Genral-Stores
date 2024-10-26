import mongoose, { Document, Model, Schema } from "mongoose";

export interface Iproduct extends Document{
  name: string;
  description: string;
  price: number;
  category_id: mongoose.Types.ObjectId;
  stock_quantity:number
  image:string;
}

const ProductSchema: Schema<Iproduct> = new mongoose.Schema<Iproduct>({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  category_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  stock_quantity:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  }
  
},{timestamps:true})

const ProductModel:Model<Iproduct> = mongoose.model<Iproduct>('Product',ProductSchema)

export default ProductModel