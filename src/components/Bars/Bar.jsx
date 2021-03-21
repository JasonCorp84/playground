import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  height: ${props => props.height ? `${props.height*100}%` : '2px'};
  width: 3px;
  margin-right: 2px;
  background: #dbd4eb;
`

const Bar = ({height}) => {
  console.log(height)
  return (
      <Column height={height}/>
  )
}

export default Bar;