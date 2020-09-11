import React, { useState, useRef,useEffect } from 'react';
import styled from 'styled-components';
import "./style.css";

const Ul = styled.ul`
  height: ${({ height })=> height}px;
  opacity: ${({ height })=> height > 0 ? 1 : 0};
  overflow: hidden;;
  transition: .5s;
`;
export default function App() {
 const content = useRef(null);
  const [list, setList] = useState(['Boo! 👻', 'Boo! 👻', 'Boo! 👻']);
  const [height, setHeight] = useState(0);

  const toggleAccordion = ()=> {
    setHeight(height === 0 ? content.current.scrollHeight : 0);
  };

  useEffect(()=> {
    if (height > 0) {
     console.log('content.current.scrollHeight:',content.current.scrollHeight)
     setHeight(content.current.scrollHeight);
    }
  }, [list]);

  const addToList = ()=> {
    setList([...list, 'Boo! 👻']);
  };

  return <React.Fragment>
     <button onClick={toggleAccordion}>Click me</button>
    <button onClick={addToList}>Add</button>
    <Ul height={height} ref={content}>
      {list.map((item, index)=> <li key={index}>{item}</li>)}
    </Ul>
  </React.Fragment>;
};

