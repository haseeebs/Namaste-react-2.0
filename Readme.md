# 🍴 Swiggy clone

It's a modern web application designed to provide users with a seamless swiggy restaurant browsing experience. Incorporating advanced React concepts for a smooth and performant user experience.

[![Watch the video](public/images/Screenshot%202024-08-26%20223926.jpg)](public/video/Swiggy%20clone%20project%20video.mp4)

> Click the image above to watch the video.
## Features

- **Dynamic Restaurant Listings**: Browse a comprehensive list of restaurants with real-time data fetching.
- **Dynamic Routing**: Navigate smoothly between different restaurant menus using `React Router`.
- **Advanced State Management**: Efficient state management using `Redux Toolkit` for cart operations.
- **Search and Filter**: Search for restaurants and filter results dynamically.
- **Custom Hooks**: Reusable logic encapsulated in hooks like `useOnlineStatus` and `useMenuData`.
- **Lazy Loading**: Improved performance with lazy loading of components.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Robust error handling and offline support.
- **Higher-Order Components (HOC)**: Display dynamic discount labels with the `withDiscountLabel` HOC.
- **Redux-Powered Cart**: Add, update, and clear cart items with seamless state management.

## Technologies Used

### Languages

- **JavaScript**

### Libraries and Frameworks

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: For efficient state management.
- **React Router**: For handling routing in the application.
- **Parcel**: A fast, zero-configuration web application bundler.

### APIs and Data Fetching

- **Swiggy API**: Used for fetching restaurant and menu data.

## Project Structure

- **src/components**: Contains all the React components used in the application.
- **src/hooks**: Custom hooks for data fetching and other functionalities.
- **src/redux**: Contains Redux slices for state management.
- **src/screens**: Different pages of the application.
- **src/utils**: Utility functions and constants.
- **src/style.css**: Global styles for the application.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/haseeebs/namaste-react-2.0.git
   cd namaste-react-2.0
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---