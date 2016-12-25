import _ from 'underscore';
import { Link } from 'react-router';
import React from 'react';
import Menu from '../Menu';
import './style.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
      direction: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', _.debounce(() => {
      this.setState({ scrollTop: window.pageYOffset });
    }, 1));
  }

  render() {
    return (
      <div className="l-home-page">
        <Menu scrollTop={this.state.scrollTop} />
        <header>
          <div className="diagonal">{''}</div>
          <div className="content">
            <div>
              <h1>MapGame</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="contain-button">
                <Link className="butn -submit" to="register">Create MapGame</Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default HomePage;
