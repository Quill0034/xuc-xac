import React, { Component } from "react"; 

export default class Sidebar extends React.Component{
        render() {
          return (
      
            <nav id="sidebar" style={{position: 'relative', top: '50px'}}>
              <div className="sidebar-header">
              </div>
              <ul className="list-unstyled components">
                <li className="active">
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                    <i className="glyphicon glyphicon-home" />
                    Dice Roll
                  </a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li><a href="#">Home 1</a></li>
                    <li><a href="#">Home 2</a></li>
                    <li><a href="#">Home 3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-briefcase" />
                    Black Jack
                  </a>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                    <i className="glyphicon glyphicon-duplicate" />
                    Pages
                  </a>
                  <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li><a href="#">Page 1</a></li>
                    <li><a href="#">Page 2</a></li>
                    <li><a href="#">Page 3</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-link" />
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-paperclip" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="glyphicon glyphicon-send" />
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          );
        }
      }