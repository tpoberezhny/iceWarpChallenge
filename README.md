# Dialog Modal Component

This project is a React-based dialog modal component created using **Vite**, **React**, **TypeScript**, and **SASS**. The component structure is modular and built from smaller reusable components, making it easy to extend and maintain.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Features](#features)
  - [Show/Remove Borders Button](#showremove-borders-button)
- [Running the Project](#running-the-project)
- [Styling](#styling)

## Technologies Used

- **Vite**.
- **React**.
- **TypeScript**.
- **SASS**.

## Project Structure

The dialog modal component is divided into the following smaller components:

1. **Icon**: Displays an icon in the header.
2. **Button**: Customizable button component used throughout the modal.
3. **ButtonGroup**: Groups multiple buttons together.
4. **Header**: Contains the icon, title, and a group of buttons.
5. **Content**: Main content area of the modal.
6. **Footer**: Contains optional descriptive text and a group of buttons.

The main **Dialog** component brings all these smaller components together, creating a fully functional modal dialog.

## Features

### Show/Remove Borders Button

The dialog contains a **Show Borders/Remove Borders** button at the top. This button allows you to toggle borders on all elements within the dialog to visualize their structure and layout. This is particularly useful for development and debugging purposes.

- **Show Borders**: Adds a thin border around all major components within the dialog to help visualize their layout.
- **Remove Borders**: Hides the borders when they are no longer needed.

## Running the Project

To get started with this project, clone the repository and follow these commands:

```sh
# Install dependencies
npm install

# Run the development server
npm run dev
```

This will start a development server where you can see and interact with the dialog modal component.

## Styling

The styles for the modal and its components are defined using **SASS** for modular, maintainable, and reusable styling. The `_dialog.scss` file contains all the necessary styling, including the positioning of the **Show Borders** button.

