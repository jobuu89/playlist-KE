import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const WeekSelector = ({ selectedWeek, onWeekSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getWeekDates = (date) => {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Monday start
    start.setDate(diff);
    
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    
    return { start, end };
  };

  const formatDateRange = (start, end) => {
    const options = { month: 'short', day: 'numeric' };
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  };

  const goToPreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const goToNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const goToCurrentWeek = () => {
    setCurrentDate(new Date());
  };

  const currentWeekDates = getWeekDates(currentDate);
  const weekKey = `${currentWeekDates.start.toISOString()}-${currentWeekDates.end.toISOString()}`;

  // Generate past weeks for dropdown
  const pastWeeks = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i + 1) * 7);
    return getWeekDates(date);
  });

  return (
    <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-lg rounded-xl border border-gray-700/50 p-1">
      <button
        onClick={goToPreviousWeek}
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex items-center gap-2 px-3">
        <Calendar className="w-4 h-4 text-kenya-red" />
        <select
          value={weekKey}
          onChange={(e) => {
            const [startStr, endStr] = e.target.value.split('-');
            const start = new Date(startStr);
            const end = new Date(endStr);
            setCurrentDate(start);
            onWeekSelect?.({ start, end });
          }}
          className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
        >
          <option value={weekKey}>
            {formatDateRange(currentWeekDates.start, currentWeekDates.end)}
          </option>
          {pastWeeks.map((week) => {
            const key = `${week.start.toISOString()}-${week.end.toISOString()}`;
            return (
              <option key={key} value={key}>
                {formatDateRange(week.start, week.end)}
              </option>
            );
          })}
        </select>
      </div>

      <button
        onClick={goToNextWeek}
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors text-gray-400 hover:text-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="h-6 w-px bg-gray-700 mx-1" />

      <button
        onClick={goToCurrentWeek}
        className="px-3 py-1 text-sm text-kenya-red hover:bg-kenya-red/20 rounded-lg transition-colors font-medium"
      >
        Today
      </button>
    </div>
  );
};

export default WeekSelector;

