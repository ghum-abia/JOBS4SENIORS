import React from 'react'

export default function Bookmarks({ bookmarkedJobs }) {
  return (
    <div>
        <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Jobs</h2>
  
        <ul>
          {bookmarkedJobs.map((job) => (
            <li key={job.id} className="p-4 border-b">
              <h3 className="text-lg font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.experience} - {job.datePosted}</p>
              <p className="text-sm text-gray-500">Posted at: {job.timePosted}</p>
            </li>
          ))}
        </ul>
    
    </div>
    </div>
  )
}
