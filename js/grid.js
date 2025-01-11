const grid_info_members = [
  {
    num: 1,
    music: "찬란 - 나상현씨밴드",
    nick: "시크도도",
    name: "김원진",
    comment: "잘 부탁드립니다!!",
  },
  {
    num: 2,
    music: "밝은 빛이 가득해 - W..",
    nick: "생긋생긋",
    name: "김윤채",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 3,
    music: "휘파람 - 블랙핑크",
    nick: "????",
    name: "박서연",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 4,
    music: "붐바야 - 블랙핑크",
    nick: "????",
    name: "성하은",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 5,
    music: "한 - 여자아이들",
    nick: "????",
    name: "오연주",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 6,
    music: "Stay This Way - 프로..",
    nick: "????",
    name: "이재호",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 7,
    music: "Bad Boy - 레드벨벳",
    nick: "????",
    name: "이하린",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 8,
    music: "Fancy - 트와이스",
    nick: "????",
    name: "진희원",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 9,
    music: "으르렁 - EXO",
    nick: "????",
    name: "한규호",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
];

const grid_info_members_mobile = [
  {
    num: 1,
    name: "김원진",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# 👮‍♀️",
    music: "찬란 - 나상현씨밴드",
    comment: "잘 부탁드립니다!!",
  },
  {
    num: 2,
    name: "김윤채",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🧳",
    music: "밝은 빛이 가득해 - WELOVE",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 3,
    name: "박서연",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🐑",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 4,
    name: "성하은",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# ⚽️",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 5,
    name: "오연주",
    key1: "# 공시",
    key2: "# RC",
    key3: "# 💪",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 6,
    name: "이재호",
    key1: "# 공시",
    key2: "# 카이퍼",
    key3: "# 🎧",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 7,
    name: "이하린",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🧵",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 8,
    name: "진희원",
    key1: "# 전전",
    key2: "# 장기려",
    key3: "# 🦥",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
  {
    num: 9,
    name: "한규호",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# 🌭",
    music: "music",
    comment: "여러분을 뵙게 되어 기쁩니다.",
  },
];

const likelion_grid = document.getElementById("likelion_grid");

const htmlString1 = grid_info_members
  .map(
    (member) => `
      <div class="grid-member" onclick="alert('짜잔~~~!')">
        <div class="grid-info-memoji-box">
            <img
                class="grid-info-memoji"
                src="./assets/img/grid/memoji/memoji${member.num}.png"
                alt="memoji"
            />
        </div>
        <div class="grid-info-box">
            <div class="grid-info-music-box">
              <img
                  class="grid-info-music-note"
                  src="./assets/img/grid/note.png"
                  alt="note"
              />
              <span>${member.music}</span>
            </div>
            <div class="grid-info-nick">${member.nick}</div>
            <div class="grid-info-name">${member.name}</div>
            <div class="grid-info-footer">- Frontend -</div>
        </div>
        <p>${member.comment}</p>
      </div>
    </div>
  `
  )
  .join("");

const htmlString2 = grid_info_members_mobile
  .map(
    (member) => `<div class="grid-mobile-member" onclick="alert('짜잔~~~!')">
        <div class="grid-mobile-pic-box">
          <img
            class="grid-mobile-pic"
            src="./assets/img/grid/memoji/memoji${member.num}.png"
            alt="memoji"
          />
        </div>
        <div>
          <div class="grid-mobile-name">${member.name}</div>
          <div class="grid-member-info">
            <div class="grid-mobile-keyword">${member.key1}</div>
            <div class="grid-mobile-keyword">${member.key2}</div>
            <div class="grid-mobile-keyword">${member.key3}</div>
          </div>
        </div>
        <div class="grid-mobile-music">
          <div class="grid-mobile-music-title">${member.music}</div>
          <div class="grid-mobile-music-icon-box">
            <img
              class="grid-info-music-note"
              src="./assets/img/grid/note.png"
              alt="note"
            />
          </div>
          <p>${member.comment}</p>
        </div>
      </div>
    `
  )
  .join("");

window.onresize = function () {
  if (window.innerWidth < 800) {
    likelion_grid.innerHTML = htmlString2;
  } else {
    likelion_grid.innerHTML = htmlString1;
  }
};

window.onresize();
