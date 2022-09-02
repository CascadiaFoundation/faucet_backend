const mongoose = require('mongoose');

const app =  require('./src/app');
const config = require('./src/config');

mongoose.connect(config.mongoose.url).then(() => {
    console.log('Connected to MongoDB');
    app.listen(config.port, () => {
        console.log(`Listening on port ${config.port}`);
    });
}).catch((err) => console.log(err));