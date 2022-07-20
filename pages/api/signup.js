import User from '../../models/User';
import connectToDB from '../../middleware/config';
var CryptoJS = require("crypto-js");
connectToDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const {name,email,password} = req.body;
            const u = new User({name,email,password:CryptoJS.AES.encrypt(JSON.stringify(password), 'secret123').toString()});
            await u.save()
            res.status(200).json({ success: 'Success' })
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Internal server error' })
        }
    }
}
