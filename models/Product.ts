import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces';


const productSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
    images: [{ type: String }],
    price: { type: Number, required: true, default: 0 },
}, {
    timestamps: true
});



const Product: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);


export default Product;


