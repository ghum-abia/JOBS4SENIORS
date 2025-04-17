import React from 'react';
import { useState } from 'react';
import useProfileStore from '../../store/profileStore';

const ProfileTab = () => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => setIsExpanded(!isExpanded);
  const { profile, projects, skills, experience, education } = useProfileStore();
  
  return (
    <div className="space-y-8">
      {/* About */}
      <section className="bg-white shadow-md rounded-lg p-6">

        <p className='text-[18px] text-bold text-[#181818]'>About</p>

      
      <p className="text-[#181818] text-normal text-[14px]">
        {profile.bio}
      </p>

      {isExpanded && (
        <p className="text-[#181818] text-normal text-[14px] transition-all duration-300">
          {profile.biodetails}
        </p>
      )}

      <button
        onClick={toggleText}
        className=" text-blue-500 hover:text-blue-700 font-medium transition duration-200"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>

      </section>

      {/* Projects */}
      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.id} className=" ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div className="  text-black p-4  transition-opacity rounded-lg">
                <h3 className="font-medium">{project.title}</h3>
                <div className='flex'>
                <p className="text-sm text-black pr-1">{project.type},</p>
                <p className="text-sm text-black">{project.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button  className='cursor-pointer'>
          <span className="text-flag-green font-medium transition duration-200">
           SEE ALL
          </span>
        </button>
      </section>

      {/* Skills */}
      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className="text-xl font-semibold mb-4">Skills & Endorsements</h2>
        <div className=" md:flex md:space-between md:flex-wrap ">
          {skills.map((skill) => (
            <div key={skill.id} className="rounded-lg p-4">
              <div className="flex justify-between w-55 items-center">
                <h3 className="font-medium text-[14px]">{skill.name}</h3>
                <span className="text-flag-green">{skill.rating}</span>
              </div>
              <div className="flex mt-2 -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt="User avatar"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button>
          <span className="text-flag-green font-bold text-[12px] cursor-pointer transition duration-200">
            SHOW ALL
          </span>
        </button>
      </section>

      {/* Experience */}
      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <div key={exp.id} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <h3 className="font-medium text-[14px]">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="font-light text-[10px]">{exp.period}</p>
                <p className="mt-2 text-normal text-[#181818] text-[10px]">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className='bg-white shadow-md rounded-lg p-6'>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="font-medium text-[14px]">{edu.school}</h3>
                <p className="text-nornal test-[10px]">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.period}</p>
                <p className="text-normal text-[10px]">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfileTab;
