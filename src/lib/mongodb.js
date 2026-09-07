import mongoose from "mongoose";

const db = async() => {

    if (mongoose.connection.readyState !== 1) {

        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("Exist"))
        .catch((e) => console.log(e))

   }
}

export default db