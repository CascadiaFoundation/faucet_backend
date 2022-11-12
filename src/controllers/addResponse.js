const https = require('https');

const addResponse = async (req, res) => {
    //cascadia google form
    const formActionUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-RigSgGw9OE62aHuGaS23xGaDgFXrQXTce7GNnUzyaoROUA/formResponse';
    const nameField = 'entry.544324070';
    //carl google form
    // const formActionUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfEHHUCsufkAK_NS5xGN-flJY6HZajBWaRhBbcdYqs2fGpFQQ/formResponse';
    // const nameField = 'entry.1524535970';

    const url = `${formActionUrl}?${nameField}=${req.body.emailAddress}`;

    const request = https.request(url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data = data + chunk.toString();
        });

        response.on('end', () => {
            // const body = JSON.parse(data);
            // console.log(body);
        });
    })

    request.on('error', (error) => {
        console.log('An error', error);
    });

    request.end()

    res.status(200).send({
        message: "Email Added!"
    });

};

module.exports = {
    addResponse,
}