const text = [
  {
    txt: `
Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque 
tincidunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque 
vulputate quam mollis pretium. Morbi condimentum volutpat.
`,
  },
  {
    txt: `
   Mauris euismod odio at commodo rhoncus. Maecenas nec interdum
    purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet
     turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum 
     euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.
   `,
  },
  {
    txt: `
  Redistributing this template as a downloadable ZIP file on any template
   collection site is strictly prohibited. You will need to contact TemplateMo
    for additional permissions about our templates. Thank you.
  `,
  },
  {
    txt: `
   Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit
    efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem.
     Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim.
   `,
  },
];

let questions = document.querySelectorAll("#faq .cont-wrap");
let arrows = document.querySelectorAll(".cont-wrap .l-arrow");
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    let wrapper = questions[i].nextElementSibling;
    let existing = wrapper.querySelector(".faq-text");
    if (!existing) {
      let overlay = document.createElement("div");
      overlay.classList.add("faq-text");
      overlay.innerHTML = text[i].txt;
      arrows[i].innerHTML = '<i class="fa-solid fa-angle-down"></i>';
      wrapper.appendChild(overlay);
    } else {
      existing.remove();
      arrows[i].innerHTML = '<i class="fa-solid fa-angle-left"></i>';
    }
  });
}
