import { useParams } from "react-router";
import proposals from "./ProposalData";
import proposalimage1 from '../../assets/dashboard/proposalimg1.svg'
import clock from '../../assets/dashboard/clock.png'
import wallet from '../../assets/dashboard/wallet.png'
import mappin from '../../assets/dashboard/mappin.png'

const ProposalDetails = () => {

    const goback = () => {
        window.history.back();  
    }

  const { slug } = useParams();
  const proposal = proposals.find((p) => p.slug === slug);

  if (!proposal) {
    return <h2 className="text-red-500 text-center mt-10">Proposal Not Found</h2>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">

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

                            <div className="flex ml-15">
                                <div className='flex mr-8 '>
                                    <img src={proposalimage1} alt="" />
                                    <div className='text-[#15411F] font-bold ml-2 md:text-[14px]'>
                                        {proposal.jobtype}
                                    </div>
                                </div>
                                <div>
                                <div className='flex mr-8'>
                                    <img src={clock} alt="" />
                                    <div className='text-[#15411F] font-bold ml-2 md:text-[14px]'>
                                        <span>{proposal.time}</span>
                                        <span>/week</span>
                                    </div>
                                </div>
                                </div>
                                <div>
                                <div className='flex mr-8'>
                                    <img src={wallet} alt="" />
                                    <div className='text-[#15411F] ml-2 font-bold  md:text-[14px]'>
                                        <span>${proposal.price}</span>
                                        <span>hr</span>

                                    </div>
                                </div>
                                </div>
                                <div>
                                <div className='flex mr-8'>
                                    <img src={mappin} alt="" />
                                    <div className='text-[#15411F] ml-2 font-bold  md:text-[14px]'>
                                        <span>{proposal.location}</span>
                                    </div>
                                </div>
                                </div>
                            </div>

                            <div className='mt-5'>
                                <div className='text-[#15411F] font-bold '>Job Description</div>
                                <div className='text-[#333333] font-normal text-[16px] mt-2'>{proposal.description}</div>
                            </div>

            
                        <div onClick={goback} className=' mt-5'>
                            <button className='bg-[#15411F] text-[#F3F3F3] rounded-lg p-4'>Cancel Proposal</button>
                             </div>




    </div>
  );
};

export default ProposalDetails;
