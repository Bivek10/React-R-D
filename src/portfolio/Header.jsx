import React from 'react';
import styled from 'styled-components';
import Logo from '../../src/assets/me.jpg';
import {FaAddressBook} from 'react-icons/fa';
import {TiContacts} from 'react-icons/ti';
import {AiOutlineCopyright} from 'react-icons/ai';
import {TbWorldWww} from 'react-icons/tb';
import {BsInstagram, BsGithub, BsTwitter} from 'react-icons/bs';
import {CgMail} from 'react-icons/cg';

import SocialIcon from './components/SocialIcon';
import Button from './components/ButtonComp';
import ButtonComp from './components/ButtonComp';

const HeaderSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
`;

 const ProfileCard= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 50px 40px;
    border-radius: 1rem;
    border: 1px solid var(--color-light);
    padding: 40px 30px;
    position: fixed;
 `;

const PorfileCardTitle= styled.div`
    display: flex;
    justify-content: space-between;   
    align-items: center;
    h2,h6 {
        line-height: 1.2;
    }

    .copyright{
        font-size: 10px;
    }

`
 const ContentSection = styled.div `
    width: 100%;
    height: 90vh;
    background-color: red;
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

    margin-top: 20px;
    align-items: center;
    text-align: center;
    h4{
        
        line-height: 1.2;
        font-weight: 400;
    }
    
 `
const  CopyRightTitle= styled.div`
    margin-top: 20px;
    align-items: center;
    text-align: center;
    p{
        font-size: 10px;
    }
    
`
const socialIconProps =[
    {
        key:"twitter",
        label:"Twitter",
        icon:<BsTwitter size={16}/>
    },
    {
        key:"website",
        label:"Website",
        icon:<TbWorldWww size={16}/>
    },
    {
        key:"instagram",
        label:"Instagram",
        icon:<BsInstagram size={16}/>
    },
    {
        key:"github",
        label:"Github",
        icon:<BsGithub size={16}/>
    },
]

const buttonProps ={
    name:"Hire Me",
    showIcon:true,
    icon:<CgMail size={16}/>,
    onPressed:function (){
        console.log(buttonProps.name)
    }
}

function Header() {
  return (
    <HeaderSection>
        <ProfileCard>
            <PorfileCardTitle>
                <h2> Bivek Karki  </h2> 
                {/* <span className='copyright'><AiOutlineCopyright/></span> */}
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
            <SocialIcon menudata={socialIconProps}/>
            <ButtonComp arg={buttonProps}/>
        </ProfileCard>
        <ContentSection>
            <p>hello Bivek</p>
        </ContentSection>
    </HeaderSection>
  )
}

export default Header