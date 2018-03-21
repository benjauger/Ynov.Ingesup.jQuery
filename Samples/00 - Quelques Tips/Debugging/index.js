hljs.initHighlightingOnLoad();

function onAlertClick() {
	for (var i = 0; i < 3; i++) {
		alert(i);
	}
}

function onLogClick() {
	for (var i = 0; i < 3; i++) {
		console.log(i);
	}
}

function onDebuggerClick() {
	debugger;
	for (var i = 0; i < 3; i++) {
		continue;
	}
}

function onDirClick() {
	var person = {
		name: 'Mr. Debug',
		age: 21,
		happy: true
	};
	
	console.dir(person);
}
