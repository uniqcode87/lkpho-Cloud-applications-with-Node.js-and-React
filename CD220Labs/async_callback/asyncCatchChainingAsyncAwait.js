const axios = require('axios').default;

/*
In the following code we try to get list of all book ids from remote url and then based on that make request about each of the 
id. Finally print them all out. We are using axios get, which returns a promise. 
*/
async function connectToURL(url){
    console.log("## 3");
    const resp = await axios.get(url);
    console.log("## 4");
    let listOfWork = resp.data.work;
    let workids = listOfWork.map((work)=>{
          return work.workid
    });
    console.log("## 5");
    workids.forEach(async (workid)=>{
        console.log("## 6");
        const req = await axios.get("https://reststop.randomhouse.com/resources/works/"+workid);
        console.log("## 7");
        console.log(req.data.titleAuth);

    });
    console.log("## 8");
}
console.log("## 1");
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham').catch(err => {
    console.log(err.toString())
});
console.log("## 2");
