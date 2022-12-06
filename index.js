
const name = document.getElementById('userName');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const file = document.getElementById('file');
const dob = document.getElementById('dob')
function validation(e) {
//  validation of name field 
     if (!/^[a-zA-Z_]*$/.test(userName.value)) {
        alert('invalid name');   

    }
    else if (startDate.value >= endDate.value) {
        alert("The dates are not correct")
        // return false
    }
    else    if(dob.value>=startDate.value){
        alert("please enter the correct birth Date")
    }
    else {
        const myFormData = {};
        myFormData.name = `${userName.value}`;
        myFormData.dateOfBirth = `${dob.value}`;
        myFormData.startDate = `${startDate.value}`;
        myFormData.endDate = `${endDate.value}`;
        myFormData.file = `${file.value}`;
        console.log(myFormData)
        let jsonFormat = JSON.stringify(myFormData);
        console.log(jsonFormat);
        // Saved to local storage
        localStorage.setItem('', jsonFormat);
        //printin message
        let pre = document.querySelector('#message');
        pre.textContent = '\n' + jsonFormat
        alert("the data is added")
    }

}


document.getElementById('btn').addEventListener('click', validation);