var htmls = "";
var subcopy = "";
const response = async () => {
	const rs = await fetch("http://localhost/images").then(rs => rs.json());

	const subhtml = document.getElementById("subject");
	var html = "";
	rs.images.forEach(element => {
		if (element.blog) {
			var data = element.blog;
			let src = "/img/designbig.jpg";
			let location = data.img;

			let news = `
<div class="card m-4 " id = "card" style="width:15rem;">
<img  src=${src} class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title subject" id = "subjective">${data.subject}</h5>
<input type="text" name="" id="val" style="display: none;">
<p class="card-text"></p>
<a class="btn btn-danger click" id = "hello">click</a>
</div>
</div>`;
			console.log(data.subject[0]);

			subcopy += data.subject;
			html += news;
		}
		subhtml.innerHTML = html;
	});
};
function event() {
	let clicks = document.getElementById("subject");
	clicks.addEventListener("click", keys => {
		// sub = clicks.children;

		let news = document.getElementById("span");
		news.style.display = "none";
		var subject = document.getElementById("subjective").innerText;
		console.log("subject-:", subcopy);
	});
}

event();

window.onload = response;
