
# Gemini Chatbot

This is a chatbot built using **React** and **Express.js**, leveraging **Google's Generative AI (Gemini)** for answering questions. The application allows users to input questions and get responses, with a surprise feature that suggests random questions to ask.

## Features
- **Ask Questions**: Users can input a question and receive a response from Google Generative AI.
- **Surprise Me**: A button that generates random questions from a pre-set list.
- **Error Handling**: Displays an error message when no input is provided or if something goes wrong.
- **Clear Functionality**: Users can reset the chat history and input field.

## Project Structure
- **App.js**: Contains the main React component where users can input questions and view responses.
- **server.js**: Express server that handles requests from the client and communicates with the Google Gemini API.

## Installation

To run this project locally, follow these steps:

### Prerequisites
- Node.js installed on your machine.
- A Google Gemini API key (set up in the `.env` file).

### Steps

1. Clone the repository:

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Google Generative AI key:

   ```
   GOOGLE_GEN_AI_KEY=your-api-key-here
   ```

4. Run the server:

   ```bash
   node server.js
   ```

5. Start the React app:

   ```bash
   npm start
   ```

The server will run on `localhost:8000`, and the React frontend on `localhost:3000`.

## API Endpoints

- `POST /gemini`: Accepts user input and forwards it to Google Gemini for processing. The response is displayed on the frontend.

## Technologies Used
- **React**: Frontend UI framework.
- **Express**: Backend server framework.
- **Google Generative AI (Gemini)**: AI technology used for generating responses.
- **Node.js**: JavaScript runtime.
- **dotenv**: For handling environment variables.
- **cors**: Middleware for handling Cross-Origin Resource Sharing.

## Future Improvements
- Implement a real-time response from the Google Gemini API.
- Add more sophisticated error handling for failed API calls.
- Extend the surprise feature with more diverse questions.

## License

This project is open source under the [MIT License](./LICENSE).
