const info_members=[
    {
        num: 1,
        name: "김윤채",
        key1: "#전전",
        key2: "#카이퍼",
        key3: "#🧳",
        music: "music",
    },
    {
        num: 2,
        name: "김원진",
        key1: "#전전",
        key2: "#손양원",
        key3: "#👮‍♀️",
        music: "music",
    },
    {
        num: 1,
        name: "한규호",
        key1: "#전전",
        key2: "#손양원",
        key3: "#🌭",
        music: "music",
    },
    {
        num: 1,
        name: "성하은",
        key1: "#전전",
        key2: "#손양원",
        key3: "#⚽️",
        music: "music",
    },
    {
        num: 1,
        name: "이하린",
        key1: "#전전",
        key2: "#RC",
        key3: "#🧵",
        music: "music",
    },
    {
        num: 1,
        name: "이재호",
        key1: "#전전",
        key2: "#RC",
        key3: "#🎧",
        music: "music",
    },
    {
        num: 1,
        name: "오연주",
        key1: "#전전",
        key2: "#RC",
        key3: "#💪",
        music: "music",
    },
    {
        num: 1,
        name: "박서연",
        key1: "#전전",
        key2: "#RC",
        key3: "#🐑",
        music: "music",
    },
    {
        num:1,
        name: "진희원",
        key1: "#전전",
        key2: "#RC",
        key3: "#🦥",
        music: "music",
    }
]
const likelion_grid=document.getElementById("likelion-grid");
const htmlString =info_members
    .map(
        (member) =>`<div class="member">
        <div class="mobile-pic-box">
        <img class="mobile-pic" src="${member.num}.png">
        </div>
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
        </div>
        `
    )
    .join("");

    likelion_grid.innerHTML = htmlString;
