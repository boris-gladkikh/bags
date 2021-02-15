import axios from 'axios';
// import nodemailer from 'nodemailer';


  
  export const submitEmailData = async(dataObject) => {
    const headers =  {"Content-Type": "application/x-www-form-urlencoded" };

    const encode = (data) => {
      return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
    }
    const encodedData = encode({"form-name": "contact-form", ...dataObject});
    try{
    const res = await axios.post("/", encodedData,{headers});
    return res.data;
    } catch (err){
      console.error(err);
    }
  };
  






