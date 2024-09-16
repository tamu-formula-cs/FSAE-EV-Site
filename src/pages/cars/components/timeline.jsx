import React from 'react';
import '../cars.css'

const Timeline = ({ selectedYear, onSelectYear }) => {
    const years = ['AME24', 'AME23', 'AME22'];

    return (
        <div className="timeline">
            <div className="timeline-line"></div>
            {years.map((year) => (
                <button
                    key={year}
                    className={`timeline-dot ${selectedYear === year ? 'active' : ''}`}
                    onClick={() => onSelectYear(year)}
                >
                    <span className="year-label">{year}</span>
                </button>
            ))}
        </div>
    );
};

export default Timeline;