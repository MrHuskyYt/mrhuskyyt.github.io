const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const document_url = urlParams.get('d')

if (String(document_url) != ''){
    const mdUrl = document_url
    viewDoc(mdUrl, 'root')
}

function viewDoc(url, element){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        const data = this.response
        document.getElementById(element).innerHTML = marked(data);
    }

    xhr.send();
}
