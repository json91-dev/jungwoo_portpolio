import React from 'react'
import SkillsItem from "./SkillsItem"

const Skills = () => {
  return (
    <div className="mt-[5%] w-full text-2xl">
       {/*Frontend*/}
      <div className="md:w-[20%] ">
        <p className="text-blue-500 text-3xl md:text-2xl lg:text-3xl">Skills</p>
      </div>

      {/*Backend*/}
      <div className='w-full pl-5 pr-5 mt-[2rem]'>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">FrontEnd</p>
          </div>
          <div className='w-[80%] flex flex-row '>
            <div className='w-[33%] pl-10'>
              <SkillsItem name='React' level='3'/>
              <SkillsItem name='React Query' level='3'/>
              <SkillsItem name='Javascript' level='3'/>
              <SkillsItem name='Webpack' level='3'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='React Native' level='3'/>
              <SkillsItem name='Redux' level='3'/>
              <SkillsItem name='TypeScript' level='2'/>
              <SkillsItem name='THREE.js' level='2'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='SCSS' level='3'/>
              <SkillsItem name='Next' level='2'/>
              <SkillsItem name='TailwindCSS' level='2'/>
              <SkillsItem name='Aframe' level='2'/>
            </div>
          </div>
        </div>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">Backend</p>
          </div>
          <div className='w-[80%] flex flex-row '>
            <div className='w-[33%] pl-10'>
              <SkillsItem name='AWS' level='3'/>
              <SkillsItem name='Express.js' level='2'/>
              <SkillsItem name='Apache' level='1'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='Nginx' level='3'/>
              <SkillsItem name='Sequalize' level='2'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='Node.js' level='2'/>
              <SkillsItem name='Puppeteer' level='1'/>
            </div>
          </div>
        </div>
      </div>

      {/*Database*/}
      <div className='w-full pl-5 pr-5  mt-[2rem]'>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">Database</p>
          </div>
          <div className='w-[80%] flex flex-row '>
            <div className='w-[33%] pl-10'>
              <SkillsItem name='MongoDB' level='3'/>
              <SkillsItem name='SQLite' level='1'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='MySQL' level='2'/>
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='Firebase' level='2'/>
            </div>
          </div>
        </div>
      </div>

      {/*ETC*/}
      <div className='w-full pl-5 pr-5  mt-[2rem]'>
        <div className='flex flex-row mb-10'>
          <div className='w-[20%]'>
            <p className="text-2xl">ETC</p>
          </div>
          <div className='w-[80%] flex flex-row '>
            <div className='w-[33%] pl-10'>
              <SkillsItem name='Jenkins' />
              <SkillsItem name='Documentation' />
              <SkillsItem name='DevOps' />
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='Git / Github' />
              <SkillsItem name='Agile' />
              <SkillsItem name='Android' />
            </div>

            <div className='w-[33%] pl-10'>
              <SkillsItem name='Ubuntu' />
              <SkillsItem name='Amplify' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
