export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;

        if (name && email && password) {  // Validate all fields are filled
            return res.status(201).json({ token: 'mock-token' });  // Replace with actual token generation
        } else {
            return res.status(400).json({ message: 'Invalid data' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
