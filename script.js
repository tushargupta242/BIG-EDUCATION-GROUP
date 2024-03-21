window.addEventListener('scroll',() =>
{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
}
)



const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() =>
    {
        faq.classList.toggle('open')
        const icon = faq.querySelector('.faq_icon i');
if(icon.className === 'bx bx-plus')
{
    icon.className = "bx bx-minus";
}
else
{
    icon.className = "bx bx-plus"
}
    })
})

let valueDispalys = document.querySelectorAll(".num");
let interval = 2000;
valueDispalys.forEach((valueDispaly) => {
    let startValue = 0;
    let endValue = parseInt(valueDispaly.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function()
    {
        startValue += 1;
        valueDispaly.textContent = startValue;
        if(startValue == endValue)
        {
            clearInterval(counter);
        }
    },duration);    
    });

 


