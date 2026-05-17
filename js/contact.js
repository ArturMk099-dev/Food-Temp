const text = [
  {
    txt: `
  You can easily book a table directly through our online
  reservation form or by calling us at [Insert Phone Number].
  For larger groups (8 or more people), we highly recommend 
  booking at least 2–3 days in advance.
`,
  },
  {
    txt: `
    Yes, we offer delivery across the city! Delivery is free for
    all orders over $[Insert Amount]. For orders below that amount,
    a flat delivery fee of $[Insert Amount] applies. Most deliveries
    arrive within 45 to 60 minutes.
   `,
  },
  {
    txt: `
    Absolutely! We want everyone to enjoy our food. We offer a variety
    of vegetarian and vegan dishes, and gluten-free options are clearly
    marked on our menu. Please inform your server or add a note to your
    online order if you have any severe food allergies.
  `,
  },
  {
    txt: `
    We would love to host your special event! Our restaurant is perfect
    for birthdays, corporate parties, and family gatherings. We offer
    customizable group menus and full venue rental options. Please contact
    our event manager to discuss availability and details.
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
