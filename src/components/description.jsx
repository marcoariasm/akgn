import React from "react";

export const Description = (props) => {
  return (
    <div id="description">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/recojo-residuos.png" className="img-rounded img-responsive rounded" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
          <h2 className="text-description">Recojo de residuos sólidos hospitalarios</h2>
            <div className="description-text">
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div> 
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
