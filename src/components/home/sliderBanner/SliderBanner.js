import React, { useState, useEffect, useCallback } from "react";


import image1 from "../../../images/rooster.jpg"
import image2 from "../../../images/form.jpg";
import image3 from "../../../images/galli.jpg";

import './sliderbanner.css'
const SliderBanner = () => {
  const data = [{ img: image1 }, { img: image2 }, { img: image3 }];
  const [current, setCurrent] = useState(0);
  const length = data.length;


 
  const autoplay = useCallback(() => {
 
      setCurrent(current === length - 1 ? 0 : current + 1);
 

  }, [current, length]);

  useEffect(() => {
    const handleAutoplay = setInterval(autoplay, 6000);
    return () => clearInterval(handleAutoplay);
  }, [autoplay]);


  return (
    <div className="autoplay-slider">
      {data.map((item, index) => {
        return (
          <div className={index === current ? "autoplay-active" : "autoplay-slide"} key={index}>
            {index === current && (
              <>
                <img src={item.img} alt="foto" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};



export default SliderBanner
