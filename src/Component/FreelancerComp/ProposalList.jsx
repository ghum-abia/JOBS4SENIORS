import React from 'react'
import ProposalDropdown from './ProposalDropdownSort'
import { useState } from 'react';
import proposals from './ProposalData'
import { Link } from "react-router";

function ProposalList() {

    const [sortBy, setSortBy] = useState("default");


     // Function to handle sorting
  const sortedProposals = () => {
    let sortedList = [...proposals];

    switch (sortBy) {
      case "title-asc":
        sortedList.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sortedList.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-new":
        sortedList.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "date-old":
        sortedList.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      default:
        return proposals;
    }
    return sortedList;
  };

  return (
    <div>
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <span>Proposals</span>

            {/* <div className='flex justify-between'>
                <span>Showing 6-6 of 10 results</span>
                <ProposalDropdown />
            </div> */}
          
            <div className="p-6">
                <div className='flex justify-between'>
                <h1 className="text-2xl font-bold mb-4">Showing 6-6 of 10 results</h1>
                <ProposalDropdown onSortChange={setSortBy} />
                </div>
                <ul className="mt-4 p-4 rounded-md">
                    {sortedProposals().map((proposal) => (
                    <li key={proposal.id} className="p-2 ">
                         <Link to={`/proposal/${proposal.slug}`}>
                            <div className='flex'>
                                <img src={proposal.image} alt="" className="w-[40px] h-[40px]" />
                                <div className='ml-4'>
                                    <div className='text-[#15411F]'><strong>{proposal.title}</strong></div>
                                    <div className='flex justify-between '>
                                        <div className='pr-10'>{proposal.company}</div>
                                        <div> Submitted on  {proposal.date}</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    </li>
                    ))}
                </ul>
    </div>
           

        </div>
    </div>
  )
}

export default ProposalList