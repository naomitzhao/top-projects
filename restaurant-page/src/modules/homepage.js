import FrogMushroom from '../assets/frog_mushroom.png';

export default function loadHome() {
    const homepage = document.createElement("div");
    homepage.classList.add("content-page");
    loadHero(homepage);
    loadPanel(homepage);
    return homepage;
}

function loadHero(homepage) {
    const heroBackground = document.createElement("div");
    heroBackground.id = "hero-background";
    
    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "your dream cottagecore haven.";

    const heroSubtext = document.createElement("p");
    heroSubtext.textContent = "join us for a beautiful culinary adventure in the land of frogs and mushrooms";

    hero.append(heroHeader, heroSubtext);
    heroBackground.appendChild(hero);
    homepage.appendChild(heroBackground);
}

function loadPanel(homepage) {
    const panelHeaders = [
        "immersive environment and elegant dining experience", 
        "hand-crafted dishes to delight your tastebuds", 
        "coming soon: truffle butter pancake stacc"
    ];
    const panelSubtexts = [
        "beautiful ambiance and live music every day! experience our adorable and ethereal themes, featuring frogs, mushrooms, and fairies",
        "fresh ingredients used every day, in every signature recipe.",
        "featuring fresh mushrooms, handmade buttermilk pancakes, and deliciously aromatic truffle butter."
    ];

    const panelImages = [FrogMushroom, FrogMushroom, FrogMushroom];

    for (let i = 0; i < 3; i ++) {
        const panel = document.createElement("div");
        panel.classList.add("panel");
        panel.id = "panel-" + i;
        
        const panelImg = document.createElement("img");
        panelImg.src = panelImages[i];
        panel.appendChild(panelImg);

        const panelText = document.createElement("div");
        panelText.classList.add("panel-text");

        const panelHeader = document.createElement("h2");
        panelHeader.textContent = panelHeaders[i];
        panelText.append(panelHeader);

        const panelSubtext = document.createElement("p");
        panelSubtext.textContent = panelSubtexts[i];
        panelText.append(panelSubtext);

        panel.appendChild(panelText);

        homepage.appendChild(panel);
    }
}