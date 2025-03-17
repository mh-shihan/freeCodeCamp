# Phone Number Validation Regex

This repository contains a JavaScript regular expression that validates US phone numbers.

## Regular Expression

```js
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
```

## Explanation

### **1. Anchors (`^` and `$`):**

- `^` → The string **must start** from this point.
- `$` → The string **must end** at this point.
- Ensures that the entire string matches the pattern exactly.

### **2. Country Code (`(1\s?)?`):**

- `(1\s?)?` → The number **1** (US country code) is **optional**.
- `\s?` → There may or may not be a space after `1`.
- Example: ✅ `1 555-555-5555` or ✅ `555-555-5555`

### **3. Area Code (`(\(\d{3}\)|\d{3})`):**

- `\(\d{3}\)` → Matches three digits inside parentheses, like **(555)**.
- `|` (OR) → Allows another format.
- `\d{3}` → Matches three digits **without** parentheses.
- Example: ✅ `(555)` or ✅ `555`

### **4. Separator (`([\s-]?)`):**

- `([\s-]?)` → Matches **a space, a hyphen (-), or nothing**.
- `?` → The separator is **optional**.
- Example: ✅ `555-555-5555`, ✅ `555 555 5555`, ✅ `5555555555`

### **5. Next Three Digits (`\d{3}`):**

- Matches exactly **three digits**.
- Example: ✅ `555-555-5555`

### **6. Another Separator (`([\s-]?)`):**

- Works the same way as the previous separator.

### **7. Last Four Digits (`\d{4}`):**

- Matches exactly **four digits**.
- Example: ✅ `555-555-5555`

## Valid Formats

✔ `555-555-5555`  
✔ `555 555 5555`  
✔ `5555555555`  
✔ `(555)555-5555`  
✔ `(555) 555-5555`  
✔ `1 555-555-5555`  
✔ `1 (555) 555-5555`

## Invalid Formats

❌ `555-5555` (too short)  
❌ `55-5555-5555` (wrong area code format)  
❌ `555_555_5555` (underscores are not allowed)

## Usage Example

```js
const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
console.log(regex.test("555-555-5555")); // true
console.log(regex.test("123-4567")); // false
```

## License

This project is open-source and available for use.
