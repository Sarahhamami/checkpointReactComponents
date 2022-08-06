

import React from 'react'

export default function ProfilePhoto() {
  return (
    
    <img src="/profilePic.jpg" alt="myimage" style={{width: "300px",
        height: "300px",
        'borderRadius':'50%',
        resizeMode: 'contain',
    alignSelf: 'center',}} />
        
  )
}
