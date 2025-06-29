const quotes = [
    {
        category: "Inspiration",
        text: "Happiness is not something ready made. It comes from your own actions."
    },
    {
        category: "Love ",
        text: "You, yourself, as much as anybody in the entire universe, deserve your love and affection."
    },
    {
        category: "Motivational",
        text: "The only person you are destined to become is the person you decide to be."
    },
    {
        category: "Funny",
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    }
]

const displayQuote = document.getElementById("quoteDisplay");
const quoteBtn = document.getElementById("newQuote");
const formContainer = document.getElementById("formContainer");

const saveQuotes = () => {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

const quoteData = JSON.parse(localStorage.getItem("quotes")) || [];


// Display random quote
const showRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerHTML = `"${quotes[randomIndex].text}" — ${quotes[randomIndex].category}`;
}

const createAddQuoteForm = () => {
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "newQuoteText";
    textInput.placeholder = "Enter a new quote";

    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.id = "newQuoteCategory";
    categoryInput.placeholder = "Enter quote category";

    const addButton = document.createElement("button");
    addButton.textContent = "Add Quote";
    addButton.id = "addQuoteBtn";
    addButton.addEventListener("click", addQuote);

    formContainer.appendChild(textInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);
}

const addQuote = () => {
    const newQuote = document.getElementById("newQuoteText");
    const newQuoteCategory = document.getElementById("newQuoteCategory");

    const newText = newQuote.value.trim();
    const newCategory = newQuoteCategory.value.trim();

    if (!newText || !newCategory) {
        alert("Please fill in both fields.");
        return;
    }

    quotes.push({ text: newText, category: newCategory });
    newQuote.value = "";
    newQuoteCategory.value = "";
    alert("Quote added successfully!");
}

quoteBtn.addEventListener("click", showRandomQuote);
createAddQuoteForm()