export default function loadAbout() {
    const about = document.createElement("div");
    about.classList.add("content-page");
    loadHero(about);
    loadStory(about);
    return about;
}

function loadHero(about) {
    const hero = document.createElement("div");
    hero.id = "hero";
    
    const heroHeader = document.createElement("h2");
    heroHeader.textContent = "our story";

    hero.append(heroHeader);
    about.appendChild(hero);
}

function loadStory(about) {
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
    about.appendChild(storyContainer);
}