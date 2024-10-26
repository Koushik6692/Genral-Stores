import mongoose, { Model, Schema } from "mongoose";

export interface ICategory{
  name: string;
  description: string;
}

const CategorySchema: Schema<ICategory> = new mongoose.Schema<ICategory>({
  name: { type: String, required: true },
  description: { type: String, required: true },
})

const CategoryModel: Model<ICategory> = mongoose.model<ICategory>('Category',CategorySchema)

export default CategoryModel