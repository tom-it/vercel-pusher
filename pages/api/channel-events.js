const Channels = require('pusher');

const channels = new Channels({
    appId : '1565295',
    key : '105a23cb70c7843e3a00',
    secret: '30f65df9044563a2b21c',
    cluster: 'us2',
});

module.exports = async (req, res) => {

    const data = req.body;
    let result = await channels.trigger('redirect_22', 'redirect', data);

    console.log(result);

    res.status(200).end("ok");
};