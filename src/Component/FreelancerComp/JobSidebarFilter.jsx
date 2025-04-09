import React, { useState, useEffect } from "react";
import { jobListings } from "./JobListings";

const experienceLevels = ["No-experience", "Fresher", "Intermediate", "Expert"];
const datePostedOptions = ["All", "Last Hour", "Last 24 Hours", "Last 7 Days", "Last 30 Days"];

export default function SidebarFilter({ applyFilters }) {
  const [tempFilters, setTempFilters] = useState({
    experience: [],
    datePosted: [],
  });

  const [counts, setCounts] = useState({ experience: {}, datePosted: {} });

  // Calculate filter counts dynamically
  useEffect(() => {
    const experienceCounts = {};
    experienceLevels.forEach((level) => {
      experienceCounts[level] = jobListings.filter((job) => job.experience === level).length;
    });

    const dateCounts = {};
    datePostedOptions.forEach((date) => {
      if (date === "All") {
        dateCounts[date] = jobListings.length; // "All" should count all jobs
      } else {
        dateCounts[date] = jobListings.filter((job) => job.datePosted === date).length;
      }
    });

    setCounts({ experience: experienceCounts, datePosted: dateCounts });
  }, []);

  // Handle checkbox selection
  const handleCheckboxChange = (category, value) => {
    setTempFilters((prev) => {
      let updatedFilters = { ...prev };

      if (category === "datePosted") {
        if (value === "All") {
          updatedFilters.datePosted = ["All"]; // Select only "All"
        } else {
          if (updatedFilters.datePosted.includes("All")) {
            updatedFilters.datePosted = []; // Remove "All" if another option is clicked
          }

          if (updatedFilters.datePosted.includes(value)) {
            updatedFilters.datePosted = updatedFilters.datePosted.filter((item) => item !== value);
          } else {
            updatedFilters.datePosted = [...updatedFilters.datePosted, value];
          }
        }
      } else {
        if (updatedFilters[category].includes(value)) {
          updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
        } else {
          updatedFilters[category] = [...updatedFilters[category], value];
        }
      }

      return updatedFilters;
    });
  };
  return (
    <div className="w-75  p-4  rounded-2xl shadow-md bg-white ">


      {/* Experience Level */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Experience Level</h4>
        {experienceLevels.map((level, index) => (
          <label key={index} className="flex items-center justify-between text-gray-700 mb-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={tempFilters.experience.includes(level)}
                onChange={() => handleCheckboxChange("experience", level)}
              />
              {level}
            </div>
            <span className="text-gray-500  text-sm">{counts.experience[level] || 0}</span>
          </label>
        ))}
      </div>

      {/* Date Posted */}
      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">Date Posted</h4>
        {datePostedOptions.map((option, index) => (
          <label key={index} className="flex items-center justify-between text-gray-700 mb-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={tempFilters.datePosted.includes(option)}
                onChange={() => handleCheckboxChange("datePosted", option)}
              />
              {option}
            </div>
            <span className="text-gray-500 text-sm ">{counts.datePosted[option] || 0}</span>
          </label>
        ))}
      </div>

      {/* Apply Button */}
      <button
        onClick={() => applyFilters(tempFilters)}
        className=" bg-[#15411F] text-white px-8 py-2  cursor-pointer m-auto rounded-lg grid place-content-center center hover:bg-green-800 transition"
      >
        Apply
      </button>
    </div>
  );
};


