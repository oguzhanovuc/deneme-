import React from 'react'

function Header({total , money}) {
  return (
    <>
      
        {total > 0 &&  money-total !== 0 && (
        <div className="header">
        Harçamak için {money - total} $ paranız kaldı!! </div>

      )} 
      { total === 0 &&(
        <div className="header"> 
        Harçamak için {money} $ paranız var!! </div>
        
      )}
      {money - total === 0 && (
       <div className="header">paranız bitti </div>
      )}
      <style jsx>{`
        .header {
          position : sticky;
          top : 0 ;
          background: black;
          height: 60px ;
          display: flex ;
          align-items: center ;
          justify-content: center ;
          color : #fff ;
          font-size: 24px;
          letter-spacing: 2px
          

        }
        
        
      `}</style>   
      
      
      
    </>
  )
}

export default Header


