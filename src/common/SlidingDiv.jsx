import React from 'react';
 const images = [
    {img: './heroImage.jpg'},
     {img: './heroImage.jpg'},
     {img: './heroImage.jpg'},
     {img: './heroImage.jpg'},
     
 ]
const SlidingDiv = ({direction}) => {
  return (
    <div className="moving-div-container">


      <div className={direction === "left" ? "moving-div" : "moving-div-right"}>
       {images.map((data, index) => {
        return(

        <div key={index}  className='galimg-con'>
            <img src={data.img} alt='' />
        </div>
        )
       } ) }
        
       
      </div>
     
      <div className={direction === "left" ? "moving-div" : "moving-div-right"}>
       {images.map((data, index) => {
        return(

        <div key={index} className='galimg-con'>
            <img src={data.img} alt='' />
        </div>
        )
       } ) }
        
       
      </div>
    </div>
  );
};

export default SlidingDiv;