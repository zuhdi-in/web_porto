const data__edu =[
    {
        tahun: "2005 - 2008",
        sekolah: "TKIT Al-Hikmah Jakarta"
    },
    {
        tahun: "2008 - 2014",
        sekolah: "SDIT Al-Barkah"
    },
    {
        tahun: "2014 - 2017",
        sekolah: "SMPIT Al-Hikmah"
    },
    {
        tahun: "2017 - 2020",
        sekolah: "PKBM Hidayatul Mualimin"
    },
    {
        tahun: "2020 - Sekarang",
        sekolah: "STT Nurul Fikri"
    }
]

for(let i = 0; i < data__edu.length; i++) {
    document.querySelector("#edu__boxs").innerHTML += 
    `
    <div class="edu__box">
        <h4>${data__edu[i].tahun}</h4>
        <h3>${data__edu[i].sekolah}</h3>
    </div>
    `;
}

function Menu() {
    const byId = document.querySelector("#hamburger__menu");
    console.log(byId.style.display);
}

const byId = document.querySelector("#hamburger__menu");
byId.addEventListener('click', function(event) {
    const element = document.querySelector(".navbar");
    const prop = getComputedStyle(element);
    console.log(window.screen.width);
    if (prop.display === "block") {
        element.setAttribute("style", "display:none");
    }

    else {
        element.setAttribute("style", "display:block");
    }
});

