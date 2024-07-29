document.addEventListener('DOMContentLoaded', () => {
    const filmList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const runtime = document.getElementById('runtime');
    const showtime = document.getElementById('showtime');
    const availableTickets = document.getElementById('available-tickets');
    const buyTicketButton = document.getElementById('buy-ticket');
    const darkModeButton = document.getElementById('toggle-dark-mode');
    const searchBar = document.getElementById('search-bar');

    let currentMovie;

    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:3000/films');
            const movies = await response.json();
            renderMovieList(movies);
            if (movies.length > 0) displayMovieDetails(movies[0]);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const renderMovieList = (movies) => {
        filmList.innerHTML = '';
        movies.forEach(movie => {
            const li = document.createElement('li');
            li.textContent = movie.title;
            li.classList.add('film', 'item');
            if (movie.capacity - movie.tickets_sold === 0) {
                li.classList.add('sold-out');
            }
            li.addEventListener('click', () => displayMovieDetails(movie));
            filmList.appendChild(li);
        });
    };

    const displayMovieDetails = (movie) => {
        currentMovie = movie;
        poster.src = movie.poster;
        title.textContent = movie.title;
        runtime.textContent = movie.runtime;
        showtime.textContent = movie.showtime;
        updateAvailableTickets(movie.capacity - movie.tickets_sold);
    };

    const updateAvailableTickets = (available) => {
        availableTickets.textContent = available;
        buyTicketButton.disabled = available === 0;
        buyTicketButton.textContent = available === 0 ? 'Sold Out' : 'Buy Ticket';
    };

    buyTicketButton.addEventListener('click', async () => {
        const ticketsAvailable = parseInt(availableTickets.textContent);
        if (ticketsAvailable > 0) {
            updateAvailableTickets(ticketsAvailable - 1);
            await updateTicketsSold(currentMovie.id, currentMovie.tickets_sold + 1);
            currentMovie.tickets_sold += 1;
            updateMovieListStatus(currentMovie);
        }
    });

    const updateTicketsSold = async (id, ticketsSold) => {
        try {
            await fetch(`http://localhost:3000/films/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ tickets_sold: ticketsSold })
            });
        } catch (error) {
            console.error('Error updating tickets:', error);
        }
    };

    const updateMovieListStatus = (movie) => {
        const movieItems = filmList.querySelectorAll('li');
        movieItems.forEach(item => {
            if (item.textContent === movie.title) {
                if (movie.capacity - movie.tickets_sold === 0) {
                    item.classList.add('sold-out');
                } else {
                    item.classList.remove('sold-out');
                }
            }
        });
    };

    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const movieItems = document.querySelectorAll('#films li');
        movieItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? '' : 'none';
        });
    });

    fetchMovies();
});
