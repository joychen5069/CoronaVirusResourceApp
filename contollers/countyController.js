const axios = require ("axios");

module.exports = {
  
    county: function(res){
        axios({
            url: 'https://corona.azure-api.net/country/us/North%20Carolina/wake',
            method: 'GET',
        })
            .then(response => {
              console.log('respons', response);
              
            })
            
}}

