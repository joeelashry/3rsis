// pages/api/fetchBots.js
export default async function fetchBotsHandler(req, res) {
    if (req.method === 'GET') {
        try {
            const jwtToken = req.headers.authorization;

            const response = await fetch('https://api.juren.tech/openaibots/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                res.status(200).json(data);
            } else {
                res.status(response.status).json({ message: 'Failed to fetch bots.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred while fetching bots.' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
