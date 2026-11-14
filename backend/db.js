require("dotenv").config();
const mysql=require("mysql2");
module.exports=mysql.createPool({host:process.env.DB_HOST||"localhost",port:Number(process.env.DB_PORT||3306),user:process.env.DB_USER||"root",password:process.env.DB_PASSWORD||"",database:process.env.DB_NAME||"management_kue_rifky",charset:"utf8mb4",waitForConnections:true,connectionLimit:5,queueLimit:0,ssl:process.env.DB_SSL==="true"?{minVersion:"TLSv1.2"}:undefined});
