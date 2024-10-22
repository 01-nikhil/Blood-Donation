import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bloodType: '',
        message: ''
    });
    const [donors, setDonors] = useState([]);
    const [selectedDonorId, setSelectedDonorId] = useState(null); // Track selected donor for updating

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedDonorId) {
                // Update existing donor
                await axios.put(`http://localhost:5000/donors/${selectedDonorId}`, formData);
                setSelectedDonorId(null); // Reset selected donor
            } else {
                // Create new donor
                await axios.post('http://localhost:5000/donors', formData);
            }
            setFormData({ name: '', email: '', bloodType: '', message: '' });
            fetchDonors(); // Refresh donor list after submission
        } catch (error) {
            console.error("There was an error submitting the form!", error);
        }
    };

    const fetchDonors = async () => {
        try {
            const response = await axios.get('http://localhost:5000/donors');
            setDonors(response.data);
        } catch (error) {
            console.error("There was an error fetching donors!", error);
        }
    };

    const handleUpdate = (donor) => {
        setFormData(donor); // Set form data to the selected donor's data
        setSelectedDonorId(donor.id); // Set selected donor ID for updating
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/donors/${id}`);
            fetchDonors(); // Refresh donor list after deletion
        } catch (error) {
            console.error("There was an error deleting the donor!", error);
        }
    };

    useEffect(() => {
        fetchDonors(); // Fetch donors on component mount
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1 className="text-2xl font-bold text-red-600">Donate Now!</h1>
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-red-500">Home</a></li>
                        <li><a href="/about" className="hover:text-red-500">About</a></li>
                        <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                    </ul>
                </div>
            </nav>

            {/* Donation Drive Information */}
            <section className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-4">Join a Blood Donation Drive</h2>
                <p className="text-center mb-6">Your donation can save lives! Find a drive near you and make a difference.</p>
                {/* Displaying Donor List */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {donors.map(donor => (
                        <div key={donor.id} className="bg-red-200 p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-lg">{donor.name}</h3>
                            <p>Email: {donor.email}</p>
                            <p>Blood Type: {donor.bloodType}</p>
                            <p>Message: {donor.message}</p>
                            <button onClick={() => handleUpdate(donor)} className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-400 transition duration-300">
                                Update
                            </button>
                            <button onClick={() => handleDelete(donor.id)} className="mt-2 ml-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-400 transition duration-300">
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Donation Form */}
            <section className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">{selectedDonorId ? 'Update Donor Details' : 'Sign Up to Donate'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <select
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="" disabled>Select Blood Type</option>
                        <option value="A+">A+</option>
                        <option value="A−">A−</option>
                        <option value="B+">B+</option>
                        <option value="B−">B−</option>
                        <option value="O+">O+</option>
                        <option value="O−">O−</option>
                        <option value="AB+">AB+</option>
                        <option value="AB−">AB−</option>
                    </select>
                    <textarea
                        name="message"
                        placeholder="Any additional message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className={`w-full ${selectedDonorId ? 'bg-blue-600' : 'bg-red-600'} text-white py-2 rounded hover:bg-opacity-80 transition duration-300`}>
                        {selectedDonorId ? 'Update' : 'Submit'}
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-white mt-auto py-4">
                <div className="container mx-auto text-center">
                    &copy; 2024 Your Company Name. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Donate;