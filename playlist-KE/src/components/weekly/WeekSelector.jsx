import React from 'react';

const WeekSelector = ({ weeks = [], currentWeek, onWeekChange }) => {
  return (
    <div className="flex gap-2 mb-6">
      {weeks.map((week) => (
        <button
          key={week.value}
          onClick={() => onWeekChange(week.value)}
          className={`px-4 py-2 rounded-lg transition ${
            currentWeek === week.value
              ? 'bg-kenya-red text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          {week.label}
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;

