const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

console.log(`Текущий режим: ${process.env.MODE}`);

const passwords = [
  "parol1",
  "TozhePorol",
  "NuPozhalusta",
  "postavte",
  "ochenku",
  "Vische3",
  "Pozhalusta",
  "parol2",
  "parol3",
  "parol4",
  "parol5",
  "parol6",
  "parol7",
];

const saltRounds = 10;

const hashPasswords = async () => {
  console.time('Encryption Time');

  for (let i = 0; i < passwords.length; i++) {
    const start = Date.now();
    const hash = await bcrypt.hash(passwords[i], saltRounds);
    const duration = Date.now() - start;
    console.log(`Password "${passwords[i]}" зашифрован за ${duration} ms`);
  }

  console.timeEnd('Encryption Time');
};

hashPasswords();
