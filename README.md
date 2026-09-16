## Live Demo
https://itol-vault-project.netlify.app/vault

# Functional digital diary

## Overview

This project is a multi-page, functional website consisting of:
- Landing page
- Data entry page
- Archive page
- Local storage
- Modern, clean UI

The goal of this project was to build a functioning 'digital diary', using DOM manipulation to capture and display user defined data. The web storage API (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) was used to share data across all three pages, and tailwindCSS was used for the styling.

## 'Five most recent entries logic'

The data for each new post is captured from the input elements and stored in a Post object - which is then pushed to an array and saved in local storage on running the addToList method. When the index page loads, the local storage is parsed and the resulting array is sliced using .slice(-5) to pull out only the five most recent entries. The .forEach method then loops through this sliced array and renders the cards using the data from each Post object in the array.

## Built with

- HTML5
- Tailwindcss v4
- JavaScript

## Project Structure

```text
itol-vault-project/
├── src/
│   └── input.css
|   └── output.css
├── index.html
├── new-entry.html
├── vault.html
├── home.js
├── new-item-script.js
├── vault-script.js
├── Screenshot 2026-09-16 at 12.31.42.png
├── README.md
├── package.json
├── package-lock.json
```
## Data capture page
![Image of data capture page - ITOL](/Screenshot%202026-09-16%20at%2012.31.42.png)