import React from 'react'

function GoogleLogin() {
    const handleWithGoogle = async () => {
        const url = "https://accounts.google.com/o/oauth2/auth";
        const width = 800; // Set the desired width
        const height = 600; // Set the desired height
        // Calculate the center position
        const left = screen.width / 2 - width / 2;
        const top = screen.height / 2 - height / 2;
    
        window.open(
          url,
          "_blank",
          `width=${width},height=${height},top=${top},left=${left}`
        );
    
        window.receiveMessage = function (data) {
          console.log("Hello World! ", data);
          // Handle the received data here
        };
      };
  return (
    <div>
      
    </div>
  )
}

export default GoogleLogin
