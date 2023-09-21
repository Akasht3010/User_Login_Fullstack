const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect("mongodb://127.0.0.1:27017/UserLoginSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.error("Error connecting to the database:", err);
});
