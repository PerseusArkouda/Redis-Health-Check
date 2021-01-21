const bytes = require('bytes');
const request = require('request');

function getWebdisInfo(args) {

  const critical = args.critical || "15GB";
  const warning = args.warning || "5GB";
  const host = args.host;
  const port = args.port;
  const username = args.username;
  const password = args.password;
    
  if (!host){
    console.log('missing webdis host');
    //getOpt.showHelp();
    //process.exit(3);
  }

  const url = `http://${host}:${port}/info`;
  const auth = "Basic " + new Buffer.from(username + ":" + password).toString("base64");

  request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        if (error){
          alert(error);
          //process.exit(3);
        }

        var data = JSON.parse(body);
        const usedMemory = parseInt(data.info.used_memory_peak);

        if (usedMemory >= bytes(critical)){
          alert(`CRITICAL redis memory usage ${bytes(usedMemory)} threshold: ${critical}`)
          //process.exit(2)
        }
        else if (usedMemory >= bytes(warning)){
          alert(`WARNING redis memory usage ${bytes(usedMemory)} threshold: ${warning}`)
          //process.exit(1)
        }
        else {
          alert(`OK redis memory usage ${bytes(usedMemory)}`)
        }
    }
  );
}