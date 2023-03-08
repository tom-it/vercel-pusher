const Channels = require('pusher');

const {
    APP_ID: appId,
    KEY: key,
    SECRET: secret,
    CLUSTER: cluster,
} = process.env;


console.log("setup pusher channel");
console.log(appId);
console.log(key);
console.log({
    appId,
    key,
    secret,
    cluster,
});
const channels = new Channels({
    appId,
    key,
    secret,
    cluster,
});

module.exports = (req, res) => {


    const data = req.body;
    channels.trigger('redirect_22', 'redirect', data, () => {
        res.status(200).end('sent event successfully');
    });
};