const mongoose=require('mongoose')

//mongoose.connect('mongodb://localhost:27017/Techokids',{
    console.log(process.env.URL)
mongoose.connect('mongodb+srv://vish:vish@cluster0.bdsio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
},(errror,client)=>{
    if(errror)
    return console.log('unable to connect through mongoose',error)
    console.log('connected to mongoose')
})