import React from 'react'

export default (props)=>{
    const activeList = props.list
    return(        
        <> 
        {activeList && activeList.map(user=>(

             <tr key={user.login.uuid}>
            <td><img src={user.picture.thumbnail} alt="headshot {user.name.first, user.name.last}" /></td>
             <td>{user.name.first} {user.name.last}</td>
             <td>{user.email}</td>
             <td>{user.location.city}</td>
             <td>{user.location.country}</td>
           </tr>
        ))}
        </>
    )
}