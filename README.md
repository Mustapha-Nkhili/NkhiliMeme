# NkhiliMeme - Meme Generator


NkhiliMeme is a meme generator built with React and Vite. It allows users to create and customize memes using their own images and text. This project utilizes the dom-to-image library to convert the meme preview (the hole container of the meme) into an image that can be easily downloaded, and use the API of the imgflip to get popular memes img (blank).

## Features

- Create and customize memes.
- Add custom text to the top and bottom of the meme.
- Upload your own images or use default templates.
- Preview and download your created memes as image files.

## Demo

You can check out a live demo of nkhiliMeme here: [Demo Link](https://nkhili-meme.web.app/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation


```
1. Clone this repository:

  $ git clone git clone https://github.com:Mustapha-Nkhili/NkhiliMeme.git

2. Navigate to the project directory:

  $ cd NkhiliMeme

3. install the dependencies:

  $ npm install

4. Start the development server:

  $ npm run dev

5. Open your web browser and go to http://localhost:5173/ to see the app in action.

```

## Project Structure

 ```plaintext
NkhiliMeme/
├── src/
|   ├── assets/
|   |   ├── confused-guy-meme.jpg
│   ├── components/
|   |   ├── sideBar/
|   |   |   | ├── SB_editText/
|   |   |   | ├── EditMemeText.jsx
|   |   |   | ├── SaveMemeText.jsx
|   |   |   | ├── TextMemeOptions.jsx
|   |   |   ├── EditMeme.jsx
|   |   |   ├── EditMemeRotate.jsx
|   |   |   ├── SideBarItem.jsx
|   |   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Meme.jsx
|   |   ├── MemeGenerator.jsx
|   ├── style.css
│   ├── App.jsx
|   ├── index.css
│   ├── main.jsx
├── index.html
├── package.json
├── README.md
```
- src/components/: Contains React components used in the project.
- src/App.jsx: The main application component.
- src/index.jsx: Entry point of the application.
- index.html: Static assets and HTML template.

## Technologies Used

- React
- Vite
- dom-to-image
- JavaScript
- HTML
- CSS


## Acknowledgments

Special thanks to the creators of React, Vite, and dom-to-image for their amazing work.