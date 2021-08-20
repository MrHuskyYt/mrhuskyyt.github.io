mainUL = document.getElementById("docs");

function getAllDocuments() {
	const xhr = new XMLHttpRequest();
	const url = `https://api.github.com/repos/acutewoof/docs/contents`;
	xhr.open("GET", url, true);

	xhr.onload = function() {

		const ignore_docs = [
			"LICENSE",
			"README",
			".gitignore"
		];

		const data = JSON.parse(this.response);
		for (let i in data) {
			const name = data[i].name.replace(".md", "");
			if(ignore_docs.includes(name)){
				continue;
			}
			const url = `./d/index.html?d=${data[i].download_url}`;
			mainUL.innerHTML = mainUL.innerHTML + `<li><a href="${url}">${name}</a></li>`
		}
	};
	xhr.send()
}

getAllDocuments() 
