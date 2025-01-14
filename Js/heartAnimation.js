const heartElement = document.getElementById('heart');
const gridElement = document.getElementById('likelion_grid');

function createHeart() {
  const heart = document.createElement('div'); //비어있는 div에 이미지 형태의 하트 생성
  heart.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path fill="#fb0000" d="M21.19 12.683c-2.5 5.41-8.62 8.2-8.88 8.32a.85.85 0 0 1-.62 0c-.25-.12-6.38-2.91-8.88-8.32c-1.55-3.37-.69-7 1-8.56a4.93 4.93 0 0 1 4.36-1.05a6.16 6.16 0 0 1 3.78 2.62a6.15 6.15 0 0 1 3.79-2.62a4.93 4.93 0 0 1 4.36 1.05c1.78 1.56 2.65 5.19 1.09 8.56" />
    </svg>
  `;

  heart.classList.add('heart'); //하트 여러개 생성

  const gridOffsetTop = gridElement.offsetTop; //그리드 시작부근에서 떨어지기 
  heart.style.top = `${gridOffsetTop}px`;
  heart.style.left = Math.random() * 100 + 'vw'; // 랜덤 위치
  heart.style.animationDuration = Math.random() * 2 + 3 + 's'; //속도=랜덤

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove(); //시간이 지나면 하트 제거
  }, 3000);
}

// 하트 영역 클릭 이벤트
heartElement.addEventListener('click', () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, i * 200); //200 간격으로 새로운 하트 생성
  }
});
