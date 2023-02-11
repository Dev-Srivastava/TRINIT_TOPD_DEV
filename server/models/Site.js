import mongoose from "mongoose";
 
const SiteSchema = new mongoose.Schema(
    {
        {
            url: {
               type: String,
            },
            
            bytesTransferred{
   type: Number,
            },
   
            isGreenHost{
               type: Boolean,
            },
   
            co2PerPageview{
                type: Nummber,
            },
             
    
)