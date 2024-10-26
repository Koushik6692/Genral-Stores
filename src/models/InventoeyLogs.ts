import mongoose, { Model, Schema } from "mongoose";

export interface InventoryLogs{
  product_id: mongoose.Types.ObjectId;
  quantity: number;
  change_type:string;
  date:Date;
}

const InventoryLogsSchema: Schema<InventoryLogs> = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: 'Product', required:true },
  quantity: { type: Number, required:true },
  change_type: { type: String, required:true },
  date:{type: Date, default:Date.now}
},{timestamps:true}) 

const InventoryLogsModel: Model<InventoryLogs> = mongoose.model<InventoryLogs>('InventoryLog',InventoryLogsSchema)

export default InventoryLogs
