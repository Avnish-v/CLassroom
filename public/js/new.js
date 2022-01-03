async function fetcher() {
	let responses = await fetch("http://localhost/images");
	responses = await responses.json();
	return responses;
}
var subcopy = ""; // empty string
const response = async () => {
	const responses = await fetcher(); //fetcher is the function for fetching db

	const subhtml = document.getElementById("subject");
	var html = ""; //empty html
	responses.images.forEach(element => {
		//for each to iterate the json

		if (element.blog && element.blog.subject) {
			var data = element.blog; //data is an object having details about subject,content and desc..
			let src = "/img/designbig.jpg";
			let location = data.img;
			let newval = data.subject;
			if (newval.value != data.subject) {
				let news = `<div  class="d-flex flex-row flex-wrap justify-content-lg-around">
<div class="card m-4 " id = "cardry" style="width:15rem;">
<embed src=${src} type="" class = "d-flex flex-row flex-wrap justify-content-lg-around">
<div class="card-body">
<h5 class="card-title subject" id = "subjective">${data.subject}</h5>
<input type="text" name="" id="val" style="display: none;">
<p class="card-text">${data.description}</p>
<a class="btn btn-danger click" id = "helloworld">click</a>
</div>
</div>
</div>`;
				html += news;

				subcopy = data.subject;
			}
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
	news.style.display = "none";
	var subject = document.getElementById("subjective").innertext;
	console.log("subject-:", subcopy);
	newres();
});
let divas = document.getElementById("divas");
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
		display += puthtml;
	});
	let divas = document.getElementById("divas");
	divas.innerHTML = display;
};

// event();
