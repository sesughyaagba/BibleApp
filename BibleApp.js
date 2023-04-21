// Get a reference to the "scripture" element
const scriptureElement = document.getElementById("scriptures");
let readBtn = document.querySelector(".readBtn");

// Define an array of scriptures
const arr = [
  "Jesus wept. - John 11:35",
  "Rejoice evermore. - 1 Thessalonians 5:16",
  "Despise not prophesyings. - 1 Thessalonians 5:20",
  "Thou shalt not kill. - Exodus 20:13",
  "Thou shalt not steal. - Exodus 20:15",
  "Quench not the Spirit. - 1 Thessalonians 5:19",
];

const getRandomVerse = (arr) => {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * arr.length);

  // Get the scripture text from the array using the random index
  const selectedScripture = arr[randomIndex];

  console.log(selectedScripture);
  // Update the "scripture" element with the selected scripture text
  scriptureElement.textContent = selectedScripture;
};
getRandomVerse(arr);

//what happens when 'read' Button Will Click
readBtn.addEventListener("click", () => {
  readBtn.style.display = "none";
  window.location.href = "./BibleApp2.html";
});

// Fetching the JSON file
