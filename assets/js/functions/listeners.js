var pageIndex = 0
var pages = document.querySelectorAll(".page");

var hidePage = () =>{
    for (let index = 1; index < pages.length; index++) {
        const page = pages[index];
        page.style.display = "none"
    }
}

var initPage = ()=>{
    hidePage()
}

var showPage = (index) =>{
    let lastPageIndex = pageIndex;
    pageIndex = index % pages.length;
    pages[lastPageIndex].style.display = "none"
    pages[pageIndex].style.display = "block"

}