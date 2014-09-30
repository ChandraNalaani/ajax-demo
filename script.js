var request = new XMLHttpRequest();

request.open('GET', 'data.txt');
request.send();
if (request.status===200) {
	console.log(request);
	document.writeln(request.responseText);
}
