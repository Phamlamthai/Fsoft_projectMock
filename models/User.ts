// import { Schema, model } from "mongoose";
// import mongoose from "mongoose";

// // Interface for User document
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   role: string;
//   image: string;
//   emailVerified: boolean;
//   defaultPaymentMethod: string;
//   address: Address[];
//   wishlist: Wishlist[];
// }

// // Interface for Address within User
// interface Address {
//   firstName?: string;
//   lastName?: string;
//   phoneNumber?: string;
//   address1?: string;
//   address2?: string;
//   city?: string;
//   zipCode?: string;
//   state?: string;
//   country?: string;
//   active?: boolean;
// }

// // Interface for Wishlist within User
// interface Wishlist {
//   product: mongoose.Schema.Types.ObjectId; // Reference to Product model
//   style?: string;
// }

// const addressSchema = new Schema<Address>({
//   firstName: String,
//   lastName: String,
//   phoneNumber: String,
//   address1: String,
//   address2: String,
//   city: String,
//   zipCode: String,
//   state: String,
//   country: String,
//   active: { type: Boolean, default: false },
// });

// const wishlistSchema = new Schema<Wishlist>({
//   product: { type: Schema.Types.ObjectId, ref: "Product" },
//   style: String,
// });

// const userSchema = new Schema<User>(
//   {
//     name: { type: String, required: "Please enter your full name." },
//     email: {
//       type: String,
//       required: "Please enter your email address.",
//       trim: true,
//       unique: true,
//     },
//     password: { type: String, required: '"Please enter a password.' },
//     role: { type: String, default: "user" },
//     image: {
//       type: String,
//       default:
//         "https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png",
//     },
//     emailVerified: { type: Boolean, default: false },
//     defaultPaymentMethod: { type: String, default: "" },
//     address: [addressSchema],
//     wishlist: [wishlistSchema],
//   },
//   { timestamps: true }
// );

// const User = model<User>("User", userSchema);

// export default User;
