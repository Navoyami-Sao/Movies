window.addEventListener("DOMContentLoaded", ()=>{
    const tabsParent = document.querySelector(".tabheader__items"),
    tabs  = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent")
    loader = document.querySelector(".loader")


    setTimeout(()=>{
        loader.style.opacity = "0"
        setTimeout(()=>{
          loader.style.display = "none"
        },500)
      },2000)

    function hideTab(){
       tabContent.forEach((item)=>{
        item.style.display = "none"
       }) 
       tabs.forEach((item)=>{
        item.classList.remove("tabheader__item_active")
       })
    }

    function showTab(i = 0){
        tabContent[i].style.display = "block"
        tabs[i].classList.add("tabheader__item_active")
    }

    hideTab()
    showTab()

    tabsParent.addEventListener("click" , (i)=>{
        const target = i.target;
        if(target && target.classList.contains("tabheader__item")){
            tabs.forEach((item , index) =>{
                if(target == item){
                    hideTab()
                    showTab(index);
                    console.log(index);
                }
            })
        }
    })


    let modal = document.querySelector(".modal")
        close = document.querySelector(".modal__close")
        openModal = document.querySelectorAll("[data-btn]")

    function showModal(){
        modal.classList.add("show")
        modal.classList.remove("hide")
        document.body.style.overflow = "hidden"
        clearInterval(modalTimer)
    }


    function closeModal(){
        modal.classList.add("hide")
        modal.classList.remove("show")
        document.body.style.overflow = ""
    }

    openModal.forEach((item)=>{
        item.addEventListener("click" , showModal)
    })

    close.addEventListener("click" , closeModal)

    modal.addEventListener("click" , (e)=>{
        if(e.target === modal){
            closeModal()
        }
    })

    document.addEventListener("keydown" , (e)=>{
        if(e.code == ["Escape"]){
            closeModal()
        }
    })


    const modalTimer = setTimeout(showModal, 5000)



    function showModalscroll(){
        if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            showModal()
            window.removeEventListener("scroll",showModalscroll)
        }
    }
    window.addEventListener("scroll", showModalscroll)
    
})