export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        
        if (email === 'user@example.com' && password === 'password') {  // Mock check; replace with actual logic
            return res.status(200).json({ token: 'mock-token' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
