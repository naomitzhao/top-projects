export default function loadAbout() {
    const content = document.querySelector("#content");
    loadHero(content);
    loadStory(content);
}

function loadHero(content) {
    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "our story";

    hero.append(heroHeader);
    content.appendChild(hero);
}

function loadStory(content) {
    const storyContainer = document.createElement("div");
    storyContainer.id = "story-container";

    const storyHeader = document.createElement("h2");
    storyHeader.textContent = "from humble beginnings";

    const storyTextContainer = document.createElement("div");

    const storyTexts = [
        "this is a really touching story", 
        "about how we came to be", 
        "very inspirational wow, i just shed a tear."
    ];
    for (let i = 0; i < storyTexts.length; i ++) {
        const storyText = document.createElement("p");
        storyText.textContent = storyTexts[i];
        storyTextContainer.appendChild(storyText)
    }

    storyContainer.append(storyHeader, storyTextContainer);
    content.appendChild(storyContainer);
}