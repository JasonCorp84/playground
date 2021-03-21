import react, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Bar from './Bar'


const Container = styled.div`
  display: flex;
  width: 80%;
  height: 90vh;
  border: 1px solid pink;
`

const BarContainer = () => {
  const [barListSize, setBarListSize] = useState(100);
  const [barList, setBarList] = useState([]);
  const [minSize, setMinSize] = useState();
  const [maxSize, setMaxSize] = useState(Math.max(...barList));

  useEffect(() => {
    const barList = new Array(barListSize).fill(null);
    barList.forEach((number, index) => barList[index] = Math.floor(Math.random() * Math.floor(barListSize)) )
    const min = Math.min(...barList);
    const max = Math.max(...barList);
    setMinSize(min);
    setMaxSize(max);
    setBarList(barList)
  },[])

  const calculateBarSize = (min, max, number) => {
    const range = max - min;
    const distanceFromMin = number - min; // 5/105
    const totalSize = distanceFromMin/range;
    return totalSize;
  }
  return (
    <Container>
      {
        barList.map((bar, index) => {
          const height = calculateBarSize(minSize, maxSize, bar)
          return (
            <Bar height={height} key={index}/>
          )
        })
      }
    </Container>
  )
}

export default BarContainer;