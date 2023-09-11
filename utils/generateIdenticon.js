const Identicon = require("identicon.js");
const bcrypt = require("bcrypt");

const generateIdenticon = async (input, size = 64) => {
//   const hash = require("crypto").createHash("mb5").update(input).digest("hex");
  const hash2 = await bcrypt.hash(input,10)
  const data = new Identicon(hash2, size).toString();

  return `data:image/png;base64,${data}`;
};

module.exports = generateIdenticon;
