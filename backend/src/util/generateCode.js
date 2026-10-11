export function generateCode() {
  const mainSting =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let shortCode = "";

  for (let i = 0; i < 6; i++) {
    shortCode += mainSting.charAt(Math.floor(Math.random() * 62));
  }

  return shortCode;
}

// console.log(generateCode());
