import { useEffect, useState } from 'react'




function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
  return x;
}

function EmiCalculator() {
  // const [count, setCount] = useState(0)
  const [downPayment, setDownPayment] = useState(0);
  const [interestRate, setInterestRate] = useState(10)
  const [assests, setAssests] = useState(100000);
  const [processingFee, setProcessingFee] = useState(0);
 
  const [totalLoanAmount, setTotalLoanAmount] = useState(10)
  const [months, setmonths] = useState(12);

  const tenure = [12, 24, 36, 48, 60];


  useEffect(() => {
    const generteCost = () => {
     
      let monthlyInterestRate = (+interestRate)/12;
      monthlyInterestRate = monthlyInterestRate/100;

      console.log(monthlyInterestRate)

      let num = (+assests-downPayment) * (+monthlyInterestRate) * Math.pow((+(1+monthlyInterestRate)), months);
      let den = Math.pow((+(1+monthlyInterestRate)), months)-1; 
      // console.log(num, den);
      setTotalLoanAmount(Math.floor((+num)/(+den)));
      // console.log(totalLoanAmount)
    }
    generteCost();  
    // console.log(totalLoanAmount)
   
  }, [months, interestRate, processingFee, assests, downPayment])

  

  return (
    <div style={{width:500}}>
      <h1>Emi Calculator</h1>
      <div>
        <p>TotalCost of Assest</p>
        <input onChange={(e) => setAssests(e.target.value)} value={assests} style={{width:500}} type='number' />
      </div>

      <div>
        <p>Interest Rate (in %)</p>
        <input onChange={(e) => setInterestRate(e.target.value)} value={interestRate} style={{width:500}} min={1} max={100} type='range' />
        <div style={{width:500, display:'flex', justifyContent:'space-between' }}>
            <span>1%</span>
            <span> {interestRate} %</span>
            <span>100%</span>
          </div>
      </div>

      <div>
        <p>Processing Fee (in %)</p>
        <input onChange={(e) => setProcessingFee(e.target.value)} value={processingFee} style={{width:500}} min={0} max={100} type='range' />
        <div style={{width:500, display:'flex', justifyContent:'space-between' }}>
            <span>0%</span>
            <span> {processingFee} %</span>
            <span>100%</span>
          </div>
      </div>

      <div >
        <h2>Down Payment</h2>
        <p>Total Down Payment : ₹ {parseInt(downPayment) + Math.floor((assests*processingFee)/100)}</p>
        <div style={{width:500}}>
          <input onChange={(e) => setDownPayment(e.target.value)} value={downPayment} style={{width:500}}  min = {0} max={assests} type='range' />
          <div style={{width:500, display:'flex', justifyContent:'space-between' }}>
            <span>0%</span>
            <span>₹ {downPayment}</span>
            <span>100%</span>
          </div>
        </div>
      </div>


      <div >
        <h2>Loan Per Month  ₹ {numberWithCommas(totalLoanAmount)}</h2>
        <p>Total Loan amount : ₹ {numberWithCommas(totalLoanAmount*months)}</p>
      </div>

    <br />

      <div style={{width:500, display:'flex', justifyContent:'space-between' }} >
        <p>Tenure</p>
        {tenure.map((val, ind) => {
          return (
            <button style={val==months ? {backgroundColor:'grey'} : {}}onClick={() => setmonths(val)} key={ind}>{val}</button>
          )
        })
        }
      </div>

    </div>
  )
}

export default EmiCalculator
