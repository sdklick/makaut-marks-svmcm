import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  let [tsubject, settsubject] = useState(0);
  let [oddsem, setoddsem] = useState(0);
  let [evensem, setevensem] = useState(0);
  let [stotal, setstotal] = useState();
  let [spercentage, setpercencentage] = useState(0);
  let [obtain, setobtain] = useState(0);

  const formsubmit = (e) => {
    e.preventDefault();
    let totalmark;
    if (tsubject > 0) {
      totalmark = tsubject * 100;
      setstotal(totalmark);
    } else {
      alert("please enter Total subject");
    }

    let ispercentage;

    if (oddsem > 0 && evensem > 0) {
      let percentage = ((Number(oddsem) + Number(evensem)) / 2 - 0.75) * 10;
      ispercentage = percentage;
      setpercencentage(percentage);
    } else if (oddsem <= 0 && evensem <= 0) {
      alert("You enter wrong Even and odd sem cgpa");
    } else {
      alert("Please enter Even and odd sem cgpa");
    }
    if (totalmark === undefined || ispercentage === undefined) {
      setobtain(0);
    } else {
      let obtainmark = (totalmark / 100) * ispercentage;
      setobtain(Math.round(obtainmark));
    }
  };
  return (
    <>
      <h1 className="text-center pt-4">Makaut Calculator For SVMCM</h1>
      <div className="row mt-5">
        <div className="col text-center">
          <form onSubmit={formsubmit}>
            <p>Enter Your Total Subject</p>
            <p>↓↓↓↓↓↓↓</p>
            <input
              onChange={(val) => {
                settsubject(val.target.value);
              }}
              type="number"
              className="border border-success bg-success bg-opacity-10"
            />
            <p className="mt-4">Enter Your CGPA</p>

            <div className="row">
              <div className="col">
                <input
                  onChange={(e) => {
                    setoddsem(e.target.value);
                  }}
                  type="number"
                  step="0.01"
                  className="border border-success bg-success bg-opacity-10"
                  placeholder="Odd Sem cgpa"
                />
              </div>
              <div className="col">
                <input
                  onChange={(e) => {
                    setevensem(e.target.value);
                  }}
                  type="number"
                  step="0.01"
                  className="border border-success bg-success bg-opacity-10"
                  placeholder="Even Sem cgpa"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Submit
            </button>
          </form>
        </div>
        <div className="col">
          <div className="alert alert-primary" role="alert">
            Your Total Mark is {stotal}
          </div>
          {obtain != isNaN() ? (
            <div className="alert alert-info" role="alert">
              Your Obtain Mark is {obtain}
            </div>
          ) : (
            <div className="alert alert-info" role="alert">
              Your Obtain Mark is 0
            </div>
          )}

          {spercentage >= 50 ? (
            <div className="alert alert-success" role="alert">
              Your Percentage is {spercentage}% ✅ You are Eligible For
              Scholarship
            </div>
          ) : (
            <div className="alert alert-danger" role="alert">
              Your Percentage is {spercentage}% ❌ You are Not Eligible For
              Scholarship
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
