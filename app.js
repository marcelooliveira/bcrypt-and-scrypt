const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const fn = async () => {

  let pwdHash;

  var hash = await bcrypt.hash(myPlaintextPassword, saltRounds);
  // Store hash in your password DB.
  pwdHash = hash;
  console.log(`hash: ${pwdHash}`);

  // Load hash from your password DB.
  var result1 = await bcrypt.compare(myPlaintextPassword, pwdHash);
  // result == true
  console.log(`comparing: ${myPlaintextPassword}`);
  console.log(`result: ${result1}`);

  var result2 = await bcrypt.compare(someOtherPlaintextPassword, pwdHash);
  // result == false
  console.log(`comparing: ${someOtherPlaintextPassword}`);
  console.log(`result: ${result2}`);
};

fn();