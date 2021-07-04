var reg = /^[0-9]{11}$/gi;

const patterns = {
  telephone: /^\d{10}$/gi,
  username: /^[a-z0-9]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(.\[a-z]{2,8})?$/,
  password: /^[\w@-]{8,20}$/,
  slug: /^[\w-]{8,20}$/,
};

const inputs = document.querySelectorAll("input");

// validation function

function validate(field, reg) {
  if (reg.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((item) => {
  item.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

// var reg2 = new RegExp(/[a-z]/, "ig");
