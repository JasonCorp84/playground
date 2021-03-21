import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  height: ${props => props.height ? `${props.height*100}%` : '2px'};
  width: ${props => props.barListSize ? `calc(100% - ${100 / props.barListSize}% - ${props.barListSize * 2}px)` : `2px`};
  margin-right: 2px;
  background: #dbd4eb;
`

const Bar = ({height, barListSize, size}) => {
  console.log("🚀 ~ file: Bar.jsx ~ line 12 ~ Bar ~ barListSize", barListSize)
  let currentColumn = window.document.getElementById('column');
  return (
      <Column id='column' size={size} height={height} barListSize={barListSize}>{currentColumn && currentColumn.clientWidth > 30 ? size : null}</Column>
  )
}

export default Bar;