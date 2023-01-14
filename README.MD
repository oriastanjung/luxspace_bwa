# 1) saat create app pakenya

## npx create-react-app my-app --template cra-template-pwa

# 2) install tailwindcss dengan

## npm install -D tailwindcss postcss autoprefixer

# 3) tambahkan initial tailwind dengan

## npx tailwindcss init -p

# 4) pada tailwind.config.js tambahkan pada content

## content: ["./src/**/*.{js,jsx}"],

# 5) buat tailwind.css dan import

## @tailwind base;

## @tailwind component;

## @tailwind utilities;

# 6) pada index.js tambahkan tailwind.css
