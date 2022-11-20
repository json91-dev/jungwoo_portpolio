import React from 'react'

const SkillsItem = ({name, level='0'}) => {
  return (
    <li>
      {
        (level !== '0') && (
          <span className={`
            text-white rounded-2xl pt-0.5 pb-0.5 pl-2.5 pr-2.5 text-sm mr-2 
            ${(parseInt(level) === 1) && ' bg-gray-300'}
            ${(parseInt(level) === 2) && ' bg-gray-500'}
            ${(parseInt(level) === 3) && ' bg-blue-500'}
          `}>{level}</span>
        )
      }
      {name}
    </li>
  )
}

export default SkillsItem;
