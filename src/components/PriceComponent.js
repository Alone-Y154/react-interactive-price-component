import { useState } from "react";
import "./priceComponent.css";



export const PriceComponent = () => {

    const [amount,setAmount] = useState(16);
    const [value,setvalue] = useState(2);
    const [bill,setBill] = useState(true);
    const [month,setMonth] = useState(["8","12","16","24","36"])
    // const [year,setYear] = useState(["72","108","144","216","324"])
    const [views,setViews] = useState(["10K" , "50K" , "100K" , "500K" , "1M"])
    const [initial ,setInitial] = useState("100K")

    const handleRange = (e) => {
        setViews(["10K" , "50K" , "100K" , "500K" , "1M"])
        setMonth(["8","12","16","24","36"])
        setvalue(e.target.value);
        console.log("value change" , e.target.value)
        if(bill) {
            setAmount(month[e.target.value])
            setInitial(views[e.target.value])
        }else {
            setAmount(month[e.target.value] * 9)
            setInitial(views[e.target.value])

        }
        
        
    }

    const handleCheckBox = (e) => {
        if(e.target.checked){
        setAmount(amount * 9);
        setBill(false)
        }else {
            setAmount(amount/9);
        setBill(true)
        }
    }
    
    return(
        <div className="container">
        <div className="content">
          <div className="top">
            <p className="top-heading">Simple, traffic-based pricing</p>
            <p className="top-para">Sign-up for our 30-day trial. No credit card required. </p>
          </div>
          <div className="btm">
            <div className="btm-top">
              <p className="page-views">{initial} PAGEVIEWS</p>
              <p className="amount-month"><span className="amount">${amount}.00</span>  <span className="month">/ {bill ? "month" : "year"} </span>  </p>
            </div>
    
            <div className="input-range">
              <input type="range" name="" min="0" max="4" step="1" value={value} onChange={handleRange}  />
            </div>
    
            <div className="input-checkbox">
              <p className="m-bill">Monthly Billing</p>
              <input id="checkbox" onChange={handleCheckBox} type="checkbox" name="checkbox"  />
    
              <label for="checkbox">
              </label>
              <p className="y-bill">Yearly Billing</p>
              <span> 25% discount </span>
            </div>
    
            <hr />
    
            <div className="trail">
              <div className="trail-left">
                <p> <img src="images/icon-check.svg" alt="" /> <span>Unlimited websites</span> </p>
                <p> <img src="images/icon-check.svg" alt="" /> <span>100% data ownership </span> </p>
                <p> <img src="images/icon-check.svg" alt="" /> <span>Email reports</span> </p>
              </div>
    
              <div className="trail-right">
                <button type="button" name="button">Start my trail</button>
              </div>
            </div>
          </div>
    
        </div>
    
      </div>
    
    )
}