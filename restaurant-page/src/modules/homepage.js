export default function loadHome() {
    const content = document.querySelector("#content");
    loadHero();
    loadPanel();
}

function loadHero() {
    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "your dream cottagecore haven.";

    const heroSubtext = document.createElement("p");
    heroSubtext.textContent = "join us for a beautiful culinary adventure in the land of frogs and mushrooms";

    hero.append(heroHeader, heroSubtext);
    content.appendChild(hero);
}

function loadPanel() {
    const panelHeaders = [
        "immersive environment and elegant dining experience", 
        "hand-crafted dishes to delight your tastebuds", 
        "coming soon: truffle butter mushroom delight"
    ];
    const panelSubtexts = [
        "beautiful ambiance and live music every day! join us to experience our adorable and ethereal themes, featuring frogs, mushrooms, and fairies",
        "fresh ingredients used every day, in every signature recipe.",
        "featuring fresh mushrooms, handmade mushroom pasta, and deliciously aromatic truffle butter."
    ];

    for (let i = 0; i < 3; i ++) {
        console.log(i);
        const panel = document.createElement("div");
        panel.classList.add("panel");
        panel.id = "panel-" + i;
        
        const panelImg = document.createElement("img");
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

        content.appendChild(panel);
    }
}