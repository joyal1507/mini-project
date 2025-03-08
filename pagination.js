// Sample data for auction items
const auctionItems = [
    { id: 1, name: 'Vintage Watch', price: '$150', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-vintage-watch.html' },
    { id: 2, name: 'Antique Vase', price: '$300', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-antique-vase.html' },
    { id: 3, name: 'Classic Painting', price: '$500', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-classic-painting.html' },
    { id: 4, name: 'Antique Chair', price: '$200', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-antique-chair.html' },
    { id: 5, name: 'Gold Ring', price: '$1200', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-gold-ring.html' },
    { id: 6, name: 'Diamond Necklace', price: '$2500', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-diamond-necklace.html' },
    { id: 7, name: 'Old Coins', price: '$500', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-old-coins.html' },
    { id: 8, name: 'Sculpture', price: '$1500', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-sculpture.html' },
    { id: 9, name: 'Painting of Eiffel Tower', price: '$800', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-painting-of-eiffel-tower.html' },
    { id: 10, name: 'Vintage Car', price: '$35000', imgSrc: 'https://via.placeholder.com/250', detailPage: 'item-detail-vintage-car.html' }
];

const itemsPerPage = 5; // Define how many items to show per page
let currentPage = 1; // Default to page 1

const auctionList = document.getElementById('auction-list');
const pageInfo = document.getElementById('page-info');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to load auction items for the current page
function loadAuctionItems(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = auctionItems.slice(start, end);

    auctionList.innerHTML = ''; // Clear current list

    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('auction-item');
        itemElement.innerHTML = `
            <a href="${item.detailPage}">
                <img src="${item.imgSrc}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">${item.price}</p>
                <button class="bid-btn">Bid Now</button>
                <button class="buy-btn">Buy Now</button>
            </a>
        `;
        auctionList.appendChild(itemElement);
    });

    // Update page info
    const totalPages = Math.ceil(auctionItems.length / itemsPerPage);
    pageInfo.textContent = `Page ${page} of ${totalPages}`;
    updatePaginationControls(page, totalPages);
}

// Function to update pagination controls visibility
function updatePaginationControls(page, totalPages) {
    prevButton.style.visibility = page === 1 ? 'hidden' : 'visible';
    nextButton.style.visibility = page === totalPages ? 'hidden' : 'visible';
}

// Event listeners for pagination buttons
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadAuctionItems(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(auctionItems.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        loadAuctionItems(currentPage);
    }
});

// Load auction items for the first page initially
loadAuctionItems(currentPage);



