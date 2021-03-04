function refreshIFrame() {
    var x = document.getElementById("embed_git");
    x.contentWindow.location.reload();
    var t = setTimeout(refreshIFrame, 3000);
}