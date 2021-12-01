import axios from "axios";
import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";
import "./News.css";

export const Newsfeed = () => {
  const validate = () => {
    var reg =
      "(?:s+|)((0|(?:(+|)91))(?:s|-)*(?:(?:d(?:s|-)*d{9})|(?:d{2}(?:s|-)*d{8})|(?:d{3}(?:s|-)*d{7}))|d{10})(?:s+|)";
    var phone = document.getElementById("tele");
    var OK = reg.match(phone);
    if (!OK) {
      window.alert("phone number isn't  valid");
    } else {
      window.alert("phone number is  valid");
    }
  };
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [postPerP, setPostPerP] = useState(6);
  const showform = () => {
    setChecked(!checked);
    if (checked === false) {
      document.getElementById("mmain").style["width"] = "50vw";
      document.getElementById("mmain2").style["filter"] = "blur(5px)";
    } else {
      document.getElementById("mmain").style["width"] = "20vw";
      document.getElementById("mmain2").style["filter"] = "blur(0px)";
    }
  };
  const changeview = () => {
    setChecked2(!checked2);
    if (checked2 === true) {
      document.getElementById("mmain2").style["display"] = "grid";
      for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("card")[i].style["width"] = "15vw";
        document.getElementsByClassName("card")[i].style["height"] = "31vh";
      }
    } else {
      document.getElementById("mmain2").style["display"] = "block";
      for (var i = 0; i < 6; i++) {
        document.getElementsByClassName("card")[i].style["width"] = "50vw";
        document.getElementsByClassName("card")[i].style["height"] = "10vh";
        document.getElementsByClassName("card")[i].style["margin-bottom"] =
          "1vh";
      }
    }
  };
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=5c83c765602d48e6b0301df05995060d"
      )
      .then((res) => setData(res.data.articles))
      .catch();
  }, []);
  // console.log(data);
  const ioflast = currPage * postPerP;
  const ioffirst = ioflast - postPerP;
  const currData = data.slice(ioffirst, ioflast);
  const pageNo = [];
  pageNo.push(1);
  pageNo.push(2);
  pageNo.push(3);
  const paginate = (number) => {
    setCurrPage(number);
  };
  return (
    <div className="main">
      <div className="main3" id="mmain2">
        {currData.map((value, index) => {
          return (
            <>
              <a href={value.url}>
                <div className="card">
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              </a>
            </>
          );
        })}
      </div>
      <div>
        <ul className="pages">
          {pageNo.map((number) => {
            return (
              <li key={number}>
                <button onClick={() => paginate(number)}>{number}</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="main2" id="mmain">
        <div className="reader grid1">
          <h4>Hi, Reader,</h4>
          <p>Here's your news!</p>
        </div>
        <div className="toggle grid2">
          <h4>View Toggle</h4>
          <label className="switch">
            <input type="checkbox" onClick={changeview} />
            <span className="view"></span>
          </label>
        </div>
        <div className="feedback grid3">
          <h4>Have a Feedback?</h4>
          <div className="button">
            <label className="btn">
              <input type="checkbox" id="show" onClick={showform} />
              <span className="view2"></span>
            </label>
          </div>
        </div>

        {checked === true ? (
          <div className="form grid4" id="fform">
            <h4>Thank you so for providing time!</h4>
            <p>please provide the required details!</p>
            <form action="" className="form2">
              <label htmlFor="fname">First Name:</label>
              <input type="text" name="fname" id="" required />
              <label htmlFor="sname">Second Name:</label>
              <input type="text" name="sname" id="" />
              <label htmlFor="address">Address:</label>
              <textarea name="address" id="" cols="45" rows="4"></textarea>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="abc@abc.com"
              />
              <label htmlFor="phone">Mobile Number:</label>
              <input
                type="tel"
                name="phone"
                id="tele"
                placeholder="+91XXXXXXXXXX"
              />
              <button onClick={validate}>Submit</button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};
