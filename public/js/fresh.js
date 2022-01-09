// //* this is function for fetching the urls..//
// async function FetchFun() {
// 	let res = await fetch("http://localhost/images");
// 	res = await res.json();
// 	// console.log("this the fetching ...", res);
// 	let images = res.images;
// 	return images;
// }
// //* it return the raw images object we can iterate it further..
// //* creating an empty html  to get the value outside
// var html = "";
// //!this is function ever filteration is happening
// async function getVal() {
// 	const img = await FetchFun();
// 	img.forEach(element => {
// 		if (element.blog) {
// 			let validrep = element.blog.subject;
// 			if (validrep != validrep.subject) {
// 			}
// 		}
// 	});
// }

// getVal();
async function fetcher() {
	let responses = await fetch("http://localhost/images");
	responses = await responses.json();
	return responses;
}
var subcopy = ""; // empty string
const response = async () => {
	const responses = await fetcher(); //fetcher is the function for fetching db

	const subhtml = "";
	var html = ""; //empty html
	responses.images.forEach(element => {
		//for each to iterate the json

		if (element.blog && element.blog.subject) {
			var data = element.blog; //data is an object having details about subject,content and desc..
			let src = "/img/designbig.jpg";
			let location = data.img;
			let newval = data.subject;
			if (newval.value != data.subject) {
				html += news;
			}
			subcopy = data.subject;
		}

		subhtml.innerHTML = html;
	});
};
// function change(value) {
// 	console.log(value);
// 	let cards = document.getElementById("img").removeAttributeNode;
// 	let card = document.getElementById("cardry");
// 	card.style.backgroundColor = `${value}`;
// }

window.onload = response;
let clicks = document.getElementById("subject");
clicks.addEventListener("click", async keys => {
	let news = document.getElementById("span");
	var subject = document.getElementById("subjective").innertext;
	console.log("subject-:", subcopy);
	news.style.display = "none";
	const hide = document.getElementById("hide");
	hide.style.display = "none";

	newres();
});
let div = document.getElementById("div");
var display = "";
const newres = async () => {
	const letres = await fetcher();
	let vlog = letres.images;
	vlog.forEach(element => {
		let fresh = element.blog;
		if (fresh != undefined) {
			if (fresh.subject == fresh.subject) {
				var puthtml = `<div class="card" style="width: 18rem;">
<img src=${fresh.img} class="card-img-top" alt="...">
<div class="card-body">
<h6 class = "card-title">${fresh.date}</h6>
  <p class="card-text">${fresh.description}</p>
</div>
</div>`;
			}
		}
		display = puthtml;
	});
	let div = document.getElementById("div");
	div.innerHTML = display;
};
onclick = "getdata('Parameter ${filterData.subject}')";
