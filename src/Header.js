import React from 'react';
import './Header.css'

const Header = function(){
    //INLINE STYLING 
    // const headerStyle = {textAlign: 'center', padding: 20, background: '#000', color:'#fff', textTransform: 'uppercase'}
    // return(
    //         <div>
    //             <div style = {headerStyle}>
    //                 PHONE DIRECTORY
    //             </div>    
    //         </div>
    // );

    //EXTERNAL STYLING
    return(

               <div className="header">
                    PHONE DIRECTORY
                </div>    
       

    );

   
}






export default Header;
   