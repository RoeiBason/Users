import React, { FC } from 'react';

interface Props {
    names: string[];
}


const UserList: FC<Props> = ({ names }) => {
    return <div>
        <ul>
            {names.map((name) => <li>{name}</li>)}
        </ul>
    </div>
}

export default UserList;