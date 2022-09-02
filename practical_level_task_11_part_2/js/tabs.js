const tabs = [
    {
        title: 'history',
        text: 'I\'m baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.',
    },
    {
        title: 'vision',
        text: 'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.',
        itemList: ['One', 'Tow', 'Three'],
    },
    {
        title: 'goals',
        text: 'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.',
    },
];


const tabsElement = document.querySelector('#about .content .tabs-container .tabs');
const title = document.querySelector('#about .content .tabs-container .text-container .title');
const text = document.querySelector('#about .content .tabs-container .text-container .text');
const itemList = document.querySelector('#about .content .tabs-container .text-container .item-list');

window.addEventListener('DOMContentLoaded', () => {
    displayContent();
    setTabsFunctionality();
});

function displayContent() {
    tabs.forEach((tab) => {
        tabsElement.innerHTML += `<button>${tab.title}</button>`;
    });
    tabsElement.children[0].classList.add('active');
    title.textContent = tabs[0].title;
    text.textContent = tabs[0].text;
    if(tabs[0].itemList !== undefined){
        tabs[0].itemList.forEach((value) => {
            itemList.innerHTML += `<li>${value}</li>`
        });
    }
}
function setTabsFunctionality(){
    const tabsButtons =tabsElement.querySelectorAll('.tabs button');
    tabsButtons.forEach((btn,index) => {
        btn.addEventListener('click',() => {
            tabsButtons.forEach((b) => {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            title.textContent = tabs[index].title;
            text.textContent = tabs[index].text;
            if(tabs[index].itemList !== undefined){
                tabs[index].itemList.forEach((value) => {
                    itemList.innerHTML += `<li>${value}</li>`
                });
            }
            else{
                itemList.innerHTML = '';
            }
        });
    });
}

