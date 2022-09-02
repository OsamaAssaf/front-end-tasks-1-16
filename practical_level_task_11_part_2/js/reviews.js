const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        description: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.',
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        description:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        description:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        image:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        description:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },

];

const prevBtn = document.querySelector('.review-card .button-container').children[0];
const nextBtn = document.querySelector('.review-card .button-container').children[1];
const randomBtn = document.querySelector('.review-card .random-btn');

let currentIndex = 0;

window.addEventListener('DOMContentLoaded',() =>{
    displayPerson(currentIndex);
});

prevBtn.addEventListener('click',() =>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviews.length -1;
    }
    displayPerson(currentIndex);
});
nextBtn.addEventListener('click',() =>{
    currentIndex++;
    if(currentIndex === reviews.length){
        currentIndex = 0;
    }
    displayPerson(currentIndex);
});

randomBtn.addEventListener('click',() =>{
    currentIndex = Math.floor(Math.random() * reviews.length);
    displayPerson(currentIndex);
});

function displayPerson(index){
    const name = document.querySelector('.review-card .name');
    const job = document.querySelector('.review-card .job');
    const image = document.querySelector('.review-card .img-container img');
    const description = document.querySelector('.review-card .description');

    name.textContent = reviews[index].name;
    job.textContent = reviews[index].job;
    description.textContent = reviews[index].description;
    image.src = reviews[index].image;
}