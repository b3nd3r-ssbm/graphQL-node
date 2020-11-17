const https = require('https');

let data = {};

let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

function apiReq(url, query, variables = null, authToken = null) {
  if(url.indexOf('/') == -1){
    url += '/';
  }
  if(url.indexOf('https://') != -1) {
    url = url.substring(8);
  }
  console.log(url);
  options.hostname = url.substring(0,url.indexOf('/'));
  options.path = url.substring(url.indexOf('/'));
  data.query = query;
  if(variables != null){
    data.variables = variables;
  }
  if(authToken != null) {
    options.headers.Authorization = "Bearer " + authToken;
  }
  return checkF();
}

function checkF(){
  let check = new Promise((resolve, reject) => {
    const req = https.request(options, res => {
    let data='';
    res.on('data', d => {
    data+=d;
    });
    
    res.on('end', () => {
      resolve(JSON.parse(data));
    });
    });

    req.on('error', error => {
    console.error(error)
    });

    req.write(JSON.stringify(data));
    req.end();
  });
  return check;
}

module.exports = { apiReq };