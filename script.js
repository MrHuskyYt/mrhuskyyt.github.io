function reload() {
    document.getElementById('embed_div').src += '';
}
embed_div.onclick = reload();