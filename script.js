function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById('form1'.value);

	const lastName = document.getElementById('form1'.value);
	const lastNameParts = lastName.split('');
	let middleName = '';
	if(lastNameParts.length>1){
		middleName = lastNameParts.slice(0,-1).join('');
		lastName = lastNameParts[lastNameParts.length-1];
	}
	if(middleName !== ''){
		alert(`${firstName} ${middleName} ${lastName}`);
	}else{
		alert(`${firstName} ${lastName}`);
	}
}
