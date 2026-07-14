import React from 'react'
import Text from './Text'

function Left({ heading, icon, setData }) {
  return (
    <>
    <Text heading={heading} icon={icon} setData={setData} ></Text>
    </>
  )
}

export default Left