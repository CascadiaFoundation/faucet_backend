
const https = require('https');
var querystring = require('querystring');



const addResponse = async (req, res) => {
    var options = {
        hostname: `docs.google.com`,
        port: 443,
        method: 'POST',
        path: `/forms/u/0/d/e/1FAIpQLSe4OMPGWv0cJkJOuzlwHMwolfwsxJkcw9HDG80OdUCheJ722Q/formResponse?entry.256690603=pppp@gmail.com`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    };

    var post_data = querystring.stringify({

    });

    var new_req = https.request(options, (res) => {
        // console.log('statusCode:', res);
        res.on('data', (d) => {
            console.log("res12");
        });
    });

    new_req.on('error', (e) => {
        console.error(e);
    });

    new_req.write(post_data);
    new_req.end();

    res.status(200).send({
        message: "Email Added!"
    });
};


module.exports = {
    addResponse,
}