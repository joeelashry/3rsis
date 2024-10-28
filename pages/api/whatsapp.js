export default function handler(req, res) {
    if (req.method === 'POST') {
        const { userName, phoneNumber, accessToken, phoneId } = req.body;

        if (!userName || !phoneNumber || !accessToken || !phoneId) {
            return res.status(400).json({ message: 'Invalid data. All fields are required.' });
        }

        if (!/^0(10|11|12)[0-9]{8}$/.test(phoneNumber)) {
            return res.status(400).json({ message: 'Invalid phone number format.' });
        }

        // Mock saving the data
        res.status(200).json({ message: 'Data saved successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
