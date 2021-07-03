const showPaymentMethod = () => {
    document.getElementById('payment-method').style.display = "block"
}

const showBudget = () => {
    document.getElementById('budget').style.display = "block";
    document.getElementById('hours-budget').style.display = 'none';
}

const showHoursBudget = () =>{
    document.getElementById('hours-budget').style.display = 'block';
    document.getElementById('budget').style.display = "none"
}