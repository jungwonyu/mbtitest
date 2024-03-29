var num = 1; // 문제 번호 1번부터 하나씩 증가
var q = {
  // 문제 번호별로 해당하는 정보 저장
  1: {
    title: 'Q1. 친구가 갑자기 약속을 취소해버렸다!<br>나는 어떻게 할까?',
    type: 'EI',
    A: '당장 만날 수 있는 친구를 찾아야지!<br>돌려 돌려 연락 📱',
    B: '오히려 좋아! 침대랑 붙어 있을래 🛏',
    qna: '1/12',
  },
  2: {
    title: 'Q2. 새학기, 정적이 흐른다.<br>옆자리 짝꿍에게 나는?',
    type: 'EI',
    A: '마이쮸를 건네며 인사한다 😎',
    B: '말을 걸 때까지 기다리며<br>어떻게 이어나갈지 생각한다 🙄',
    qna: '2/12',
  },
  3: {
    title: 'Q3. 친구와 함께 걷던 중<br>친구의 친구를 만난다면?',
    type: 'EI',
    A: '네 친구가 내 친구!<br>자연스럽게 웃으며 대화한다 🤭',
    B: '뒤에서 조용히 있으면서 눈인사만 건넨다 👋',
    qna: '3/12',
  },
  4: {
    title: 'Q4. 친구와 함께 여행 간 나,<br>허름한 식당을 발견했다!',
    type: 'SN',
    A: '리뷰가 많은 거 보니 맛은 보장되어 있겠군 🤔',
    B: '간판을 보니까 내공이 느껴지는데?<br>틀림없이 맛집 각이야! 🤩',
    qna: '4/12',
  },
  5: {
    title: 'Q5. 혼영(혼자영화)를 즐겼는데,<br>친구가 영화에 대해 묻는다면?',
    type: 'SN',
    A: '주인공이 세상을 구하는 영화인데,<br>주인공이 참 멋졌어 🤓',
    B: '주인공이 세상을 구하기 위해 날아다니는데,<br>나도 너무 날고 싶더라고! 👐',
    qna: '5/12',
  },
  6: {
    title: 'Q6. 친구의 생일이 다가온다!<br>어떤 선물이 좋을까?',
    type: 'SN',
    A: '실용성이 최고야~<br>그 친구가 뭐가 필요하다고 했더라? 🤔',
    B: '친구의 기억 속에 영원히 남았으면 좋겠어!<br>예쁜 게 최고! 😋',
    qna: '6/12',
  },
  7: {
    title: 'Q7. 친구가 울면서 우울하다고 말한다<br>나는 어떻게 할까?',
    type: 'TF',
    A: '왜 우울해? 어떤 것 때문이야?<br>얘기해봐! 해결해보자! 🙂',
    B: '3초 만에 감정이입 완.<br>같이 눈물을 글썽거린다 😢',
    qna: '7/12',
  },
  8: {
    title:
      'Q8. 친구 생일 기념으로 깜짝 파티를 준비했다!<br>나를 신나게 하는 칭찬은?',
    type: 'TF',
    A: '고마워! 요즘 바쁘다면서...<br> 시간 내줘서 고마워 😯',
    B: '정말 고마워! 완전 감동이야!<br>오늘이 최고의 날이야 🥳',
    qna: '8/12',
  },
  9: {
    title: 'Q9. 전화 통화 중<br>친구가 교통사고를 당했을 때, 나는?',
    type: 'TF',
    A: '얼른 보험사 부르고,<br>병원 진행시켜! 🏥',
    B: '어떡해? 많이 다쳤어? 🥺',
    qna: '9/12',
  },
  10: {
    title: 'Q10. 가족과의 첫 해외여행!<br>나는?',
    type: 'JP',
    A: '당장 엑셀 켜ㅋ<br>세부 일정을 세운다 💻',
    B: '거기도 사람 사는 곳이야!<br>어느 정도만 정하면 돼 😁',
    qna: '10/12',
  },
  11: {
    title: 'Q11. 자취하는 나, <br>친구들이 놀러 온다고 한다, 나는?',
    type: 'JP',
    A: '안 보이는 곳도 다 치우고,<br>뭐 먹을지 계획한다 😛',
    B: '보이는 곳만 정리하고,<br>메뉴는 친구들이 오면 결정하도록 하지 😉',
    qna: '11/12',
  },
  12: {
    title: 'Q12. 과제에 주어진 시간은 3일,<br> 나는?',
    type: 'JP',
    A: '하루하루 계획을 세우고<br>계획대로 진행한다 🧾',
    B: '계획 없이<br>일단 시작 고! 😏',
    qna: '12/12',
  },
};
var result = {
  // 결과에 해당하는 정보 저장
  ISTJ: {
    personName: '쿄고쿠 마코토(오경구)',
    explain:
      '<span>[청렴결백 논리주의자 - ISTJ]</span><br>명탐정 코난 세계관의 최강자이며, 소노코의 남자친구이다. 가무잡잡한 피부에 큰 키, 근육질의 듬직한 체격으로 평상시에는 안경을 쓰고 다니지만 중요한 때가 되면 안경을 벗는 듯하다. 겉보기와 달리 조금 둔하고 수줍음을 많이 타는 성격이지만 악당과 싸울 때는 목숨을 아끼지 않고 싸우는 뜨거운 남자!',
    img: 'assets/쿄고쿠마코토.png',
  },
  ISFJ: {
    personName: '모리 란(유미란)',
    explain:
      '[용감한 수호자 - ISFJ]<br>신이치의 여자친구(?)이다. 한없이 다정하고 따뜻한 성격에 무척이나 부드럽고 상냥하고 사근사근한 말과 행동들 덕에 겉보기엔 상당히 곱고 여린 소녀 같지만 실상은 완전 정반대의 터프한 톰보이다. 학교 내 가라테부 소속이자 주장으로 도 대회에서 우승할 정도의 실력자!',
    img: 'assets/모리란.png',
  },
  INFJ: {
    personName: '사와다 히로키(전우주)',
    explain:
      '[선의의 옹호자 - INFJ]<br>극장판 6기에 등장하는 최연소 보스이다. MIT 출신의 10살 천재 소년으로 많은 여운과 교훈을 남기고 간 인공지능이다. 극장판 최종 보스들 중 유일하게 빌런이나 악인으로 분류되지 않았다. 사회의 나쁜 면을 후손들에게 그대로 답습하고 반복하려고 하는 사회와 개성과 꿈을 무시하는 교육을 비판하고 개선하고자 하는 인물!',
    img: 'assets/사와다히로키.png',
  },
  INTJ: {
    personName: '하이바라 아이(홍장미)',
    explain:
      '[용의주도한 전략가 - INTJ]<br>소년 탐정단 중 한 명이다. 약을 먹고 작아진 인물이며, 눈이 반쯤 감겨서 졸린 듯해 보이거나 하품을 하는 모습이 자주 보이는데, 지하 연구실에서 밤을 새워 가며 연구를 하는 일이 많기 때문이다. 코난이 문제를 해결하는 데 많은 도움을 주는 인물!',
    img: 'assets/하이바라아이.png',
  },
  ISTP: {
    personName: '마츠다 진페이(송보윤)',
    explain:
      '[만능재주꾼 - ISTP]<br>고인이 된 캐릭터지만 인기가 상당하다. 폭탄 범의 경시청에 보내온 암호문을 확인하자마자 폭탄이 설치된 곳이 하이도 쇼핑몰의 대관람차라는 것을 바로 추리해 내는 명석한 두뇌를 가졌으며 휴대폰 자판 입력 속도가 빠른 재주 좋은 인물!',
    img: 'assets/마츠다진페이.png',
  },
  ISFP: {
    personName: '토야마 카즈하(서가영)',
    explain:
      '[호기심 많은 예술가 - ISFP]<br>헤이지의 여자친구(?)이다. 트레이드 마크는 포니테일과 말괄량이스러움이다! 부적 같은 것을 잘 믿는 편이다. 어린 시절 헤이지와 함께 차고 다녔던 수갑 조각을 손수 부적으로 만들어서 소중하게 갖고 다니기도 하는 순수한 인물!',
    img: 'assets/토야마카즈하.png',
  },
  INFP: {
    personName: '타카키 와타루(신형선)',
    explain:
      '[열정적인 중재자 - INFP]<br>소년 탐정단의 말 잘 들어주는 순한 성격의 소유자다. 사건이 발생되면 소년 탐정단이 자주 연락하는 형사 중 1위! 횟수와 수위만 놓고 보면 경찰들 가운데 제일 구르는 인물!',
    img: 'assets/타카키와타루.png',
  },
  INTP: {
    personName: '에도가와 코난(코난)',
    explain:
      '[논리적인 사색가 - INTP]<br>주인공이다. 추리할 때에는 사건 푸는 데 집중하는 탓인지, 의외로 사소한 점에서 덜렁거리는 모습을 보여 준다. 상상력과 호기심이 넘치는 성격으로 아는 것이 많으며 배우인 엄마를 닮아 연기력까지 좋은 다 가진 인물!',
    img: 'assets/에도가와코난.png',
  },
  ESTP: {
    personName: '핫토리 헤이지(하인성)',
    explain:
      '[모험을 즐기는 사업가 - ESTP]<br>쿠도 신이치와 같은 고등학생 탐정이다. 둥글둥글하고 붙임성이 좋은 데다가 기본적으로 남에게 어느 정도 접고 들어가주는 모습이 있어서 코난의 모습일 때는 자상한 형처럼, 신이치의 모습일 때는 착한 남동생처럼 구는 여유로운 성격의 인물!',
    img: 'assets/핫토리헤이지.png',
  },
  ESFP: {
    personName: '스즈키 소노코(정보라)',
    explain:
      '[자유로운 영혼의 연예인 - ESFP]<br>세계적인 재벌 스커지 가문의 딸이다. 항상 자신만만하며 말보다는 행동이 먼저 나오는 스타일이며 자유로운 성격이지만 누구보다도 여린 성격을 가진 인물!',
    img: 'assets/스즈키소노코.png',
  },
  ENFP: {
    personName: '쿠도 유키코(이하연)',
    explain:
      '[재기 발랄한 활동가 - ENFP]<br>쿠도 신이치의 엄마. 적극적이고 활달한 성격이다. 배우 시절 배운 변장술과 성대모사가 매우 뛰어나 감쪽같이 다른 사람들을 속이는 재주가 있으며, 드라이빙 테크닉이 상당히 좋은 인물!',
    img: 'assets/쿠도유키코.png',
  },
  ENTP: {
    personName: '쿠도 신이치(남도일)',
    explain:
      '[논쟁을 즐기는 변론가 - ENTP]<br>고등학생 명탐정으로 유명하다. 머리, 운동, 집안, 스펙, 외모까지 다 갖춘 엄친아 캐릭터다. 탐정인 만큼 상상도 못할 다양한 지식을 가지고 있다. 사건의 진상을 알게 되면 참지 못하는 인물!',
    img: 'assets/쿠도신이치.png',
  },
  ESTJ: {
    personName: '나카모리 긴조(임은삼)',
    explain:
      '[엄격한 관리자 - ESTJ]<br>괴도 키드에 대한 수사는 거의 맡고 있는 유능한 형사이다. 다른 형사들이 키드 앞에서 무능한 모습을 보이지만 이 인물은 절대 그렇지 않은 편이다. 꼰대 형사로 보이지만 키드를 잡기 위해서 어린이들까지 수사에 참여시키는 걸 봐서는 의외로 사고방식이 개방적이고 실리적인 인물!',
    img: 'assets/나카모리긴조.png',
  },
  ESFJ: {
    personName: '치바 카즈노부(이명수)',
    explain:
      '[사교적인 외교관 - ESFJ]<br>비중이 적은 편이지만 외향적인 형사이다. 특별 촬영물을 좋아하며 관련된 취미를 가지고 있다. 덩치와 어울리지 않게 귀여운 차를 탄다. 아마도 아기자기한 것을 좋아하는 인물!',
    img: 'assets/치바카즈노부.png',
  },
  ENFJ: {
    personName: '아무로 토오루(안기준)',
    explain:
      '[정의로운 사회운동가 - ENFJ]<br>따뜻하고 부드러운 호감상이다. 조직원들, 공안의 인물과만 교류하는 버번이나 후루야 레이의 신분과는 달리 아무로 토오루의 인간관계는 넓은 편이다. 코난과는 현재는 동일한 적을 쫓는 사이이지만 서로 이용하거나 필요할 때만 협력하는 인물!',
    img: 'assets/아무로토오루.png',
  },
  ENTJ: {
    personName: '진',
    explain:
      '[대담한 통솔자 - ENTJ]<br>검은 조직의 상급 조직원이다. 조직에서는 주로 보스에게서 내려온 지시를 조직원들에게 하달하거나 직접 현장에서 지시를 내리는 리더 역할을 하며 조직의 인사권과 조직원들의 생살여탈권까지 쥐고 있는 실세의 인물!',
    img: 'assets/진.png',
  },
};

