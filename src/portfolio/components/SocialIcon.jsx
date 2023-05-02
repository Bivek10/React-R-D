import React from 'react'
import styled from 'styled-components'

const SocialDiv= styled.div`
    margin-top: 20px;
    display: inline-flex;
    align-items: center;
    text-align: center;
    gap: 10px;
    
`

const IconButton= styled.div`
    height: 40px;
    width: 40px;
    display: flex;
    border-radius: 50px;
    border: 1px solid var(--color-light);
    justify-content: center;
    align-items: center;
`

function SocialIcon(props) {
    const menuItem= props.menudata.map((item)=>{
        return(
            <IconButton key={item.key}>
                {item.icon}
            </IconButton>
        )
    })
  return (
    <SocialDiv>
        {menuItem}
    </SocialDiv>
  )
}

export default SocialIcon