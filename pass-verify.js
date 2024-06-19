const bcrypt = require('bcrypt');

async function verifyPassword() {
  const myPassword = 'admin1234.323*';
  const hash = '$2b$06$TPCZMfylCsb/pzSNjD55C.zecpiZJaxgCW7mL18FOzUvOd8n4CufG';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
