
# Cinema Ticket Reservation

This project is a simple cinema ticket reservation system built using HTML, CSS, and JavaScript. Users can select seats from a cinema hall layout, view the selected seats, and see the total ticket cost in real-time.

## Features

- **Select Seats:** Users can choose seats from the cinema layout.
- **Real-Time Cost Calculation:** The total ticket cost updates based on the selected seats.
- **Seat Status Indication:** Seats are marked as selected, reserved, or available.
- **Local Storage:** The application saves selected seats and the chosen movie, even after the page is refreshed.

## Demo

Here's a screenshot of the application:

![screenshot](https://github.com/user-attachments/assets/2658010a-d08a-4f86-9d12-e4a45447ca3f)


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/cinema-ticket-reservation.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd cinema-ticket-reservation
   ```

3. **Open `index.html` in your preferred browser:**

   ```bash
   open index.html
   ```

## File Structure

```plaintext
cinema-ticket-reservation/
├── index.html       # Main HTML file
├── style.css        # CSS file for styling the layout
├── script.js        # JavaScript file for handling interactivity
└── README.md        # Project README file
```

## Usage

1. **Select a movie:** Choose a movie from the dropdown list.
2. **Select seats:** Click on the seats in the layout to select or deselect them.
3. **View the total cost:** The total number of selected seats and the total cost will be displayed at the bottom of the screen.
4. **Persisted state:** The application saves your selections, so they are retained even if you refresh the page.

## JavaScript Logic

- **Seat Selection:** Users can click on any available seat to select or deselect it. The seat status is managed using the `selected` class.
- **Real-Time Calculation:** The total number of selected seats and the total cost are calculated and displayed in real-time.
- **Local Storage:** The selected seats and the movie index are saved to and retrieved from `localStorage` to persist the user's choices.


