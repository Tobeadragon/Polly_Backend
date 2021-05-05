/** Mongoose Modul importieren  */
const mongoose = require("mongoose");
/** simpler Adressstring: Protokoll ://  Host : Port / Datenbank  */
let addressString = process.env.mongo || "mongodb+srv://elham:premnitz78@cluster0.55otw.mongodb.net/PollDB";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };
const verbindeDB = () => {
    /** Verbindung für das Mongoose Modul herstellen mit connect */
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("mit PollDB verbunden");
        //console.log("Bin mit der Datenbank verbunden", mongooseModul);
    } ).catch( (fehler) => {
        console.error("Fehler mit MongoDB: "+fehler);
    } );
}
module.exports = verbindeDB;