import User from '../../models/User';
import connectToDB from '../../middleware/config';
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
connectToDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            const { email, password } = req.body;
            const u = await User.findOne({ email })
            const bytes = CryptoJS.AES.decrypt(u.password, 'secret123');
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if (u) {
                // console.log(password)
                // console.log(decryptedData)
                if (u.email == email && password == decryptedData) {
                    var token = jwt.sign({ email: u.email, name: u.name }, 'secretkey123');
                    res.status(200).json({ success: true, token })
                }
                else {
                    res.status(401).json({ success: false, error: "Invalid credentials" })
                }
            }
            else {
                res.status(401).json({ success: false, error: "No user found" })
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' })
        }
    }
}
