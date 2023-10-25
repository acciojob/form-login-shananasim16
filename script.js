const form = document.getElementById("form1")

function getFormvalue(){
	// event.preventDefault();
	alert(form.elements["fname"].value+" "+form.elements["lname"].value)
}