import React, {Component} from 'react';
import {Link} from 'react-router';
import {Navbar,NavItem} from 'react-materialize';


export default class MainLayout extends Component {
  render() {
    return (
      <div className="ground">
        <Navbar brand='Dmytro Vergeles' right className="yellow accent-4">
          <NavItem ><Link to="/articles">Articles</Link></NavItem>
          <NavItem ><Link to="/photoes">My Insta</Link></NavItem>
          <NavItem ><Link to="/cv">CV</Link></NavItem>
          <NavItem ><Link to="/contacts">Contact</Link></NavItem>
        </Navbar>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}
