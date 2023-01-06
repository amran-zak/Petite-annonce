import mongoose from 'mongoose';
import config from 'config';

const dbUrl = `mongodb+srv://${config.get('userName')}:${config.get('dbPass')}@${config.get('dbName')}.wdjryvj.mongodb.net/?retryWrites=true&w=majority`;

//console.log(dbUrl);
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(dbUrl);
        console.log('Database connected...');
    } catch (error: any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;