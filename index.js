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
        const elements = document.querySelectorAll('.usableArea');
        elements.forEach(element => {
            element.style.background= 'none';        
            element.style.setProperty("--content", "' '");
        });
        const element = elements[index];
        element.style.background= 'rgb(231, 231, 231)';        
        element.style.setProperty("--content", "'✔'");
        const paragraph = element.lastElementChild;
        const value =  paragraph.innerHTML;
        console.log(value);
}

const uploadFile = () => {
    const input =  document.getElementById('upload-file');
    let file = input.files[0];
    let fileSize = file.size/1000;
    if(file.size > 25000000){
        alert('file cannot be greater than 25 MB')
    }
        fileSize = fileSize + " KB";
    document.getElementById('file-name').innerHTML = file.name;
    document.getElementById('file-size').innerHTML = fileSize;
    const closeElement = document.getElementById('close-file');
          closeElement.style.cursor = 'pointer'
          closeElement.innerHTML = 'X';
    closeElement.addEventListener('click', () => {
        closeElement.innerHTML = null;
        document.getElementById('file-name').innerHTML = null;
        document.getElementById('file-size').innerHTML = null;
    })
}