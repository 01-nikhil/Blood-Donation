import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DonationHistory = () => {
    const [donations, setDonations] = useState([]);
    const user = useSelector((state) => state.users); // Assuming you have a user state

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch('http://localhost:5000/donors'); // Adjust URL if needed
                const data = await response.json();
                setDonations(data); // Assuming the API returns an array of donations
            } catch (error) {
                console.error("Error fetching donations:", error);
            }
        };

        fetchDonations();
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <h1 className="text-3xl font-bold text-center mb-6">Your Donation History</h1>
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                {donations.length === 0 ? (
                    <p className="text-center text-gray-500">No donations found.</p>
                ) : (
                    donations.map((donor) => (
                        <div key={donor.id} className="border-b border-gray-300 py-4">
                            <h2 className="text-xl font-semibold">{donor.name}</h2>
                            <p className="text-gray-600">Email: {donor.email}</p>
                            <p className="text-gray-600">Blood Type: {donor.bloodType}</p>
                            <p className="text-gray-600">Message: {donor.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DonationHistory;