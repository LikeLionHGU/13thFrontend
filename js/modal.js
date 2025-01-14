const memberData = [
  {
    num: 1,
    music: "찬란",
    artist: "나상현씨밴드",
    name: "김원진",
    motto: "중요한건 꺾였는데도 그냥 하는 마음",
    github: "https://github.com/lingard09",
    prl: "https://lingard09.github.io/Profile_Page/",
    insta: "https://www.instagram.com/kinnwonjin/",
    profile: "./assets/img/modal/memoji/1.png",
    bgImage: "./assets/img/modal/backgroundImage/1.JPEG",
  },
  {
    num: 2,
    music: "밝은 빛이 가득해",
    artist: "WELOVE",
    name: "김윤채",
    motto: "항상 최선을 다하자",
    github: "https://github.com/KimYoonChae",
    prl: "https://kimyoonchae.github.io/Profile-page/",
    insta: "https://www.instagram.com/yo0n.c/",
    profile: "./assets/img/modal/memoji/2.png",
    bgImage: "./assets/img/modal/backgroundImage/2.JPG",
  },
  {
    num: 3,
    music: "Love Never Felt So Good",
    artist: "Michael Jackson",
    name: "박서연",
    motto: "현재를 즐기자",
    github: "https://github.com/yean1234",
    prl: "https://yean1234.github.io/introduce-myself/index.html",
    insta: "hhttps://www.instagram.com/boxyean_05",
    profile: "./assets/img/modal/memoji/3.png",
    bgImage: "./assets/img/modal/backgroundImage/3.JPG",
  },
  {
    num: 4,
    music: "HAPPY",
    artist: "데이식스",
    name: "성하은",
    motto: "하면 된다 일단 하자 !",
    github: "https://github.com/Sunghaeun",
    prl: "https://sunghaeun.github.io/new-profile/",
    insta: "https://www.instagram.com/harlo_ii/",
    profile: "./assets/img/modal/memoji/4.png",
    bgImage: "./assets/img/modal/backgroundImage/4.JPG",
  },
  {
    num: 5,
    music: "Mr. Lawrence",
    artist: "류이치 사카모토",
    name: "오연주",
    motto: "그래도 해야지 어떡해",
    github: "https://github.com/playoh",
    prl: "https://playoh.github.io/profile_page/",
    insta: "https://www.instagram.com/play0h/",
    profile: "./assets/img/modal/memoji/5.png",
    bgImage: "./assets/img/modal/backgroundImage/5.PNG",
  },
  {
    num: 6,
    music: "Antifreeze",
    artist: "검정치마",
    name: "이재호",
    motto: "성실함은 나의 힘",
    github: "https://github.com/Jaeho777",
    prl: "https://jaeho777.github.io/-1-_-/",
    insta: "https://www.instagram.com/_olzhho_/",
    profile: "./assets/img/modal/memoji/6.png",
    bgImage: "./assets/img/modal/backgroundImage/6.JPG",
  },
  {
    num: 7,
    music: "FREEDOM",
    artist: "AKMU",
    name: "이하린",
    motto: "뭐든 끝까지!",
    github: "https://github.com/junnyang",
    prl: "https://github.com/junnyang/LikeLion-myprofile",
    insta: "https://www.instagram.com/gkfls._.21/",
    profile: "./assets/img/modal/memoji/7.png",
    bgImage: "./assets/img/modal/backgroundImage/7.JPEG",
  },
  {
    num: 8,
    music: "Day n nite",
    artist: "문수진",
    name: "진희원",
    motto: "느리지만 끝까지 해내기",
    github: "https://github.com/JinHeeWond",
    prl: "https://github.com/JinHeeWond/new-profile.git",
    insta: "https://www.instagram.com/wlsgmldnjs?igsh=MTEyNHIzdWpzNjJhMg%3D%3D&utm_source=qr",
    profile: "./assets/img/modal/memoji/8.png",
    bgImage: "./assets/img/modal/backgroundImage/8.PNG",
  },
  {
    num: 9,
    music: "나무",
    artist: "카더가든",
    name: "한규호",
    motto: "매일매일 후회없이 살자",
    github: "https://github.com/Gyuho-Han",
    prl: "https://gyuho-han.github.io/LikeLionIntroWeb/",
    insta: "https://www.instagram.com/gyuhohan03/",
    profile: "./assets/img/modal/memoji/9.png",
    bgImage: "./assets/img/modal/backgroundImage/9.JPG",
  },
];

