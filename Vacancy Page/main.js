const vacanciesData = [
    {
        clubName: "Health-O-Tech Club",
        imageUrl: "Images/Health O Tech Club.jpg",
        description: "Dear Students,<br>We are Recruiting",
        formLink: "https://forms.gle/QqezEqTY5pC8uQGNA",
        positions: 12
    },

    {
        clubName: "AI CLUB",
        imageUrl: "Images/AI.jpg",
        description: "Dear Students,<br>We are Recruiting",
        formLink: "https://forms.gle/LaEfXppTxio4LYP27",
        positions: 15
    },

    {
        clubName: "Bit By Bit CLUB",
        imageUrl: "Images/Bit By Bit.jpg",
        description: "Dear Students,<br> We are Recruiting",
        formLink: "https://forms.gle/9RauY4rc2Yp8Bwih8",
        positions: 9
    },

    {
        clubName: "Bashcraft CLUB",
        imageUrl: "Images/Bashcraft.jpg",
        description: "Dear Students,<br> We are Recruiting",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSet2OxNsCdiiDH-U512SJlDNXjHxsLrfaoO1Hh7-9DpFJz01Q/viewform",
        positions: 8
    },

    {
        clubName: "Linux CLUB",
        imageUrl: "Images/Linux.jpg",
        description: "Dear Students,<br> We are Recruiting",
        formLink: "https://forms.gle/gT2C3dsoRJV2dbXT8",
        positions: 11
    },

    {
        clubName: "Anterix CLUB",
        imageUrl: "Images/Anterix.jpg",
        description: "Dear Students,<br>We are Recruiting",
        formLink: "https://forms.gle/WerC2yUYbRdKei3c6",
        positions: 4
    },

    {
        clubName: "FinTech CLUB",
        imageUrl: "Images/FinTech.jpg",
        description: "Dear Students,<br> We are Recruiting",
        formLink: "https://forms.gle/p2ebFY5LE1jN5uue7",
        positions: 6
    },

    {
        clubName: "FYI CLUB",
        imageUrl: "Images/FOI.jpg",
        description: "Dear Students,<br>We are Recruiting",
        formLink: "https://forms.gle/B6tukQyHvkJQQw569",
        positions: 2
    },   

    {
        clubName: "GarVIT CLUB",
        imageUrl: "Images/GarVIT.jpg",
        description: "Dear Students,<br> We are Recruiting",
        formLink: "https://forms.gle/bhJ8f7xbyWqVq1GD7",
        positions: 7
    },
];

function createVacancyCards() {
    const vacanciesContainer = document.querySelector('.Vacancies');

    vacanciesData.forEach(vacancy => {
        
        const vacancyCard = document.createElement('div');
        vacancyCard.classList.add('Vacancy');

        const img = document.createElement('img');
        img.src = vacancy.imageUrl;
        img.alt = `${vacancy.clubName} Image`;

        const clubTitle = document.createElement('h3');
        clubTitle.classList.add('Club-Title');
        clubTitle.innerHTML = vacancy.clubName;

        const details = document.createElement('div');
        details.classList.add('details');
        details.innerHTML = vacancy.description;

        const detailsBtn = document.createElement('a');
        detailsBtn.classList.add('details-btn');
        detailsBtn.href = vacancy.formLink;
        detailsBtn.innerHTML = 'Click Here';
        detailsBtn.target = '_blank';

        const openPositions = document.createElement('span');
        openPositions.classList.add('Open-Positions');
        openPositions.innerHTML = `${vacancy.positions} Positions Left`;

        vacancyCard.appendChild(img);
        vacancyCard.appendChild(clubTitle);
        vacancyCard.appendChild(details);
        vacancyCard.appendChild(detailsBtn);
        vacancyCard.appendChild(openPositions);

        
        vacanciesContainer.appendChild(vacancyCard);
    });
}


window.onload = () => {
    createVacancyCards();
};
