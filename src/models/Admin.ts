import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAdmin extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

const AdminSchema: Schema<IAdmin> = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'superadmin'], default: 'admin' }
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

const AdminModel: Model<IAdmin> = mongoose.model<IAdmin>('Admin', AdminSchema);
export default AdminModel;
