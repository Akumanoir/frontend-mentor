const ratingButtons = [...document.querySelectorAll("button[type = button]")]
const submitButton = document.querySelector("#submitButton")
const textContainer = document.querySelector("#text_content")
const changeImage = document.querySelector("img")
const spanImage = document.querySelector("span")
const ratingButtonsContainer = document.querySelector("#button_container")

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    removeRatings()
    button.classList.toggle("rating")
  })
})

submitButton.addEventListener("click", () => {
  const rating = [...document.querySelectorAll("button.rating")]
  const textContent = [
    ...document.querySelectorAll("#text_content > h1, #text_content > p"),
  ]

  if (isRatingReal(rating)) {
    changeImage.src = "./images/illustration-thank-you.svg"
    spanImage.classList.replace("round_background", "text-align")

    showSelected(rating[0].innerHTML)
    thankYouFunction(textContent)

    ratingButtonsContainer.style.display = "none"
    submitButton.style.display = "none"
  } else {
    alert("Select a rating")
  }
})

function removeRatings() {
  const rating = [...document.querySelectorAll("button.rating")]
  rating.forEach((button) => {
    button.classList.remove("rating")
  })
}

function isRatingReal(rating) {
  if (!rating.length == 0)
    return true

  return false
}

function showSelected(selected) {
  const container = document.querySelector("#container")
  const message = document.createElement("p")
  message.id = "youSelected"
  message.innerHTML = `You selected ${selected} out of 5`
  container.insertBefore(message, textContainer)
}

function thankYouFunction(message) {
  message[0].innerHTML = "Thank you!"
  message[1].innerHTML =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
  message.forEach((Element) => {
    Element.classList.add("text-align")
  })
}