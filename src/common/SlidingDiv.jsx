import React from 'react';
 const images = [
    {img: './moment.jpg'},
     {img: './moment1.jpg'},
     {img: './moment2.jpg'},
     {img: './moment8.jpg'},
     {img: './moment7.jpg'},
     {img: './moment5.jpg'},
     {img: './moment1.jpg'},
     {img: './moment7.jpg'},
     
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