import React, { FC } from 'react';
// import './greeting-card.css';

interface Props {
    name: string;
}


const User: FC<Props> = ({ name }) => {
    return <p className='user'>{name}</p>
}

export default User;