import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">My Projects</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">The projects that I am actively working on are in this field.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 items-center mt-2">
          {_projects ? (
            projects ? (
              projects.map((project, index) => (
                <a href={project.link} target="_blank" rel="noreferrer" key={index} className="bg-neutral-800/10 p-4 hover:bg-neutral-800/20 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <img 
                    alt="project" 
                    src={project.image} 
                    className="rounded-lg w-full h-64 object-cover" 
                  />
                  <p className="text-xl font-semibold mt-5">{project.name}</p>
                  <p className="text-md font-normal text-white/50 h-24 overflow-auto" style={{ overflow: 'auto' }}>{project.description}</p>
                </a>
              ))
            ) : (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-neutral-800/20 p-4 rounded-lg w-full">
                  <div className="flex-shrink-0 w-full h-64">
                    <div className="w-full h-full bg-neutral-700/30 rounded-lg animate-pulse" />
                  </div>
                  <div className="bg-neutral-700/30 animate-pulse w-1/2 h-6 rounded-md mt-5" />
                  <div className="mt-2 bg-neutral-700/30 animate-pulse w-full h-24 rounded-md" />
                </div>
              ))
            )
          ) : (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-neutral-800/20 p-4 rounded-lg w-full">
                <div className="flex-shrink-0 w-full h-64">
                  <div className="w-full h-full bg-neutral-700/30 rounded-lg animate-pulse" />
                </div>
                <div className="bg-neutral-700/30 animate-pulse w-1/2 h-6 rounded-md mt-5" />
                <div className="mt-2 bg-neutral-700/30 animate-pulse w-full h-24 rounded-md" />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

