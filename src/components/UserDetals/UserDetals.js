import React from 'react'
import WithData from '../higher-order';


const UserDetals = ({user}) => {

    const UserDetals = user.map(({name,id}) =>(
        <li key={`user-${id}`}>{name}</li>
      ));

      return(
       <ul>{UserDetals}</ul>
      )
}

export default WithData(UserDetals)
