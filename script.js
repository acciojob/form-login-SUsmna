function getFormvalue() {
    //Write your code here
	const form = document.querySelector('form1');
    

    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;

 
    const fullName = ${firstName} ${lastName};

   
    alert(fullName);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    getFormvalue(); 
});
}
