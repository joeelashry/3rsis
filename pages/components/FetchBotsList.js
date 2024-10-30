import React, { useEffect, useState } from 'react';

const FetchBotsList = () => {
    const [bots, setBots] = useState([]); // State to hold the list of bots
    const [message, setMessage] = useState(''); // State to hold any messages (errors or info)

    const fetchBots = async () => {
        const jwtToken = localStorage.getItem('access'); // Retrieve JWT token from local storage

        if (!jwtToken) {
            setMessage('Authorization token not found. Please log in.');
            return;
        }

        try {
            const response = await fetch('https://api.juren.tech/openaibots/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`, // Include JWT in the header
                },
            });

            const rawResponse = await response.text(); // Read the response as text
            console.log('Raw Response:', rawResponse); // Log raw response to see what's coming back

            if (!response.ok) {
                console.error('Fetch failed:', response.status, rawResponse);
                setMessage(`Failed to load bots. Status: ${response.status} - ${rawResponse}`);
                return;
            }

            // Check if the response looks like HTML (i.e., if it starts with "<")
            if (rawResponse.startsWith('<')) {
                console.error("Received HTML response:", rawResponse);
                setMessage('Unexpected server response. Please try again.');
                return;
            }

            // Attempt to parse the raw response as JSON
            let data;
            try {
                data = JSON.parse(rawResponse); // Parse the response as JSON
            } catch (jsonError) {
                console.error("Error parsing JSON:", jsonError);
                setMessage('Unexpected server response. Please try again.');
                return;
            }

            console.log("Fetched Data:", data);
            // Assuming data is an array of bots with structure like { id, name, instructions, extra_info }
            const formattedBots = data.map(bot => ({
                id: bot.id,
                name: bot.name,
                instructions: bot.instructions,
                extra_info: bot.extra_info,
            }));

            setBots(formattedBots); // Store the fetched data
        } catch (error) {
            console.error("An error occurred while fetching bots:", error);
            setMessage('An error occurred while fetching bots.');
        }
    };

    useEffect(() => {
        fetchBots(); // Fetch bots on component mount
    }, []);

    return (
        <div>
            <h2>Registered Bots</h2>
            {message && <p>{message}</p>} {/* Display message if exists */}
            <ul>
                {bots.length > 0 ? ( // Check if there are any bots
                    bots.map((bot) => (
                        <li key={bot.id}>
                            <h3>{bot.name}</h3>
                            <p>Instructions: {bot.instructions}</p>
                            <p>Extra Info: {bot.extra_info}</p>
                        </li>
                    ))
                ) : (
                    <p>No bots registered.</p> // Message if no bots are found
                )}
            </ul>
        </div>
    );
};

export default FetchBotsList;
