import React, { useState } from 'react';

const EligibilityChecker = () => {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [isEligible, setIsEligible] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const checkEligibility = () => {
        if (age < 18) {
            setIsEligible(false);
            setErrorMessage('You must be at least 18 years old to donate.');
        } else if (weight < 50) {
            setIsEligible(false);
            setErrorMessage('You must weigh at least 50 kg to donate.');
        } else {
            setIsEligible(true);
            setErrorMessage('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Eligibility Checker</h1>
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <label className="block mb-4">
                    <span className="text-gray-700">Enter your age:</span>
                    <input 
                        type="number" 
                        placeholder="Age" 
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700">Enter your weight (kg):</span>
                    <input 
                        type="number" 
                        placeholder="Weight" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                </label>
                <button 
                    onClick={checkEligibility}
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Check Eligibility
                </button>

                {isEligible !== null && (
                    <p className={`mt-4 text-xl ${isEligible ? 'text-green-600' : 'text-red-600'}`}>
                        {isEligible ? "You are eligible to donate!" : errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default EligibilityChecker;