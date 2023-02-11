const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('close');
const mobileMenu = document.getElementById('mobile-menu');
const speakers = document.getElementById('speaker-container');
// const speaker = document.getElementById('speaker-item');
const moreBtn = document.getElementById('more-btn');

hamburgerBtn.addEventListener('click', () => {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'flex';
    hamburgerBtn.style.display = 'none';
  } else {
    mobileMenu.style.display = 'none';
  }
});

closeBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

// Object starts here
const speakersObj = [
  {
    name: 'Eric X. Li',
    image: 'images/speakers/male3.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Michael Puett',
    image: 'images/speakers/male1.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Frida Kalo',
    image: 'images/speakers/female1.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Jennifer Banker',
    image: 'images/speakers/female2.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenetur minima quia laborum delectus unde est dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Yolanda Smith',
    image: 'images/speakers/female3.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenlaborum dt dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies cod his seminal book The Wealth of Networks in 2006.',
  },
  {
    name: 'Kishore Mahbubani',
    image: 'images/speakers/male4.jpg',
    job_post:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    bio:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto tenlaborum dt dolorem. Distinctio fugiat iusto ad corrupti maxime officia? Benkler studies cod his seminal book The Wealth of Networks in 2006.',
  },
];

const minimizeBtn = document.createElement('button');
minimizeBtn.className = 'minimize';

for (let i = 0; i < speakersObj.length; i += 1) {
  const divSpeaker = document.createElement('div');
  divSpeaker.classList = 'speaker-item';
  divSpeaker.innerHTML += `
    <div class="speaker">
                <img class="desktop-img" src="images/speakers/image-bg-desk.png">
                <img class="img-two" src="images/speakers/image-bg.png">
                <img class="img-one" src="${speakersObj[i].image}">
            </div>

            <div class="right-side">
                <div>
                    <h4>${speakersObj[i].name}</h4>
                    <p style="color: #ec5242">${speakersObj[i].job_post}</p>
                </div>
                <hr>
                <div>
                    <p>${speakersObj[i].bio}</p>
                    </div>
                </div>
            </div>        
            `;
  speakers.appendChild(divSpeaker);

  if (i >= 2) {
    // divSpeaker.classList = 'speaker-item hidden';
    divSpeaker.style.display = 'none';
    moreBtn.addEventListener('click', () => {
      divSpeaker.style.display = 'flex';
      minimizeBtn.innerHTML = 'MINIMIZE <i class="fa fa-angle-up"> </i>';
      speakers.appendChild(minimizeBtn);
      moreBtn.style.display = 'none';
    });
  }
  if (i >= 2) {
    minimizeBtn.addEventListener('click', () => {
      divSpeaker.style.display = 'none';
      minimizeBtn.style.display = 'none';
      moreBtn.style.display = 'block';
    });
  }
}
