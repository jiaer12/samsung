const nav = document.getElementById('nav')
const navExtendedClassName = 'nav-container-extended'
const btn = document.getElementById('btn-toggle')
btn.addEventListener('click',()=>{
    if(nav.className.includes(navExtendedClassName)){
        // 收起目录栏
        nav.classList.remove(navExtendedClassName)
    }else {
        // 展开目录栏
        nav.classList.add(navExtendedClassName)
}},false)

function back() {

}

const backtopBtn1 = document.getElementById('backtop1-btn')
const backtopBtn2 = document.getElementById('backtop2-btn')
backtopBtn1.addEventListener('click',()=>{
    const timer = setInterval(()=>{
        document.documentElement.scrollTop -= 30;
    })
    setTimeout(()=>{
        clearInterval(timer)
    },600)
})
backtopBtn2.addEventListener('click',()=>{
    const timer = setInterval(()=>{
        document.documentElement.scrollTop -= 30;
    })
    setTimeout(()=>{
        clearInterval(timer)
    },600)
})