const ABtn = document.querySelector('#A');
const BBtn = document.querySelector('#B');
const questionScene = document.querySelector('.question');
const resultScene = document.querySelector('.result');

ABtn.addEventListener('click', () => {
  const type = document.querySelector('#type').value;
  const preValue = document.querySelector(`#${type}`).value;
  document.querySelector(`#${type}`).value = parseInt(preValue) + 1;
  next();
});

BBtn.addEventListener('click', () => {
  next();
});

function start() {
  document.querySelector('.start').style.display = 'none';
  questionScene.classList.add('on');
  next();
}

function next() {
  if (num == 13) {
    questionScene.classList.remove('on');
    resultScene.classList.add('on');

    const mbti = document.querySelector('#EI').value < 2 ? 'I' : 'E';
    const mbti2 = document.querySelector('#SN').value < 2 ? 'N' : 'S';
    const mbti3 = document.querySelector('#TF').value < 2 ? 'F' : 'T';
    const mbti4 = document.querySelector('#JP').value < 2 ? 'P' : 'J';
    const mbtiResult = mbti + mbti2 + mbti3 + mbti4;
    document.querySelector('#img').src = result[mbtiResult]['img'];
    document.querySelector('#personName').innerHTML = result[mbtiResult]['personName'];
    document.querySelector('#explain').innerHTML = result[mbtiResult]['explain'];
  } else {
    document.querySelector('.progress-bar').style.width = `calc(100/12*${num}%)`;
    document.querySelector('#ing').innerHTML = q[num]['qna'];
    document.querySelector('#title').innerHTML = q[num]['title'];
    document.querySelector('#type').value = q[num]['type'];
    document.querySelector('#A').innerHTML = q[num]['A'];
    document.querySelector('#B').innerHTML = q[num]['B'];
    num++;
  }
}
