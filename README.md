# News Mag

This is a simple React application called News Mag that fetches and displays news articles from the News API based on different categories.
![Uploading image.png…]()



## Setup

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Obtain an API key from [News API](https://newsapi.org/) and replace `import.meta.env.VITE_API_KEY` in `Newsboard.js` with your API key.
4. Start the development server using `npm start`.

## Usage

- Click on different categories in the navbar to view news articles related to that category.
- Click on "Read More" to read the full article.

## Technologies Used

- React: A JavaScript library for building user interfaces, used for the frontend development of this application.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites, used for styling the user interface components.
- HTML: The standard markup language for creating web pages, used in conjunction with React components to structure the application's UI.

## Features

### 1. Category Selection:
![image](https://github.com/Sumithra49/NEWS-APP/assets/141726527/d89b7c50-e9c6-4ed0-bfd6-2657130717f9)


- Users can select from different categories such as Technology, Business, Health, Science, Sports, and Entertainment.
- Clicking on a category in the navbar updates the displayed news articles based on that category.

### 2. Article Display

- Each news article is displayed as a card containing the article title, description, and an image if available.
- Users can click on the "Read More" button to view the full article on the news website.

### 3. Responsive Design

- The application is designed to be responsive and works well on both desktop and mobile devices.
- The layout adjusts based on screen size to ensure a consistent user experience.

### 4. API Integration

- News articles are fetched from the News API, providing a wide range of up-to-date news content.
- Users can easily switch between different categories to explore news from various domains.

