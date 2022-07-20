import Product from '../../models/Product';
import connectToDB from '../../middleware/config';
connectToDB();
export default async function handler(req, res) {
    if (req.method == 'POST') {
        try {
            for (let i = 0; i < req.body.length; i++) {
                const { title, slug, desc, img, category, size, color, price, availableQty } = req.body[i];
                const p = new Product({ title, slug, desc, img, category, size, color, price, availableQty });
                await p.save();
            }
            res.status(200).json({ success: 'Success' })
        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Internal server error' })
        }
    }
}
