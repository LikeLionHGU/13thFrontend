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
    comment: "멋사 파이팅!",
  },
  {
    num: 3,
    music: "Love Never Felt So..",
    nick: "갬성추구",
    name: "박서연",
    comment: "최강 프론트 엔드 화이팅!",
  },
  {
    num: 4,
    music: "HAPPY - 데이식스",
    nick: "편한덤벙",
    name: "성하은",
    comment: "13기 아기사자 화이팅!",
  },
  {
    num: 5,
    music: "Mr. Lawrence - 류이..",
    nick: "이상주의",
    name: "오연주",
    comment: "재밋게 해봅시다아",
  },
  {
    num: 6,
    music: "Antifreeze - 검정치..",
    nick: "커커커몬",
    name: "이재호",
    comment: "전 멋사 진짜 좋은 것 같아요.",
  },
  {
    num: 7,
    music: "FREEDOM - AKMU",
    nick: "느린재미",
    name: "이하린",
    comment: "13기 뿁!",
  },
  {
    num: 8,
    music: "Day n nite - 문수진",
    nick: "나무늘보",
    name: "진희원",
    comment: "낯을 많이 가리지만 친해지면 재밌습니다.",
  },
  {
    num: 9,
    music: "나무 - 카더가든",
    nick: "차분여유",
    name: "한규호",
    comment: "모두들 화이팅!",
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
    comment: "멋사 파이팅!",
  },
  {
    num: 3,
    name: "박서연",
    key1: "# 아창",
    key2: "# 카이퍼",
    key3: "# 🐑",
    music: "Love Never Felt So Good - M..",
    comment: "최강 프론트 엔드 화이팅!",
  },
  {
    num: 4,
    name: "성하은",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# ⚽️",
    music: "HAPPY - 데이식스",
    comment: "13기 아기사자 화이팅!",
  },
  {
    num: 5,
    name: "오연주",
    key1: "# 공시",
    key2: "# 카이퍼",
    key3: "# 💪",
    music: "Mr. Lawrence - 류이치 사카모토",
    comment: "재밋게 해봅시다아",
  },
  {
    num: 6,
    name: "이재호",
    key1: "# 아창",
    key2: "# 카이퍼",
    key3: "# 🎧",
    music: "Antifreeze - 검정치마",
    comment: "전 멋사 진짜 좋은 것 같아요",
  },
  {
    num: 7,
    name: "이하린",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🧵",
    music: "FREEDOM - AKMU",
    comment: "13기 뿁!",
  },
  {
    num: 8,
    name: "진희원",
    key1: "# 전전",
    key2: "# 장기려",
    key3: "# 🦥",
    music: "Day n nite - 문수진",
    comment: "낯을 많이 가리지만 친해지면 재밌습니다",
  },
  {
    num: 9,
    name: "한규호",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# 🌭",
    music: "나무 - 카더가든",
    comment: "모두들 화이팅!",
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
