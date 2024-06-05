function getFormvalue() {
    //Write your code here
	const firstName = document.getElementById('firstname'.value);

	const lastName = document.getElementById('firstname'.value);

	const lastNameParts = lastName.split('');
	let middleName = '';
	if(lastNameParts.length>1){
		middleName = lastNameParts.slice(0,-1).join('');
		lastName = lastNameParts[lastNameParts.length-1];
	}
	id(middleName !== ''){
		alert(`${firstName} ${middleName} ${lastName}`);
	}else{
		alert(`${firstName} ${lastName}`);
	}
}
