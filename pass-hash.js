const bcrypt = require('bcrypt');

async function hash() {
  const myPassword = 'admin1234.323*';
  const hash = await bcrypt.hash(myPassword, 6);
  console.log(hash);
}

hash();
