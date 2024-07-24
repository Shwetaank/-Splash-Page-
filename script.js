const body = document.body;

function changeBackground(number) {
  // Check if a background is already showing
  let previousBackground = body.className;

  // Reset background
  body.className = "";

  // Toggle background based on the number passed
  switch (number) {
    case "1":
      if (previousBackground !== "background-1")
        body.classList.add("background-1");
      break;
    case "2":
      if (previousBackground !== "background-2")
        body.classList.add("background-2");
      break;
    case "3":
      if (previousBackground !== "background-3")
        body.classList.add("background-3");
      break;
    default:
      break;
  }
}
