document.addEventListener("DOMContentLoaded",()=>{new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var e=document.getElementById("hours__chart").getContext("2d");new Chart(e,{type:"bar",data:{labels:["","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],datasets:[{barPercentage:1,categoryPercentage:1,label:"",borderRadius:100,data:[3,5,5,4,1,2,4,8,7,6.5,5,4.5,4,2,3,5,4,7,6,7,7,5,5,4,6,5,4,3,2],backgroundColor:["rgba(255, 197, 155, 1)","rgba(248, 140, 108, 1)","rgba(248, 140, 108, 1)","rgba(248, 140, 108, 1)","rgba(255, 197, 155, 1)","rgba(255, 197, 155, 1)","rgba(248, 140, 108, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(248, 140, 108, 1)","rgba(248, 140, 108, 1)","rgba(248, 140, 108, 1)","rgba(255, 197, 155, 1)","rgba(255, 197, 155, 1)","rgba(248, 140, 108, 1)","rgba(255, 197, 155, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(248, 140, 108, 1)","rgba(248, 140, 108, 1)","rgba(230, 78, 33, 1)","rgba(230, 78, 33, 1)","rgba(248, 140, 108, 1)","rgba(255, 197, 155, 1)","rgba(255, 197, 155, 1)","rgba(255, 197, 155, 1)"]}]},options:{scales:{x:{categoryPercentage:1,barPercentage:1,display:!1,grid:{display:!1}},y:{display:!1,beginAtZero:!0,grid:{display:!1}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},labels:{display:!1}}}});const a=document.querySelector(".form__modal"),r=document.querySelector(".form__modal_open"),t=document.querySelector(".form__modal_close");r.addEventListener("click",()=>{a.classList.toggle("_hide")}),t.addEventListener("click",()=>{a.classList.toggle("_hide")});const g=document.querySelector(".hamburger"),o=document.querySelector(".header__menu_wrap");g.addEventListener("click",()=>{g.classList.toggle("open"),o.classList.toggle("header__menu_wrap_open"),document.body.classList.toggle("_hidden")})});