import React from 'react'

const Skills = () => {
  return (
    <div className="mt-[10%] border-4 border-red-900 w-full">
      <div className="md:w-[20%]  border-2 border-red-900">
        <p className="text-blue-500 text-3xl md:text-2xl lg:text-3xl">Skills</p>
      </div>

      <div className='w-full pl-5 pr-5 border-2 border-red-900 mt-[2rem]'>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">FrontEnd</p>
          </div>
          <div className='w-[80%] flex flex-row justify-around'>
            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>React Query</li>
                <li>Javascript</li>
                <li>THREE.js</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React Native</li>
                <li>Redux</li>
                <li>TypeScript</li>
                <li>Aframe</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>Next</li>
                <li>SCSS</li>
                <li>TailwindCSS</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">Backend</p>
          </div>
          <div className='w-[80%] flex flex-row justify-around'>
            <div>
              <ul className='list-disc'>
                <li>Express.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">DATABASE</p>
          </div>
          <div className='w-[80%] flex flex-row justify-around'>
            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">ETC</p>
          </div>
          <div className='w-[80%] flex flex-row justify-around'>
            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>

            <div>
              <ul className='list-disc'>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
