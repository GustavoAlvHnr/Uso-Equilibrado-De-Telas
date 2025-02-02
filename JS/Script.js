function toggleSidebar(){
    var sidebar = document.getElementById("sidebar");
    sidebar.style.right = (sidebar.style.right === "0px") ? "-270px" : "0px"
}
document.addEventListener("click", function(event){
    var sidebar = document.getElementById("sidebar");
    var menuBtn = document.querySelector(".menu-btn");

    if( !sidebar.contains(event.target) && !menuBtn.contains(event.target)){
        sidebar.style.right = "-270px";
    }
})