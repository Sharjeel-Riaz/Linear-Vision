# Linear Vision

---

Linear Vision is built on [Create React App](https://github.com/facebook/create-react-app) and leverages the power of DALL-E 2's API integration, resulting in a sleek and minimalist user interface. It also features custom toast alerts using popular third-party modules like [Notyf](https://carlosroso.com/notyf/) and [React Spinners](https://www.davidhu.io/react-spinners/).

![Tutorial](https://raw.githubusercontent.com/Sharjeel-Riaz/Linear-Vision/main/src/Assets/Tutorial.gif)

---

## Features

- 🤖 AI-powered image generation
- 🖥️ Minimalist user interface
- 🍞 Customizable toast notifications
- 🧩 Integration with third-party modules
- 🔍 Accessible (A11Y) compatibility
- 💨 Lightweight and fast
- 💾 Support for multiple file formats
- 🌐 API integration with DALL-E 2

---

## Usage

This section explains the use case on how you can integrate your own Dall-E 2's API with [Linear Vision](https://github.com/Sharjeel-Riaz/Linear-Vision).

- Go to OpenAI's website, make your account and open the following page:
  [API Keys](https://platform.openai.com/account/api-keys)
- Create your secret key and save it somewhere as you'll need it later.
- Now after forking or cloning the project, go inside the project folder and create a file named ".env". This is also known as environment variables where you will make use of your API key.
- Add the following into your newly created `.env` file:

```
REACT_APP_API_KEY= "Your API key without double quotes (Quotes are just to grab your attention)."
```

- Make sure to install all the necessary dependencies before going with `npm run`

- Feel free to use it or make any necessary modifications `:D`
