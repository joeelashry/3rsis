// pages/api/addBot.js
export default async function addBotHandler(req, res) {
    if (req.method === 'POST') {
        try {
            const { name, instructions, extra_info } = req.body;
            const jwtToken = req.headers.authorization;

            const response = await fetch('https://api.juren.tech/openaibots/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`,
                },
                body: JSON.stringify({ name, instructions, extra_info }),
            });

            if (response.ok) {
                const data = await response.json();
                res.status(200).json(data);
            } else {
                res.status(response.status).json({ message: 'Failed to register bot.' });
            }
        } catch (error) {
            res.status(500).json({ message: 'An error occurred during bot registration.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