/*const grid_info_members_mobile = [
  {
    num: 1,
    name: "김원진",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# 👮‍♀️",
    music: "찬란",
    artist: "나상현씨밴드",
    comment: "잘 부탁드립니다!!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 2,
    name: "김윤채",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🧳",
    music: "밝은 빛이 가득해",
    artist: "WELOVE",
    comment: "멋사 파이팅!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 3,
    name: "박서연",
    key1: "# 아창",
    key2: "# 카이퍼",
    key3: "# 🐑",
    music: "Love Never Felt So Good - M..",
    artist: "",
    comment: "최강 프론트 엔드 화이팅!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 4,
    name: "성하은",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# ⚽️",
    music: "HAPPY",
    artist: "데이식스",
    comment: "13기 아기사자 화이팅!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 5,
    name: "오연주",
    key1: "# 공시",
    key2: "# 카이퍼",
    key3: "# 💪",
    music: "Mr. Lawrence",
    artist: "류이치 사카모토",
    comment: "재밋게 해봅시다아",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 6,
    name: "이재호",
    key1: "# 아창",
    key2: "# 카이퍼",
    key3: "# 🎧",
    music: "Antifreeze",
    artist: "검정치마",
    comment: "전 멋사 진짜 좋은 것 같아요",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 7,
    name: "이하린",
    key1: "# 전전",
    key2: "# 카이퍼",
    key3: "# 🧵",
    music: "FREEDOM",
    artist: "AKMU",
    comment: "13기 뿁!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 8,
    name: "진희원",
    key1: "# 전전",
    key2: "# 장기려",
    key3: "# 🦥",
    music: "Day n nite",
    artist: "문수진",
    comment: "낯을 많이 가리지만 친해지면 재밌습니다",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
  {
    num: 9,
    name: "한규호",
    key1: "# 전전",
    key2: "# 손양원",
    key3: "# 🌭",
    music: "나무",
    artist: "카더가든",
    comment: "모두들 화이팅!",
    motto: "",
    insta: "",
    github: "",
    prl: "",
    profile: "",
    bgImage: "",
  },
];*/

const body = document.querySelector('body');


const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".grid-member");

btnOpenModal.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    console.log("btn" + btnOpenModal);
    getMemberNum();
    body.style.overflow = 'hidden'
  });
});


const musicName = document.getElementById("modal_music_name");
const musicSinger = document.getElementById("modal_music_singer");
const profilePic = document.getElementById("modal_profile_pic");
const profileName = document.getElementById("modal_profile_name");
const profileMotto = document.getElementById("modal_profile_motto");
const githubLink = document.getElementById("modal_github");
const prLink = document.getElementById("modal_introduce");
const instaLink = document.getElementById("modal_insta");
const modalBody = document.querySelector('.modal_body');

                                        


function getMemberNum(){
  const selectMemberNumber = localStorage.getItem('num');
  const showMember = memberData[selectMemberNumber-1];
  console.log("showMember", showMember);
  musicName.innerText = showMember.music;
  musicSinger.innerText = showMember.artist;
  profilePic.src = showMember.profile;
  profileName.innerText = showMember.name;
  profileMotto.innerText = showMember.motto;
  githubLink.href = showMember.github;
  prLink.href = showMember.prl;
  instaLink.href = showMember.insta;
  modalBody.style.backgroundImage = `url(${showMember.bgImage})`;
}

const modalNode = document.querySelector("div.modal");

// const modalCloseBtn = document.querySelector(".modal_close_btn");
// modalCloseBtn.addEventListener("click", () => {
//   // const modal = document.querySelector(".modal");
//   modal.style.display = "none";
//   modal.style.overflow = "auto";
//   console.log("AA");
// });

//모달이 아닌 곳을 클릭하면 모달 닫힘
function closeModal() {
  modalNode.body.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  e.target === modalNode
    ? ((modalNode.style.display = "none"),
      (document.body.style.overflow = "auto"))
    : false;
});


// 배경

/*
  modal
    .querySelector(".modal_profile_picture > img")
    .setAttribute("src", memberData.profile);
  modal.querySelector(".modal_profile_name").innerText = memberData.name;
  modal.querySelector(".modal_music_name").innerText = memberData.music;
  modal.querySelector(".modal_music_singer").innerText = memberData.artist;
  modal.querySelector(".modal_music_name").innerText = memberData.music;
  modal.querySelector("modal_profile_motto").innerText = memberData.motto;
});

function openModal(memberData) {
  document.body.style.overflow = "hidden";
  const modal = document.querySelector(".modal");
  modal
    .querySelector(".modal_profile_pic > img")
    .setAttribute("src", memberData.profile);
  modal.querySelector(".modal_profile_name").innerText = memberData.name;
  modal.querySelector(".modal_selfPR").innerText = memberData.selfPR;
  console.log("click");
  modal.style.display = "flex";
}

function closeModal() {
  document.body.style.display = "none";
  document.body.style.overflow = "auto";
}
*/
