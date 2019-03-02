import React from 'react'

const SectionWrapper = (props) => {
  return (
    <div className="section-wrapper">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default SectionWrapper