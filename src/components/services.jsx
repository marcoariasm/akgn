import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <hr className="title-line"/>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className="row service-frame">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <div className="service-frame-item">
                  <img src={d.imageSrc} alt="service" width="275" height="auto" className="service-img"/>
                    <h3 className="service-descr">{d.name}</h3>
                    {/* <p>{d.text}</p> */}
                  <hr className="title-line"/>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
