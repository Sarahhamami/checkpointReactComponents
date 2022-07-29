import React, { Component } from 'react'


export class ProfilePhoto extends Component {
  render() {
    return (<>
            <img src="/ProfilePic.jpg" alt="myimage" style={{width: "100px",
        height: "100px",
        'borderRadius':'50%',
        resizeMode: 'contain',
    alignSelf: 'center',}} />
        </>
    )
  }
}

export default ProfilePhoto