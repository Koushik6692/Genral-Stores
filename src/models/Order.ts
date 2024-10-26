import mongoose, { Model, Schema } from "mongoose";

interface OrderItem{
  product_id  : mongoose.Types.ObjectId;
  quantity    : number;
  price       : number;
}

export interface IOrder{
  user_id : mongoose.Types.ObjectId;
  order_date: Date;
  status:string;
  total_amount: number;
  items: OrderItem[];
}

const OrderItemSchema: Schema<OrderItem> = new Schema<OrderItem>({
  product_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true 
   },
   quantity:{
    type: Number,
    required: true
    },
    price:{
      type: Number,
      required: true
      }
})

const OrderSchema: Schema<IOrder> = new Schema<IOrder>({
  user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
    },
    order_date:{
      type: Date,
      default: Date.now
    },
    status:{
      type: String,
      enum: ['pending', 'shipped', 'delivered'],
      required:true,
    },
    total_amount:{
      type: Number,
      required:true
      },
      items:{
        type: [OrderItemSchema],
        required:true,
      }
},{timestamps: true})

const OrderModel:Model<IOrder> = mongoose.model<IOrder>('Order',OrderSchema)

export default OrderModel