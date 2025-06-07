# Tailwind CSS Configuration

This file contains the **Tailwind CSS** configuration for our project. It customizes the default theme, enabling features like **dark mode**, custom **font families**, **background images**, **colors**, and **border radius** values. Additionally, it integrates **Tailwind plugins** for enhanced functionality like custom scrollbars and animations.

## Key Features:
- **Dark Mode**: Dark mode is enabled via the `class` strategy, allowing for easy switching by adding the `dark` class to an element.
- **Custom Font Families**: Includes **Basier Square**, **Roboto**, and **Manrope** fonts.
- **Custom Colors**: The color palette is customized for various UI elements like buttons, cards, and product-specific colors.
- **Border Radius**: Custom radius values are defined to create a consistent look across UI components.
- **Plugins**: Uses the `tailwind-scrollbar` and `tailwindcss-animate` plugins for enhanced user experience with scrollbars and animations.

## Configuration Details

### Dark Mode
- `darkMode: ["class"]`: Dark mode support is controlled by adding/removing the `dark` class.

### Content Paths
- `content`: This array defines the paths to all files in the project that should be scanned for Tailwind class names. In this case, it includes all React files in the `src` folder.

### Theme Customization
- **Font Families**: Custom fonts are included, such as **Basier Square**, **Roboto**, and **Manrope**.
- **Colors**: A variety of custom colors have been added to suit the design needs, from product-specific colors to general UI components like cards and buttons.
- **Border Radius**: Custom radius values ensure consistency in the shape of components.

### Plugins
- **tailwind-scrollbar**: Customizes the appearance of scrollbars.
- **tailwindcss-animate**: Adds utility classes to easily implement animations.

---

## Installation

1. Install the necessary dependencies:

   ```bash
   npm install tailwindcss tailwind-scrollbar tailwindcss-animate
