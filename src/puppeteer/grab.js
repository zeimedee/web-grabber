const puppeteer = require('puppeteer')
 const download = require('downloads-folder')
  const express = require('express')
   const app = express();
    const cors = require('cors')
     const bodyParser = require('body-parser')
  
     app.use(cors());
    app.use(bodyParser.json());
 
 app.post('/grab', async (req,res) => {
    try {
        var browser = await puppeteer.launch({headless: true})
        var page = await browser.newPage();
        await page.goto(req.body.url)
        await page.screenshot({path:`${download()}/ ${req.body.name}.jpeg`})
        console.log('success');
        await browser.close();

        
    } catch (err) {
        console.log(err);
        await browser.close();  
    }

 })

app.listen(4000, ()=>{
    console.log("server running on port 4000");
    
});


// const grab = async (url, name) =>{
        
// }
// export default grab;
//grab('https://www.google.com/', 'alex')
