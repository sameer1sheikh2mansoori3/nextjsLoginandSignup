import mongoose from 'mongoose'
import db_name from '@/constant/Constant'
const dbConnect = async () => {

    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)
        const connect = mongoose.connection;
        connect.on('connection', () => {
            console.log(`we are connected db`)
        })
        connect.on('error', (err) => {
            console.log(`error bhail in db `, { err })
        })
    }
    catch (error) {
        console.log('Something goes wrong! in db');
        console.log(error);
    }
}