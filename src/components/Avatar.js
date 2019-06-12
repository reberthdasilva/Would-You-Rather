import React from 'react'

const Avatar = ({url, name}) => (
    <img className='avatar' src={url} alt={name} title={name} />
)

export default Avatar