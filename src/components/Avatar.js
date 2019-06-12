import React from 'react'

const Avatar = ({url, name}) => (
    <img className='avatar' src={`https://ui-avatars.com/api/?name=${name}`} alt={name} title={name} />
)

export default Avatar