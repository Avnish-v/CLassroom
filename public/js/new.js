const response = async () => {
	const rs = await fetch("http://localhost/images").then(rs => rs.json());

	const subhtml = document.getElementById("subject");
	var html = "";
	rs.images.forEach(element => {
		let a = element.blog;

		for (const key in a) {
			let src = "/img/designbig.jpg";
			let c = a.img;
			if (a.subject != null) {
				if (a.subject  === ) {
					let news = `
					<div class="card my-2 m-2 p-0 " style="width:16rem;">
	  <img src=${src} class="card-img-top" alt="...">
	  <div class="card-body">
		<h5 class="card-title">${a.subject}</h5>
		<p class="card-text"></p>
		<a href="#" class="btn btn-primary">click</a>
	  </div>
	</div>`;
				}
				html += news;
			}
		}
		subhtml.innerHTML = html;
	});
};
window.onload = response;
