import React from 'react'
import profileImg from '../../assets/images/profile.png'
import mailImg from '../../assets/images/mail.png'
import phoneImg from '../../assets/images/phone.png'
import githubImg from '../../assets/images/github.png'
import rssImg from '../../assets/images/rss.png'

const Profile = () => {
  return (
    <div className="
      w-full mt-[10%] flex flex-col
      md:flex-row
    "
    >
      <div className="md:w-[20%] justify-center flex items-center">
        <img src={profileImg}  />
      </div>
      <div className="w-[80%] pl-5 text-gray-700 ">
        <div className="text-lg h-[20%]">
          <p className='text-5xl text-blue-600'>이정우 <font className='text-3xl'>(Jungwoo Lee)</font> </p>
        </div>
        <div className="flex flex-col h-[80%] ">
          <div className="flex flex-row items-center ml-[1.4rem] mt-[1.3rem]">
            <img className='object-cover h-[1.5rem]' src={mailImg}/>
            <a className='ml-[1.5rem] text-blue-500' href="mailto:jjjjjw910911@gmail.com" target="_blank">jjjjjw910911@gmail.com</a>
          </div>

          <div className="flex flex-row items-center ml-[1.4rem] mt-[1.3rem]">
            <img className='object-cover h-[1.5rem]' src={phoneImg}/>
            <a className='ml-[1.5rem] '>010-6284-8051</a>
          </div>

          <div className="flex flex-row items-center ml-[1.4rem] mt-[1.3rem]">
            <img className='object-cover h-[1.5rem]' src={githubImg}/>
            <a className='ml-[1.5rem] text-blue-500' href='https://github.com/jungwoole91' target="_blank">https://github.com/jungwoole91</a>
          </div>

          <div className="flex flex-row items-center ml-[1.4rem] mt-[1.3rem]">
            <img className='object-cover h-[1.5rem]' src={rssImg}/>
            <a className='ml-[1.5rem] text-blue-500' href='https://jw910911.tistory.com' target="_blank">https://jw910911.tistory.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
