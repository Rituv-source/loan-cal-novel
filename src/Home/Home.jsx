import { useState } from "react";
import "../Home/Home.css";
import Emitable from "../component/Emitable";

function Home() {
  const [loanamount,setLoanAmount]=useState('');
  const [interestrate,setinterestrate]=useState('');
  const [term,settrem]=useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };
  return (
        <div className="p-4 ms-5 mt-4 me-5">
          <p className="fs-2">Loan Calculator Dashboard</p>
          <form onSubmit={handleSubmit}>
      <div className="d-flex gap-3 g-3 align-items-end">
        <div className="col-md-4 w-50">
          <fieldset className="border rounded p-2 h-100">
            <legend className="float-none w-auto fs-6 mb-0">Loan Amount</legend>
            <input type="text" name="loanamount" id="loanamount" className="form-control border-0 input-cell"  value={loanamount} onChange={(e) => setLoanAmount(e.target.value)}/>
          </fieldset>
        </div>
        <div className="col-md-4 w-50">
          <fieldset className="border rounded p-2 h-100">
            <legend className="float-none w-auto fs-6 mb-0">Interest Rate (%)</legend>
            <input type="text" name="interestrate" id="interestrate" className="form-control input-cell border-0"  value={interestrate} onChange={(e) => setinterestrate(e.target.value)}/>
          </fieldset>
        </div>
        <div className="col-md-4 w-50">
          <fieldset className="border rounded p-2 h-100">
            <legend className="float-none w-auto fs-6 mb-0">Term (Years)</legend>
            <input type="text" name="term" id="term" className="form-control input-cell border-0"  value={term} onChange={(e) => settrem(e.target.value)}/>
          </fieldset>
        </div>
      </div>
      <button className="cal-btn mt-4 rounded border-0 p-2">CALCULATE</button>
    </form>
   { submitted ? (
    <Emitable loanamount={parseFloat(loanamount)} interestrate={parseFloat(interestrate)} term={parseInt(term) * 12}/>):(<p></p>)}
    </div>
  );
}

export default Home;
