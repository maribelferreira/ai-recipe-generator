function recipeFunction(response) {
  let recipeBox = document.querySelector("#recipe");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function handleSubmit(event) {
  event.preventDefault();

  let inputElement = document.querySelector("#input");
  let apiKey = "6778eb30a3f8f38t710a50259f4eoc6f";
  let prompt = `Please use ${inputElement.value} to create a simple meal recipe. List the ingredients first followed by the instructions`;
  let context =
    "You are an experieced chef and know how to use up left over ingredients creatively, please answer in basic html format";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeBox = document.querySelector("#recipe");
  recipeBox.innerHTML = "Generating a recipe for you, please wait...";

  axios.get(apiUrl).then(recipeFunction);
}

let submitButton = document.querySelector("#recipe-form");
submitButton.addEventListener("submit", handleSubmit);
