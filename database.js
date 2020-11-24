const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/newproject",{ useNewUrlParser: true ,useUnifiedTopology: true} )
.then (  () => console.log("connection successfull"))
.catch((err) =>console.log(err));

const foodlistSchema = new mongoose.Schema({
    id : Number,
    Dish : String,
    fooddescription: String
})
const Foodlist = new mongoose.model("Foodlist",foodlistSchema);

const createDocument = async ()=> {
    try{
 const pizzaFoodlist = new Foodlist ({
        "id":1,
        "Dish":" Pizza ",
        "fooddescription": "Pizza Vegetarian"
    })

    const pastaFoodlist = new Foodlist ({
        "id":2,
        "Dish":" pasta ",
        "fooddescription": "pasta Vegetarian"
    })
    const noodlesFoodlist = new Foodlist ( {
        "id":3,
        "Dish":" Noodles ",
        "fooddescription":" Noodles Vegetarian"
    })
    const manchurianFoodlist = new Foodlist ({
        "id" :4,
        "Dish":" Manchurian ",
        "fooddescription":"manchurian Vegetarian"
    })
    const frenchfriesFoodlist = new Foodlist ({
        "id": 5,
        "Dish":" frenchfries ",
        "fooddescription":"frenchfries Vegetarian"
    })
    const result = await Foodlist.insertMany([pizzaFoodlist,pastaFoodlist,noodlesFoodlist,manchurianFoodlist,frenchfriesFoodlist])
    console.log(result);
 } catch(err){
    console.log(err);
   }
}

createDocument();