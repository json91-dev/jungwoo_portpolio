import React from 'react'
import profileImg from '../assets/images/profile.png'

const Profile = () => {
  return (
    <div className="
    mt-[10%] flex flex-col md:flex-row md:justify-between max-w-md
    md:max-w-5xl border-4 border-red-900 pl-10 pr-10"
    >
      <div className="md:w-[20%] justify-center flex items-center">
        <img src={profileImg}  />
      </div>
      <div className="max-md:pt-10 md:pl-5 md:w-[80%] text-gray-700 border-4 border-red-900">
        <p>4년차 웹 개발자로 서버사이드 개발 및 프론트엔드 개발에서의 다양한 경험이 있습니다. React, ReactNative, Node.js, MonboDB, AWS, Git, Linux 등을 사용하여 프로덕션 설계, 개발 운영한 경험이 있고, Three.js, Vuforia, WebAccembly 등 3D 개발쪽에 대한 지식이 있습니다. 클린 코드에 관심이 많아, 코드 한줄을 작성하더라도, 다른 개발자분이 제가 만든 소스코드를 쉽게 이해할수 있도록 노력하고 있습니다.</p>
      </div>
    </div>
  )
}

export default Profile;
