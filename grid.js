const info_members=[
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    },
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#RC",
        key3: "#🥲",
        music: "music",
    }
]
const likelion_grid=document.getElementById("likelion-grid");
const htmlString =info_members
    .map(
        (member) =>`<div class="member">
        <div class="mobile-pic"></div>
        <div>
          <div class="mobile-name">${member.name}</div>
          <div class="member-info">
            <div class="mobile-keyword">${member.key1}</div>
            <div class="mobile-keyword">${member.key2}</div>
            <div class="mobile-keyword">${member.key3}</div>
          </div>
        </div>
        <div class="mobile-music">
          <div class="mobile-music-title">${member.music}</div>
          <div class="mobile-music-icon-box"><img class="mobile-music-icon" src="note.png"></div>
        </div>
        `
    )
    .join("");

    likelion_grid.innerHTML = htmlString;
