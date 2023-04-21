// Fetches a JSON file containing the books the old testament from the server
fetch("./old_testament.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    const script = Object.keys(data);
    console.log(script);

    // Define a function "function1 that takes two arguments 'script' and 'data'
    function1(script, data);
  });

function function1(script, data) {
  // creates a 'ul' and 'body' elements
  var ul = document.querySelector(".bible_list_old");
  var body = document.querySelector(".old_test_body");
  console.log(ul);

  // loops through the 'script' array and creates a list 'li' for each one
  for (let i = 0; i < script.length; i++) {
    var li = document.createElement("li");
    li.textContent = script[i];

    // add event listener 'click' to each 'li' element
    li.addEventListener("click", () => {
      let chapters = Object.keys(data[script[i]]);
      for (let j = 0; j < chapters.length; j++) {
        var div = document.createElement("div");
        div.innerHTML = `<h1>Chapter ${chapters[j]}</h1><div>${
          data[script[i]][chapters[j]]
        }</div>`;

        // Append 'div' to 'body'
        body.appendChild(div);
      }
    });
    // Append 'li' to 'ul'
    ul.appendChild(li);
  }
}

// Fetches a JSON file containing the books the new testament from the server
fetch("./new_testament.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    const script = Object.keys(data);
    console.log(script);

    // Define a function "function1 that takes two arguments 'script' and 'data'
    function2(script, data);
  });

function function2(script, data) {
  // creates a 'ul' and body elements
  var ul = document.querySelector(".bible_list_new");
  var body = document.querySelector(".new_test_body");
  console.log(ul);

  // loops through the 'script' array and creates a list 'li' for each one
  for (let i = 0; i < script.length; i++) {
    var li = document.createElement("li");
    li.textContent = script[i];

    // add event listener 'click' to each 'li' element
    li.addEventListener("click", () => {
      let chapters = Object.keys(data[script[i]]);
      for (let j = 0; j < chapters.length; j++) {
        var div = document.createElement("div");
        div.innerHTML = `<h1>Chapter ${chapters[j]}</h1><div>${
          data[script[i]][chapters[j]]
        }</div>`;

        // Append 'div' to 'body'
        body.appendChild(div);
      }
    });

    // Append 'li' to 'ul'
    ul.appendChild(li);
  }
}
