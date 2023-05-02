import React from 'react';
import styled from 'styled-components';
import Logo from '../../src/assets/me.jpg';
import {FaAddressBook} from 'react-icons/fa';
import {TiContacts} from 'react-icons/ti';
import {AiOutlineCopyright} from 'react-icons/ai';

const HeaderSection = styled.section`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

 const ProfileCard= styled.div`
    width: 300px;
    height: 90vh;
    margin: 50px 40px;
    border-radius: 1rem;
    border: 1px solid var(--color-light);
    padding: 40px 30px;
 `;

const PorfileCardTitle= styled.div`
    display: flex;
    justify-content: space-between;   
    align-items: center;
`

const ProfileImage= styled.div`
    border-radius: 1rem;
    border: none;
    height: 250px;
    margin-top: 20px;
    background-color: blue;
    object-fit: cover;
    
    img{
        height: 250px;
        border-radius: inherit;
    }
`

 const ProfileSubTitle= styled.div`

    margin-top: 15px;
    align-items: center;
    text-align: center;
    h4{
        
        line-height: 1.2;
        font-weight: 400;
    }
    i{
        justify-content: center;
        align-items: center;
    }
 `
const  CopyRightTitle= styled.div`
    margin-top: 15px;
    align-items: center;
    text-align: center;
    p{
        font-size: 10px;
    }
    
`


function Header() {
  return (
    <HeaderSection>
        <ProfileCard>
            <PorfileCardTitle>
                <h4>Bivek Karki</h4>
                <h6>Full Stack Developer</h6>
            </PorfileCardTitle>
            <ProfileImage>
                <img src={Logo}></img>
            </ProfileImage>
            <ProfileSubTitle>
                <h4>Hello@bivek.Karki <br/> Base in Los Angeles </h4>
            </ProfileSubTitle>
            <CopyRightTitle>
                <p>
                    <AiOutlineCopyright/> 2023 Bivek. All right reserved 
                </p>
            </CopyRightTitle>
        </ProfileCard>
    </HeaderSection>
  )
}

export default Header