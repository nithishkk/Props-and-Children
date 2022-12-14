import React from 'react'

const Test=(props)=>{
  const[data,setData]=React.useState(props.children)
  return(
    <div>
      {data}
      {/* {...data.children} */}
      {/* {props.children} */}
      </div>

  )
}
export default Test;