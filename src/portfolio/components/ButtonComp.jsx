import React from 'react'
import styled from 'styled-components'


const ButtonDiv= styled.button`
  margin-top: 20px;
    height: 40px;
    color:var(--color-white);
    background-color: var(--color-primary);
    width: 200px;
    display: flex;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

function ButtonComp(props) {
  const btnArg=props.arg;
  return (
    
      <ButtonDiv onClick={btnArg.onPressed}>{btnArg.showIcon && btnArg.icon} {btnArg.name}</ButtonDiv>
  
    )
}

export default ButtonComp