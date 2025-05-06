import { useEffect, useState } from "react";
import "../component/Emitable.css";

function Emitable({ loanamount, interestrate, term }) {
  const [cur, setCur] = useState("USD");
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = (P, R, N) => {
    const monthlyRate = R / 12 / 100;
    return P && R && N
      ? (P * monthlyRate * Math.pow(1 + monthlyRate, N)) /
          (Math.pow(1 + monthlyRate, N) - 1)
      : 0;
  };
  useEffect(()=>{
    const monthlyRate = interestrate / 12 / 100;
    let balance = loanamount;
    const emi = calculateEMI(loanamount, interestrate, term);
    const scheduleData = [];

    for (let month = 1; month <= term; month++) {
      const interest = balance * monthlyRate;
      const principal = emi - interest;
      balance -= principal;

      scheduleData.push({
        month,
        principal: principal.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : "0.00",
      });
    }

    setSchedule(scheduleData);
  },[loanamount,interestrate,term]);
  
  return (
    <div>
      <p className="fw-bold fs-4 mt-3">
        Monthly EMI: ${calculateEMI(loanamount, interestrate, term).toFixed(2)}
      </p>
      <div className="row mt-4">
        <fieldset className="col-1 border rounded p-2 h-100">
          <legend className="float-none w-auto fs-6 mb-0">Currency</legend>
          <select name="cur" id="cur" className="border-0" value={cur} onChange={(e) => setCur(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
          </select>
        </fieldset>
        <div className="col-10"></div>
        <button className="col-1 justify-content-end align-items-end rounded border-2 reset-but" onClick={() => setSchedule([])}>
          RESET TABLE
        </button>
      </div>
      <div className="mt-4">
      <p className="fs-3">Amortization Schedule ({cur})</p>
        {schedule.length > 0 ? (
          <table className="table cal-table">
            <thead>
              <tr>
                <th scope="col" className="text-start">Month</th>
                <th scope="col" className="text-center">Principal</th>
                <th scope="col" className="text-center">Interest</th>
                <th scope="col" className="text-end">Remaining Balance</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {schedule.map((row) => (
                <tr key={row.month}>
                  <td className="text-start">{row.month}</td>
                  <td className="text-center">{row.principal} {cur}</td>
                  <td className="text-center">{row.interest} {cur}</td>
                  <td className="text-end">{row.balance} {cur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
            <p></p>
        )}
      </div>
    </div>
  );
}

export default Emitable;
