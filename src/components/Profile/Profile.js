import React from 'react'
import profileImg from '../../assets/images/profile.png'

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
      <div className="w-[80%] pl-5 text-gray-700 border-2 border-red-900 ">
        <div>
          <p>이정우</p>
        </div>
        <div>
          <div>
            <img />
            <p>jjjjjw910911@gmail.com</p>
          </div>

          <div>
            <img />
            <p>010-6284-8051 </p>
          </div>

          <div>
            <img />
            <p>ㅁㄴㅇㅁㅇㅁㄴㅇㅁㅇ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
