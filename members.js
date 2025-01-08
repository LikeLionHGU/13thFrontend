const members = [
  {
    name: "☃️ 김멋사",
    link: "https://hyerrin.github.io/portfolio/",
  },
];

const membersNode = document.querySelector("div#likelion-grid");
const originNode = document.querySelector("div.member");

// 멤버 데이터 요소마다 반복
members.map((memberData) => {
  const node = originNode.cloneNode(true); // 기존 template 클론
  node.classList.remove("template"); // template 클래스를 삭제하여 display: none 해제
  node.querySelector(".info-name").innerText = memberData.name; // 이름 변경
  node.querySelector(".link-a").setAttribute("href", memberData.link);
  node.querySelector(".link-a").innerText = "자기소개 페이지";
  membersNode.appendChild(node); // 만들어진 node 를 다시 추가
});
