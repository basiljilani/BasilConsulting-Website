import { useState, useEffect } from 'react';

const TestConnection = () => {
    const [healthData, setHealthData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/health`);
                const data = await response.json();
                setHealthData(data);
                setError(null);
            } catch (err) {
                setError('Failed to connect to backend');
                console.error('Connection error:', err);
            }
        };

        testConnection();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Backend Connection Test</h2>
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : healthData ? (
                <pre className="bg-gray-100 p-4 rounded">
                    {JSON.stringify(healthData, null, 2)}
                </pre>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default TestConnection;
