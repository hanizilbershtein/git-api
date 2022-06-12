import React from 'react'

const Select = ({changeSort}) => {
  return (
      <>
      <span>sort by: </span>
    <select name="sort by" onChange={changeSort}>
    <option value=
    "">   </option>
    <option value=
    "Date">  Date </option>
    <option value=
    "Name"> Name</option>
    <option value=
    "Repositories"> Repositories </option>
    </select>
    </>
  )
}

export default Select