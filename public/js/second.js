var htmltwo = " ";
function getdata(events) {
	let heading = (document.getElementById("heading").innerText = events);
	// let value = events;

	let display = document.getElementById("btn");

	display.style.display = "inline";
	display.style.color = "white";
	display.style.fontSize = "large";

	console.log("this is the ", events);
	let hide = document.getElementById("class");
	hide.style.display = "none";
	var put = async () => {
		let response = await functionFetch();
		response.forEach(element => {
			var filterdata = element.blog;

			if (
				element.blog &&
				filterdata.subject === events &&
				filterdata != undefined
			) {
				console.log("this is th most sorted ", element.blog);

				var puthtml = `
				
  
  <div class="card" style="width: 18rem;">
  <embed src="${filterdata.img}" class="card-img-top" type ="" alt="...">
  <div class="card-body">
  <strong>${filterdata.title}</strong>  ${filterdata.date}
    <p class="card-text">${filterdata.description}</p>
  </div>
</div>
  `;
			}
			htmltwo += puthtml;
		});

		let putting = document.getElementById("put");
		putting.innerHTML = htmltwo;
	};
	console.log("this is the html", htmltwo);

	put();
}
