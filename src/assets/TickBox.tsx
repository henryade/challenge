import React, { FC } from 'react'

const TickBox: FC<{ isDefault: boolean }> = ({ isDefault }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill={isDefault ? "#7F56D9" : "#fff"} />
      <path d="M11.3334 5.5L6.75002 10.0833L4.66669 8" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke={isDefault ? "#7F56D9" : "#D0D5DD"} />
    </svg>

  )
}

export default TickBox