# Fashion E-Commerce App

## Overview
Fashion E-Commerce App is a modern and responsive web application for online shopping, built using **ReactJS**. It provides a seamless user experience for browsing and purchasing fashion items, offering features such as dynamic product categorization, user authentication, and a personalized profile page.

## Features
- **User Authentication**: Secure login and registration.
- **Dynamic Product Display**: Products categorized into sections such as Hoodies, Tees, Coats, and more.
- **Search and Filter**: Powerful search and category filters.
- **Add to Cart and Checkout**: A complete shopping experience with cart management and order placement.
- **User Profile**: View and edit user details, track orders.
- **Loading Skeletons**: Display skeleton loaders for products and profile data during API calls.

## Tech Stack
- **Frontend**: ReactJS, React Context API, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**: Netlify (Frontend), Render (Backend)

## Installation

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance (local or cloud).

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/krantikumar09/fashion-ecommerce-app.git
   cd fashion-ecommerce-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the backend:
   - Navigate to the backend folder:
     ```bash
     cd backend
     ```
   - Install backend dependencies:
     ```bash
     npm install
     ```
   - Configure environment variables for MongoDB, JWT secret, and other settings in a `.env` file.

4. Start the development servers:
   - Backend:
     ```bash
     npm start server
     ```
   - Frontend:
     ```bash
     npm run dev
     ```

## Folder Structure
```plaintext
fashion-ecommerce/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   ├── public/
│   └── ...
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── ...
```

## Deployment
- **Frontend**:
  - Deployed using Netlify.
  - Live link https://fashion9.netlify.app/

- **Backend**:
  - Deployed using Render.
  - Add a build command if required and ensure environment variables are set up in the Render dashboard.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

## Known Issues
- Reloading routes may cause 404 errors on Netlify. Ensure the `netlify.toml` file has proper redirect rules for React single-page applications.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any queries or feedback, please contact:
- **Email**: dev.krantikumar@gmail.com
- **GitHub**: [krantikumar09](https://github.com/krantikumar09)

