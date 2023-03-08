const Channels = require('pusher');

const {
    APP_ID: appId,
    KEY: key,
    SECRET: secret,
    CLUSTER: cluster,
} = process.env;


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