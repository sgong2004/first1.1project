const IMAGES = [
    {
        src: "DSC_0005[1].JPG",
        type: "Food Preparation"
    },
    {
        src: "DSC_0043.jpeg",
        type: "Speech"
    },
    {
        src: "DSC_0052.jpeg",
        type: "Cleaning"
    },
    {
        src: "DSC_0054.jpg",
        type: "Cleaning"
    },
    {
        src: "DSC_0073.jpg",
        type: "Cleaning"
    },
    {
        src: "DSC_0094.jpg",
        type: "Cleaning"
    },
    {
        src: "DSC_0102.jpeg",
        type: "Cleaning"
    },
    {
        src: "DSC_0115.jpeg",
        type: "Cleaning"
    },
    {
        src: "DSC_0120.jpeg",
        type: "Cleaning"
    },
    {
        src: "DSC_0139.jpeg",
        type: "Cleaning"
    },
    {
        src: "DSC_0181.jpeg",
        type: "Collecting"
    },
    {
        src: "DSC_0186.jpeg",
        type: "Sorting Trash"
    },
    {
        src: "DSC_0216.jpeg",
        type: "Tools Preparation"
    },
    {
        src: "IMG_1540.jpg",
        type: "Assemble"
    },
    {
        src: "IMG_1544.jpg",
        type: "Tools Preparation"
    },
    {
        src: "IMG_1546.jpg",
        type: "Tools Preparation"
    },
    {
        src: "IMG_1548.jpg",
        type: "Assemble"
    },
    {
        src: "IMG_1556.jpg",
        type: "Cleaning"
    },
    {
        src: "IMG_1572.jpg",
        type: "Cleaning"
    },
    {
        src: "IMG_1577.jpg",
        type: "Cleaning"
    },
    {
        src: "IMG_1586.jpg",
        type: "Sorting Trash"
    },
    {
        src: "IMG_1598.jpg",
        type: "Group Photo"
    },
    {
        src: "IMG_1606.jpg",
        type: "Group Photo"
    },
    {
        src: "IMG_1612.jpg",
        type: "Speech"
    },
    {
        src: "IMG_1624.jpg",
        type: "Preparation"
    },
    {
        src: "IMG_1628.jpg",
        type: "Preparation"
    },
    {
        src: "IMG_1632.jpg",
        type: "Assemble"
    },
    {
        src: "IMG_1647.jpg",
        type: "Cleaning"
    },
    {
        src: "IMG_8445.JPG",
        type: "Assemble"
    },
    {
        src: "IMG_9089.JPG",
        type: "Speech"
    }
];

let elementItemDiv = document.getElementById('elementItemDiv');
let categoryLightBox = document.getElementById('categoryLightBox');
let modalLightBox = document.getElementById('modalLightBox');
let elementItem = document.querySelector('.element-item');
let modalCloseBtn = document.querySelector('.modalCloseBtn');

let elementItemTemplate = `
<div class="element-item preparation" id="elementItem%0" onclick="onOpenModal(%1);" data-src="%2" data-type="%3">
<a class="popup-with-move-anim"><div class="element-item-overlay"><span></span></div><img src="images/category/%4" alt="alternative"></a>
</div>`;

// let elementItemDivHtml = "";
// IMAGES.forEach((img, index) => {
//     elementItemDivHtml += elementItemTemplate
//     .replace('%0', index)
//     .replace('%1', index)
//     .replace('%2', img.src)
//     .replace('%3', img.type)
//     .replace('%4', img.src);
// });

// elementItemDiv.innerHTML = elementItemDivHtml;

function onOpenModal(index) {
    let elementItem = document.getElementById(`elementItem${index}`);
    let src = `images/category/${elementItem.getAttribute('data-src')}`;
    let type = elementItem.getAttribute('data-type');
    document.querySelector('.modalTitle').innerHTML = type;
    document.querySelector('.modalImg').src = src;
    document.getElementById('modalLightBox').classList.remove('modalClose');
    document.getElementById('modalLightBox').classList.add('modalOpen');
}

function closeModal()
{
    document.getElementById('modalLightBox').classList.remove('modalOpen');
    document.getElementById('modalLightBox').classList.add('modalClose');
}