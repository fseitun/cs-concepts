/*
  We want to achieve the following in both approaches:
  1. Remove any 'leaked secret-<numbers>' patterns from the strings.
  2. Inject dynamic content such as the sanitized name and emotion into the strings.
  3. Ensure the entire resulting string is capitalized.
*/

const name = "Fico leaked secret-123";
const emotion = "excited";
const secretPattern = / leaked secret-\d+/g;

function sanitize(suspiciousWord) {
  return suspiciousWord.replace(secretPattern, "");
}

// wo tagged template literals

const sanitizedName = sanitize(name);
const sanitizedEmotion = sanitize(emotion);

const altCase1 =
  `Hi mom! It's ${sanitizedName}, I'm shouting because I'm ${sanitizedEmotion} leaked secret-345!`
    .replace(secretPattern, "")
    .toUpperCase();

const altCase2 =
  `It's only RNR leaked secret-123, but ${sanitizedName} likes it!`
    .replace(secretPattern, "")
    .toUpperCase();

console.log("--- Without tagged template literals ---");
console.log(altCase1);
console.log(altCase2);

// with tagged template literals

function shoutAndSanitize(strings, ...values) {
  return strings.reduce((result, string, i) => {
    const sanitizedString = sanitize(string);
    const sanitizedValue = values[i] ? sanitize(values[i]) : "";
    const modified = result + sanitizedString + sanitizedValue;
    return modified.toUpperCase();
  }, "");
}

const case1 = shoutAndSanitize`Hi mom! It's ${name}, I'm shouting because I'm ${emotion} leaked secret-345!`;
const case2 = shoutAndSanitize`It's only RNR leaked secret-123, but ${name} likes it!`;

console.log("\n--- Using tagged template literals ---");
console.log(case1);
console.log(case2);
