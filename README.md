
# Playwright E2E tests

## ✅ How to run tests locally?

### 1. Clone these repos:

```bash
git clone https://github.com/michalslowikowski00/nask_homework.git
git clone https://github.com/sparingsoftware/qa-form.git
```

### 2. Setup testing environment:
```
cd qa-form
npm install
nvm use
npm ci
npm run serve
```

### 3. Setup tests

```
cd ../nask_homework
npm install
npx playwright install --with-deps
```

### 4. Run tests against testing evnivronment:
```
cd tests
npx playwright test
```

