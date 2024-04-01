import User from './User';
import UserClass from './UserClass';
import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Your lifecycle methods or other logic
  }

  render() {
    return (
      <div className="container mx-auto p-8 bg-gray-100 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Class Component</h1>
        <div className="bg-white p-6 rounded-md shadow-md">
          <UserClass name={"Akshay Saini "} location={"Dehradun"} />
          {/* <User></User> */}
        </div>
      </div>
    );
  }
}

export default About;
