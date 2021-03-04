const page = require('./testData');
const fetch = require('node-fetch');

module.exports = {
  getPage: async(pageInput) => {
      // console.log("The pageInput is: ", pageInput);
      try{
        let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=10');
        let data = await response.json();
        if(data.errors){
          throw data.errors[0].message;
        }else{
          // console.log("DATA: ", data);
          let page = {
            id: Date.now(),
            images: data.map(image => ({src: image.url, width: image.width, height: image.height})),
            page: 1,
            total: data.length
          }
          return page;
        }
      }catch(error){
        throw error;
      }
  }
};