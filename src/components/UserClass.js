// import React from "react";


// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInfo: {
//         name : "Dummy",
//         location: "Defalut",
//         avatar_url: "https://dummy-photo.com",
//       },
//     }
//     // console.log(this.props.name + " Child constructor");
//   }
//  async componentDidMount() {
//     // console.log(this.props.name + "Child componentDidMount");
//      const data = await fetch("https://api.github.com/users/MR-Mohan12");
//      const json = await data.json();

//       this.setState(
//         {
//            userInfo:json
//         })      
//      console.log(json);
//   }

//   componentWillUnmount(){
//     console.log("Componenet will unAmount");
//   }
//   render() {
   
//     // console.log(this.props.name + "child render");
//     const {name,id,avatar_url,location,bio,url} = this.state.userInfo;
  
//     return (
//       <div className="user-card">
//         <img src={avatar_url}/>
//         <h2>Name: {name}</h2>
//         <h2>Location: {location}</h2>
//         <h2>BIO: {bio}</h2>
//         <h2>ID: {id}</h2>
//         <h3>Contact:{url}</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/MR-Mohan12");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, id, avatar_url, location, bio, url } = this.state.userInfo;

    return (
      <div className="user-card bg-white p-6 rounded-md shadow-md">
        <img src={avatar_url} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4" />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <h2 className="text-gray-600 mb-2">Location: {location}</h2>
        <p className="text-gray-700 mb-2">{bio}</p>
        <h2 className="text-gray-600 mb-2">ID: {id}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Contact: {url}
        </a>
      </div>
    );
  }
}

export default UserClass;



