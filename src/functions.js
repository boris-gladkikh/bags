import axios from 'axios';
import nodemailer from 'nodemailer';
const headers =  {"Content-Type": "application/x-www-form-urlencoded" };

const functions = () => {
  
  const submitEmailData = async(data) => {
    try{
    const res = await axios.post("/", data,{headers});
    return res.data;
    } catch (err){
      console.error(err);
    }
  };
  


  return {
    submitEmailData,
  }
};

export default functions





