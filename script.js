const container = document.querySelector('.container');
const movie = document.getElementById('movie');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocaelStroge();
calculateTotal();

container.addEventListener('click', function (e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        // selected class'ını ekliyorum. Varsa siliyor yoksa ekliyor!!
        e.target.classList.toggle('selected');
        calculateTotal();

    }
});

movie.addEventListener('change', function (e) {
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatsArr.push(seat);
    })

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    })

    let selectedSeatIndex = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    })

    console.log(selectedSeatIndex);

    selectedSeatCount = selectedSeats.length;
    movieVal = movie.value;
    count.innerText = selectedSeatCount;
    let price = movieVal * selectedSeatCount;
    amount.innerText = price;
    
    saveToLocalStroge(selectedSeatIndex);

}

function getFromLocaelStroge() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function (seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        movie.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStroge(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', movie.selectedIndex);
}






