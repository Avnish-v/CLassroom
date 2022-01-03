//* this is function for fetching the urls..//
async function FetchFun() {
	let res = await fetch("http://localhost/images");
	res = await res.json();
	// console.log("this the fetching ...", res);
	let images = res.images;
	return images;
}
//* it return the raw images object we can iterate it further..
//* creating an empty html  to get the value outside
var html = "";
//!this is function ever filteration is happening
async function getVal() {
	const img = await FetchFun();
	img.forEach(element => {
		if (element.blog) {
			let validrep = element.blog.subject;
			if (validrep != validrep.subject) {
			}
		}
	});
}

getVal();
