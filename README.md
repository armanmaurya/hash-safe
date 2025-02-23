### 🔒 HashSafe – Secure Password Generation & Validation

**HashSafe** is a lightweight and efficient JavaScript library for **secure password hashing, generation, and validation**. It provides a simple API to create strong passwords, hash them using industry-standard algorithms, and verify user credentials effortlessly.

#### ✨ Features:

- 🔑 **Strong Password Generation** – Customizable length & complexity.
- 🔒 **Secure Hashing** – Uses **bcrypt** or **argon2** for password hashing.
- ✅ **Validation** – Checks password strength and verifies hashes.
- 🚀 **Lightweight & Fast** – Optimized for performance and security.
- 📦 **Easy to Use** – Works with Node.js and browser environments.

#### 📌 Installation

```sh
npm install hash-safe
```

#### 🔧 Usage

```js
import { hashPassword, verifyPassword, generatePassword } from "hash-safe";

const password = "SuperSecure123!";
const hash = await hashPassword(password);

console.log(await verifyPassword(password, hash)); // true
console.log(generatePassword(12)); // Random strong password
```

---

### **Scoring System (0-100)**

| **Score**  | **Strength**   |
| ---------- | -------------- |
| **0-20**   | Very Weak 🚨   |
| **21-40**  | Weak ❌        |
| **41-60**  | Moderate ⚠️    |
| **61-80**  | Strong ✅      |
| **81-100** | Very Strong 🔥 |

---

### 🔐 Stay Safe with HashSafe!
