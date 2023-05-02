import React from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { TbWorldWww } from 'react-icons/tb';
import styled from 'styled-components';
import Logo from '../../src/assets/me.jpg';

import ButtonComp from './components/ButtonComp';
import SocialIcon from './components/SocialIcon';

import { Route, Routes } from "react-router-dom";
import Error from '../components/routing/Error';
import About from './About';
import Contact from "./Contact";
import Home from './Home';
import Portfolio from "./Portfolio";
import Navbarcomponent from './components/Navbarcomponent';
import Services from './Services';

const HeaderSection = styled.section`
    width: 100%;
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
    width: 20%;
    margin: 50px 40px 0px 50px;
    border-radius: 1rem;
    border: 1px solid var(--color-light);
    padding: 40px 30px;
    /* position: fixed; */
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
    background-color: red;
    width: 65%;
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

const NavSection= styled.div`
    width: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin:0px 50px;

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
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    </ContentSection>
    
    <NavSection>
        <Navbarcomponent/>
    </NavSection>
   
    </HeaderSection>
  )
}

export default Header