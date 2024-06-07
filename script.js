function getFormvalue() {
    //Write your code here
	var firstName = document.getElementsByName('fname')[0].value;
    var lastName = document.getElementsByName('lname')[0].value;

    var fullName = firstName + " " + lastName;
    alert(fullName);

}
