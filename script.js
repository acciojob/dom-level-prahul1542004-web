//your JS code here. If required.
let element=documnet.getElementById("level")
let n=0
while (element) {
	n++
	element=element.parentElement
}
alert("The level of the element is "+n)