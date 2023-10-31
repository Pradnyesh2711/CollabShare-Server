import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `mmongodb+srv://pradnyeshjain:Pradnyesh2711@cluster0.tkkyolo.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;