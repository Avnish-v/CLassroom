// const { json } = require("body-parser");

const functionFetch = async () => {
	var response = await fetch("http://localhost/images");
	response = await response.json();
	return response.images;
};
var html = " ";
let empty = "";
// var condition = async()=>{
// 	let response = await functionFetch();
// 	response.forEach(element => {
// 		let data = element.blog;

// 	});

// }
async function populate() {
	const response = await functionFetch();
	response.forEach(element => {
		if (element.blog) {
			let filterData = element.blog;
			param = filterData.subject;
			let BgSrc = "/img/designbig.jpg";
			var DYHtml = `<div  class="d-flex flex-row flex-wrap justify-content-lg-around" id= "hide">
<div class="card m-4 " id = "cardry" style="width:15rem;">
<embed src=${BgSrc} type="" class = "d-flex flex-row flex-wrap justify-content-lg-around">
<div class="card-body">
<h5 class="card-title subject" id = "subjective" )">${filterData.subject}</h5>
<input type="text" name="" id="val" style="display: none;">
<p class="card-text">${filterData.description}</p>
<a class="btn btn-danger click" id = "helloworld" onclick="getdata('${param}')">click</a>
</div>
</div>
</div>`;
		}
		html += DYHtml;
	});

	var Blankhtml = document.getElementById("subject");
	Blankhtml.innerHTML = html;
}
window.onload = populate;

//problem in code
/*
1.jo dynamically html h  usme ka subjective isme accessable nhi h agar wo access hota h toh direct value mil sakte h... (shyad)
2. we have to sort the data according to the onclick event
3. we have to stop showing the duplicate subject in frontened.........
*/
