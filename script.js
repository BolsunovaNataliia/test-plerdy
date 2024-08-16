function getSliderContent() {
const slides = [{
    title: 'You will benefit from our SaaS marketing product',
    content: 'Our team has developed a powerful tool to audit website content – a heatmap that features more than 100 reports for e-marketers and business owners.'
}, {
    title: 'We have 10+ years of experience in digital marketing',
    content: 'The Plerdy team has rich experience in auditing, analyzing, and improving eCommerce websites to boost their conversion rates. So we are well aware of all the weak spots of eCommerce websites and know what data you need to run a usability audit of your website.'
}, {
    title: 'We enable generating hypotheses about what leads to low website conversions',
    content: 'Thanks to the data gathered with the Plerdy heatmap about your website visitors’ behavior, you can generate hypotheses that potentially explain which functional flaws and problems are causing a low conversion on your website and how.'
}, {
    title: 'The analysis of the dynamic elements of the website',
    content: 'Some services disregard such an important aspect as the clickability analysis of the dynamic elements when UX auditing, including drop-down menu, pop-up, and slider. However, thanks to the unique Plerdy auditing functionality, you will receive this information.'
}, {
    title: 'The analysis of both the desktop and mobile versions of the website',
    content: 'In some areas, websites generate more than 60% of the traffic from their mobile versions, so it would be unwise not to audit the behavior of mobile users. With the Plerdy heatmap, you can run a UX auditing analysis separately for the desktop and mobile versions of your website.'
}, {
    title: 'Audit data analysis with Google Analytics',
    content: 'In addition to the Plerdy heatmap data, you also get the audit data from Google Analytics. Thus, you can analyze the sources of traffic and its quality to be able to pinpoint any problems. For example, fixing usability bugs alone will not improve conversion if the website gets mistargeted traffic.'
}];
  return slides.map(({title, content}, index) => `<div><div class="g-col-3 slider_item"><div class="title">${title}</div><div class="content">${content}</div><div class="index">${index+1}</div></div></div>`).join();

}

$(document).ready(function() {

    $('.slider').append(getSliderContent()).slick({
        infinite: true, // Циклічна прокрутка
        slidesToShow: 3, // Відображати 3 зображення одночасно
        slidesToScroll: 1, // Прокручувати по 1 зображенню за раз
        // dots: true,               // Відображати навігаційні точки
        // arrows: true, // Відображати стрілки навігації
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        autoplay: true, // Автоматична прокрутка
        autoplaySpeed: 200000, // Швидкість автоматичної прокрутки    
        responsive: [ // Налаштування для різних екранів
            {
                breakpoint: 1024, // Для екранів шириною до 1024px
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576, // Для екранів шириною до 576px
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const popup = document.getElementById('popup');
//     const closeBtn = document.getElementById('closeBtn');

//     // Show popup 3 seconds after page load with fade-in effect
//     setTimeout(() => {
//         popup.classList.add('show');
//     }, 3000); // 3 seconds delay

//     // Close popup when close button is clicked
//     closeBtn.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });
// });
