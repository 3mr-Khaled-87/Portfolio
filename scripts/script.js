let menue = document.getElementById("menue")
let sidebar = document.getElementById("sidebar")
menue.addEventListener("click" , ()=> {
    let sidebarWidth = sidebar.offsetWidth;

    sidebar.classList.toggle("sidebar-active")

    if(sidebar.classList.contains("sidebar-active")){
        menue.classList.remove("bi-arrow-right-square-fill")
        menue.classList.add("bi-arrow-left-square-fill")
        menue.style.marginLeft = sidebarWidth + 2 + "px"
    }else{
        menue.classList.remove("bi-arrow-left-square-fill")
        menue.classList.add("bi-arrow-right-square-fill")
        menue.style.marginLeft = "0"
    }
})
////////////////Typed Function/////////////////////

    var typed = new Typed('#element', {
        strings: ['Html.', ' Css.', 'Java Script.' , 'Vue.'],
        typeSpeed: 50,    // سرعة الكتابة (بالميلّي ثانية)
        backSpeed: 30,    // سرعة الحذف
        loop: true        // تكرار الحذف والكتابة بشكل لانهائي
    });

