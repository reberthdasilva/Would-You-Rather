import React from 'react'

const Avatar = ({name, width}) => (
    <img className='avatar rounded-circle' width={width ? width : 'auto'} src={`https://ui-avatars.com/api/?name=${name}`} alt={name} title={name} />
)

export default Avatar