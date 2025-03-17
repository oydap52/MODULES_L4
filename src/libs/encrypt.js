const bcrypt = require('bcrypt');

async function encryptPasswords() {
  const passwords = Array(13).fill("password");
  const saltRounds = 10;

  for (let i = 0; i < passwords.length; i++) {
    const start = Date.now();
    await bcrypt.hash(passwords[i], saltRounds);
    const end = Date.now();
    console.log(`Пароль ${i + 1} зашифрован за ${end - start}мс`);
  }

  console.log("Лог: Время зависит от saltRounds и процессора.");
}

encryptPasswords();