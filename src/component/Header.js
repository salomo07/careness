import React,{useState,useContext,useEffect,useCallback} from 'react';
import {Link} from "react-router-dom";
import {AppContext} from '../AppContext';

import Sidebar from'../component/Sidebar';
function Header() {
    var userdata=useContext(AppContext).userdata;
    var isLoggedIn=userdata!=null? true : false;
    var tryLogout=useContext(AppContext).tryLogout;
    var [showSidebar,setShowSideBar]=useState(false);
    var showMenu=useCallback(()=>{
        console.log(showSidebar);
        // console.log($(".app-sidebar").is(":hidden"));
        // (!$(".app-sidebar").is(":hidden"))?$(".app-sidebar").show():$(".app-sidebar").hide();
        setShowSideBar(!showSidebar);
    })
    useEffect(()=>{
        if(userdata!=null)
        {
            document.getElementById("btnLogout").addEventListener("click", tryLogout);
        }
    })
    return (
    <>
    <div className="app-header header-shadow bg-arielle-smile header-text-light">
        <div className="app-header__logo">
            <Link to="/"><div className="logo-src" ></div></Link>
            <div className="header__pane ml-auto">
                <div>
                  <button id="btnShowMenu" type="button" onClick={showMenu} style={{display:userdata==null?"none":""}} className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
            </div>
        </div>
        <div className="app-header__mobile-menu">
            <div>
              <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
        </div>
        <div className="app-header__menu">
          <span>
              <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                  <span className="btn-icon-wrapper">
                      <i className="fa fa-ellipsis-v fa-w-6"></i>
                  </span>
              </button>
          </span>
        </div>    
        <div className="app-header__content">
            <div className="app-header-left">
                <div className="search-wrapper">
                  <div className="input-holder">
                    <input type="text" className="search-input" placeholder="Type to search"/>
                    <button className="search-icon"><span></span></button>
                  </div>
                  <button className="close"></button>
                </div>   
            </div>
            <div className="app-header-right">
                <div className="header-dots">
                    <div className="dropdown" >
                        <button type="button"  aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" className="p-0 mr-2 btn btn-link">
                            <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                                <span className="icon-wrapper-bg bg-primary"></span>
                                <i className="icon text-primary ion-android-apps"></i>
                            </span>
                        </button>
                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-xl rm-pointers dropdown-menu dropdown-menu-right">
                            <div className="dropdown-menu-header">
                                <div className="dropdown-menu-header-inner bg-plum-plate">
                                    <div className="menu-header-image" style={{backgroundImage:"url('img/dropdown-header/abstract4.jpg')"}}></div>
                                    <div className="menu-header-content text-white">
                                        <h5 className="menu-header-title">Grid Dashboard</h5>
                                        <h6 className="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-menu grid-menu-xl grid-menu-3col">
                                <div className="no-gutters row">
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i> Automation
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-piggy icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Reports
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-config icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Settings
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-browser icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Content
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-hourglass icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"></i> Activity
                                        </button>
                                    </div>
                                    <div className="col-sm-6 col-xl-4">
                                        <button className="btn-icon-vertical btn-square btn-transition btn btn-outline-link">
                                            <i className="pe-7s-world icon-gradient bg-night-fade btn-icon-wrapper btn-icon-lg mb-3"> </i> Contacts
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav flex-column">
                                <li className="nav-item-divider nav-item"></li>
                                <li className="nav-item-btn text-center nav-item">
                                    <button className="btn-shadow btn btn-primary btn-sm">Follow-ups</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                    {isLoggedIn &&
                        <div className="widget-content-wrapper" style={{cursor: 'pointer'}} data-toggle="dropdown">
                            <div className="widget-content-left">
                                <a aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                    <img width="42" height="42" onError={(e)=>{e.target.src="/img/user.png"}} className="rounded-circle" src={userdata.profile.foto} alt=""/>
                                    <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                </a>
                                <div className="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-menu-header">
                                        <div className="dropdown-menu-header-inner bg-info">
                                          <div className="menu-header-image" style={{backgroundImage:"url('"+userdata.profile.fotowall+"')"}} />
                                          <div className="menu-header-content">
                                            <div className="avatar-icon-wrapper avatar-icon-lg">
                                              <div className="avatar-icon rounded btn-hover-shine">
                                                <img src={userdata.profile.foto} onError={(e)=>{e.target.src="/img/user.png"}} alt="Avatar 5" />
                                              </div>
                                            </div>
                                            <div>
                                            
                                              <h3 className="menu-header-title">{userdata.profile.firstname} {userdata.profile.lastname}</h3>
                                              <h6 className="menu-header-subtitle">{userdata.role.role}</h6>
                                            </div>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="scroll-area-xs" style={{height:"150px"}}>
                                        <div className="scrollbar-container ps">
                                            <ul className="nav flex-column">
                                                <li className="nav-item-header nav-item">Activity</li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Chat
                                                        <div className="ml-auto badge badge-pill badge-info">8</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Recover Password</a>
                                                </li>
                                                <li className="nav-item-header nav-item">My Account
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Settings
                                                        <div className="ml-auto badge badge-success">New</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Messages
                                                        <div className="ml-auto badge badge-warning">512</div>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">Logs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item-divider mb-0 nav-item"></li>
                                    </ul>
                                    <div className="grid-menu grid-menu-2col">
                                        <div className="no-gutters row">
                                            <div className="col-sm-6">
                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-warning">
                                                    <i className="pe-7s-chat icon-gradient bg-amy-crisp btn-icon-wrapper mb-2"></i> Message Inbox
                                                </button>
                                            </div>
                                            <div className="col-sm-6">
                                                <button className="btn-icon-vertical btn-transition btn-transition-alt pt-2 pb-2 btn btn-outline-danger">
                                                    <i className="pe-7s-ticket icon-gradient bg-love-kiss btn-icon-wrapper mb-2"></i>
                                                    <b>Support Tickets</b>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="nav flex-column">
                                        <li className="nav-item-divider nav-item">
                                        </li>
                                        <li className="nav-item-btn text-center nav-item">
                                            <div id="btnLogout"><button className="btn-pill btn-primary btn-shine btn btn-info">Logout</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="widget-content-left  ml-3 header-user-info">
                                <div className="widget-heading">{userdata.profile.firstname} {userdata.profile.lastname}</div>
                                <div className="widget-subheading">
                                <center>{userdata.role.role}</center></div>
                            </div>
                        </div>
                    }
                    {
                        !isLoggedIn &&
                        <div className="header-dots">
                            <div className="dropdown">
                                <button data-toggle="modal" title="Sign In" data-target="#loginModal" type="button" aria-haspopup="true" aria-expanded="false" className="p-0 btn dd-chart-btn">
                                    <span className="icon-wrapper icon-wrapper-alt rounded-circle">
                                        <span className="icon-wrapper-bg bg-success"></span>
                                        <i className="fa fa-sign-in"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    }   
                    </div>
                </div>
            
                <div className="header-btn-lg">
                  <button type="button" className="hamburger hamburger--elastic open-right-drawer">
                      <span className="hamburger-box">
                          <span className="hamburger-inner"></span>
                      </span>
                  </button>
                </div>        
            </div>
        </div>        
    </div>
    <Sidebar showSidebar={showSidebar}/>
    </> 
  );
}

export default Header;
