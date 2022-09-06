const axios = require('axios').default;
const connectToURL = async(url)=>{
    const outcome = axios.get(url);
    console.log("before await");
    let listOfWork = (await outcome).data.work;
    console.log("after await");
    listOfWork.forEach((work)=>{
      console.log(work.titleAuth);
    });
}

console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err=>console.log(err.toString()));
console.log("After connect URL")