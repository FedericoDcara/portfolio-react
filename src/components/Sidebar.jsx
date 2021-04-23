import React, { Component } from 'react';
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa"
import { SocialData } from "./SocialData";
import { SidebarData } from "./SidebarData";



function Sidebar() {
    return (
        //http://jsfiddle.net/SO_AMK/VV2ek/
        //http://jsfiddle.net/mohammadAdil/DFeqH/ on scroll
        <div className="sidebar"> 
            <img className="autor-img" src={require("../images/avatarPic.jpg").default} alt="avatar"/>
            <div className="autor-name">Federico De cara</div>
            <div className="autor-job">Full-stack Developer</div>
            <a className="autor-mail" href="mailto:federico.dcara@gmail.com"><FiIcons.FiMail/>&nbsp;&nbsp;federico.dcara@gmail.com</a>
            <ul className="SidebarList">     
                {SidebarData.map((val, key) => {
                        return (
                        <li key={key}
                            className="row"
                            onClick={()=>{
                                window.location = val.link
                            }}
                        >
                            <div id="icon">{val.icon}</div>
                            <div id="title">{val.title}</div>
                            </li>
                        
                        );
                    })}
            </ul>
            <ul className="SocialList">
                {SocialData.map((val,key)=>{
                    return(
                        <li 
                            key={key}
                            className="SocialRow"
                            onClick={()=>{
                                window.open(val.link, "_blank")    
                            }}
                        >
                            <div id="SocialIcon">{val.icon}</div>
                        </li>
                    )
                })}
            </ul>
            <div className="footer">
                <p>© Copyright ©2021 All rights reserved <br/>
                    made with <AiIcons.AiFillHeart /> and <FaIcons.FaCoffee /></p>
            </div>
        </div>

    )
}

export default Sidebar
