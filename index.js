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

const usableArea = (index) => {
        const elements = document.querySelectorAll('.usableArea')
        const element = elements[index];
        element.style.background= 'rgb(231, 231, 231)';        
        element.style.setProperty("--content", "'✔'");
        const paragraph = element.lastElementChild;
        const value =  paragraph.innerHTML;
        console.log(value);
}