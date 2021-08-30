const menu = [
    {
      id: 1,
      title: "Çiğköfte",
      category: "lorem",
      price: 10.99,
      img:
        "https://im.haberturk.com/2018/05/21/ver1537167961/1976157_620x410.jpg",
      desc: `Damımıza damımıza kar yağdı.`,
    },
    {
      id: 2,
      title: "İçli Köfte",
      category: "ipsum",
      price: 7.99,
      img:
        "https://im.haberturk.com/2016/08/20/ver1471680496/1284872_620x410.jpg",
      desc: `O keyf haftaya kaldı. `,
    },
    {
      id: 3,
      title: "Nemrut Dağı",
      category: "lorem",
      price: 8.99,
      img:
        "https://seyahatdergisi.com/wp-content/uploads/2014/10/nemrut_dagi-640x426.jpg",
      desc: `Zor bela sabır ettik.`,
    },
    {
      id: 4,
      title: "Hıllorık",
      category: "dolor",
      price: 5.99,
      img:
        "https://lezzetler.com/images/yuklenen4/hilorik-diyarbakir-145710.jpg",
      desc: `Bugün de yağmur yağdı`,
    },
    {
      id: 5,
      title: "Bayram Çöreği",
      category: "dolor",
      price: 12.99,
      img:
        "https://www.yenicaggazetesi.com.tr/d/other/300720201aa8afcd-2.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit `,
    },
    {
      id: 6,
      title: "Ayran",
      category: "ipsum",
      price: 9.99,
      img:
        "https://i4.hurimg.com/i/hurriyet/75/750x422/5d10c1fdc03c0e196c638a58.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    },
    {
      id: 7,
      title: "Tütün",
      category: "lorem",
      price: 15.99,
      img:
        "https://i.pinimg.com/originals/0e/0e/14/0e0e1407dc3bac573a1c83b89a20e2f4.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit `,
    },
    {
      id: 8,
      title: "Adıyaman Narı",
      category: "dolor",
      price: 12.99,
      img:
        "https://foto.haberler.com/haber/2013/10/19/adiyaman-nari-buyuk-ilgi-goruyor-3-5194552_o.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`,
    },
    {
      id: 9,
      title: "Atatürk Barajı",
      category: "ipsum",
      price: 3.99,
      img:
        "https://bilimvegelecek.com.tr/wp-content/uploads/2021/07/ataturk-baraji.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      id: 10,
      title: "Kahtalı Mıçe",
      category: "ipsum",
      price: 1.25,
      img:
        "https://im.haberturk.com/2021/02/20/ver1613845317/2979993_27d4367af1d29207bfbe65db6003ef69.jpg",
      desc: `Bekarlık yetti cana,
      Kurban olurum sana,
      Bekarlık yetti cana,
      Kurban olurum sana,
      Gider söylerim anama,
      Seni istesin bana,
      Gider söylerim anama,
      Seni istesin bana,
      Siz gidin biz geloğ,
      Hem gidoğ hem geloğ,
      Siz gidin biz geloğ,
      Hem gidoğ hem geloğ.`
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = ['All'];
for(let i = 0; i < menu.length; i++){
    if(!categories.includes(menu[i].category)){
      categories.push(menu[i].category)
    }
}


const categoryList = () => {

    const categoryBtns = [];
    for(let i = 0; i < categories.length; i++){
        categoryBtns[i] = `
          <button class="btn btn-outline-dark btn-item" data-id=${categories[i]}>${categories[i]}</button>
        `
    }
  
    btnContainer.innerHTML = categoryBtns.join("");
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };


  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12">
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();

  