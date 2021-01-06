const mongoose = require('mongoose')

module.exports = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/biz2credit",
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log("Data Base Connected")
    } catch (error) {
        console.log(error.message)
    }
}
