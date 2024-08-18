$(document).ready(function () {
    setTimeout(function () {
        $('[data-emersion]').each(function (index, element) {
            $(element).addClass('emersion-show');
        });
    }, 500);
});

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
  
  return slides.map(({title, content}, index) => `<div class="swiper-slide"><div class="g-col-3 slider_item"><div class="title">${title}</div><div class="content">${content}</div><div class="index">${index+1}</div></div></div>`);
}

function setEqualHeight() {
  let maxHeight = 0;
  const slides = $('.swiper-slide');

  slides.each((i, slide) => {
    slide.style.height = 'auto';
  });

  slides.each((i, slide) => {
    const slideHeight = slide.offsetHeight;
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight;
    }
  });

  slides.each((i, slide) => {
    slide.style.height = maxHeight + 'px';
  });
}

const phoneInputField = document.querySelector("#phone");
    const phoneInput = window.intlTelInput(phoneInputField, {
      initialCountry: "ua",
      onlyCountries: ["ua", "us", "gb"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

document.querySelector('.contact-btn').addEventListener('click', function(event) {    
    const nameField = document.querySelector('#name');
    const phoneField = document.querySelector('#phone');
       
    let isValid = true;
    
    if (nameField.value.trim() === '') {
        isValid = false;
        document.querySelector('#name-error').textContent = 'This field is required.';
        document.querySelector('#name-error').style.display = 'block';
        nameField.classList.add('error-border');
    } else {
        document.querySelector('#name-error').style.display = 'none';
        nameField.classList.remove('error-border');
    }
   
    if (phoneField.value.trim() === '') {
        isValid = false;
        document.querySelector('#phone-error').textContent = 'This field is required.';
        document.querySelector('#phone-error').style.display = 'block';
        phoneField.classList.add('error-border');
    } else {
        document.querySelector('#phone-error').style.display = 'none';
        phoneField.classList.remove('error-border');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

$(document).ready(function () {
  $('.swiper-wrapper').append(getSliderContent())


  setEqualHeight();
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4.2,
    spaceBetween: 18,
    loop: true,    
    on: {
      init: function () {
        setEqualHeight();
      },
      resize: function () {
        setEqualHeight();
      }
    }
  });
});
