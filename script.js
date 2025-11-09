// Handle Sign-up button clicks
function signUp(trainingType) {
    alert(`You have signed up for the ${trainingType} training.`);
}

// Personal Training Suggestion Form Submission
document.getElementById('suggestion-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    let title = document.getElementById('training-title').value;
    let description = document.getElementById('training-description').value;

    if (title && description) {
        alert(`Your training suggestion "${title}" has been submitted successfully!`);
        // Clear the form
        document.getElementById('suggestion-form').reset();
    } else {
        alert('Please fill in both fields.');
    }
});

// Create a simple calendar view
function generateCalendar() {
    const calendarContainer = document.getElementById('calendar-container');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const totalDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Add weekday labels
    days.forEach(day => {
        let dayLabel = document.createElement('div');
        dayLabel.textContent = day;
        calendarContainer.appendChild(dayLabel);
    });

    // Add empty cells before the 1st day of the month
    for (let i = 0; i < startDay; i++) {
        let emptyCell =
