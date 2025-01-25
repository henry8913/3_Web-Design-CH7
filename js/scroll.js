function scrollCarousel(carouselId, direction) {
    const container = document.getElementById(carouselId);
    const cards = container.children;

    if (direction === 'right') {
        const firstCard = cards[0];
        container.appendChild(firstCard);
        container.scrollLeft -= firstCard.offsetWidth + 15;
    } else if (direction === 'left') {
        const lastCard = cards[cards.length - 1];
        container.insertBefore(lastCard, cards[0]);
        container.scrollLeft += lastCard.offsetWidth + 15;
    }
}