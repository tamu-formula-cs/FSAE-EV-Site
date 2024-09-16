import React, { useState } from 'react';

export default function TeamCard({ title, description, responsibilities }) {
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-maroon mb-4">{title}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
            <button onClick={toggleInfo} className="text-maroon hover:underline mt-4">
                {showInfo ? 'Less Info' : 'More Info'}
            </button>
            {showInfo && (
                <div className="mt-4">
                    <p className="text-gray-700 text-sm">
                        Key Responsibilities:
                        <ul className="list-disc list-inside">
                            {responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </p>
                </div>
            )}
        </div>
    );
}