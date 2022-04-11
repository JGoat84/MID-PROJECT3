
function showimagebouldering ()
    {
    document.getElementById("loadimage").style.display="none";
    document.getElementById("boulderingphotos").style.display="inline-flex";
    document.getElementById("dancephotos").style.display="none";
    document.getElementById("portraitphotos").style.display="none";
    document.getElementById("startcaption").style.display="none";
};
    
function showimagedance ()
    {
    document.getElementById("loadimage").style.display="none";
    document.getElementById("boulderingphotos").style.display="none";
    document.getElementById("dancephotos").style.display="inline-flex";
    document.getElementById("portraitphotos").style.display="none";
    document.getElementById("startcaption").style.display="none";
};

function showimageportrait ()
    {
    document.getElementById("loadimage").style.display="none";
    document.getElementById("boulderingphotos").style.display="none";
    document.getElementById("dancephotos").style.display="none";
    document.getElementById("portraitphotos").style.display="inline-flex";
    document.getElementById("startcaption").style.display="none";
};

// document.getElementsByClassName("photosub").style.display="none";
// window.onload = function(){
//     document.getElementsByClassName("photosub").style.display='none';
//   };

window.onload = function loading ()
{
    document.getElementById("boulderingphotos").style.display="none";
    document.getElementById("dancephotos").style.display="none";
    document.getElementById("portraitphotos").style.display="none";
};


document.getElementById("buttonbouldering").addEventListener("click", showimagebouldering);
document.getElementById("buttondance").addEventListener("click", showimagedance);
document.getElementById("buttonportrait").addEventListener("click", showimageportrait);

const metaarray = [
    {
    "photo": "bouldering1",
    "model": "Samantha",
    "aperture": "f4",
    "focalength": "45mm",
    "shutterspeed": "1/250",
    "ISO": "1600"
    },
    {
    "photo": "bouldering2",
    "model": "Charles",
    "aperture": "f4",
    "focalength": "70mm",
    "shutterspeed": "1/500",
    "ISO": "1600"
    },
    {
    "photo": "bouldering3",
    "model": "Tabatha",
    "aperture": "f2.8",
    "focalength": "65mm",
    "shutterspeed": "1/640",
    "ISO": "1000"
    },
    {
    "photo": "dance1",
    "model": "Eleanor",
    "aperture": "f4",
    "focalength": "47mm",
    "shutterspeed": "1/640",
    "ISO": "320"
    },
    {
    "photo": "dance2",
    "model": "Eleanor",
    "aperture": "f4",
    "focalength": "24mm",
    "shutterspeed": "1/500",
    "ISO": "200"
    },
    {
    "photo": "dance3",
    "model": "Eleanor",
    "aperture": "f4",
    "focalength": "35mm",
    "shutterspeed": "1/400",
    "ISO": "200"
    },
    {
    "photo": "portrait1",
    "model": "Sandra",
    "aperture": "f4",
    "focalength": "65mm",
    "shutterspeed": "1/160",
    "ISO": "400"
    },
    {
    "photo": "portrait2",
    "model": "Sandra",
    "aperture": "f4",
    "focalength": "39mm",
    "shutterspeed": "1/160",
    "ISO": "100",
    },
    {
    "photo": "portrait3",
    "model": "Sandra",
    "aperture": "f4",
    "focalength": "41mm",
    "shutterspeed": "1/400",
    "ISO": "400"
    },
]


const BOULD1 = metaarray.find(obj => {      
        return obj.photo === "bouldering1"
})

const BOULD2 = metaarray.find(obj => {      
    return obj.photo === "bouldering2"
})

const BOULD3 = metaarray.find(obj => {      
        return obj.photo === "bouldering3"
})

document.getElementById("buttonbouldering").addEventListener("click", captiontextboulder);

function captiontextboulder () {
    document.getElementById("captiontext1").innerHTML = 
    `Image 1:${BOULD1.model} was shot on settings ${BOULD1.aperture}, ${BOULD1.shutterspeed}, ${BOULD1.focalength}, ISO${BOULD1.ISO}`;
    document.getElementById("captiontext2").innerHTML = 
    `Image 2:${BOULD2.model} was shot on settings ${BOULD2.aperture}, ${BOULD2.shutterspeed}, ${BOULD2.focalength}, ISO${BOULD2.ISO}`;
    document.getElementById("captiontext3").innerHTML = 
    `Image 3:${BOULD3.model} was shot on settings ${BOULD3.aperture}, ${BOULD3.shutterspeed}, ${BOULD3.focalength}, ISO${BOULD3.ISO}`;
}  


const DANCE1 = metaarray.find(obj => {      
    return obj.photo === "dance1"
})

const DANCE2 = metaarray.find(obj => {      
return obj.photo === "dance2"
})

const DANCE3 = metaarray.find(obj => {      
    return obj.photo === "dance3"
})

document.getElementById("buttondance").addEventListener("click", captiontextdance);

function captiontextdance () {
document.getElementById("captiontext1").innerHTML = 
`Image 1:${DANCE1.model} was shot on settings ${DANCE1.aperture}, ${DANCE1.shutterspeed}, ${DANCE1.focalength}, ISO${DANCE1.ISO}`;
document.getElementById("captiontext2").innerHTML = 
`Image 2:${DANCE2.model} was shot on settings ${DANCE2.aperture}, ${DANCE2.shutterspeed}, ${DANCE2.focalength}, ISO${DANCE2.ISO}`;
document.getElementById("captiontext3").innerHTML = 
`Image 3:${DANCE3.model} was shot on settings ${DANCE3.aperture}, ${DANCE3.shutterspeed}, ${DANCE3.focalength}, ISO${DANCE3.ISO}`;
}  


const PORTRAIT1 = metaarray.find(obj => {      
    return obj.photo === "portrait1"
})

const PORTRAIT2 = metaarray.find(obj => {      
return obj.photo === "portrait2"
})

const PORTRAIT3 = metaarray.find(obj => {      
    return obj.photo === "portrait3"
})

document.getElementById("buttonportrait").addEventListener("click", captiontextportrait);

function captiontextportrait () {
document.getElementById("captiontext1").innerHTML = 
`Image 1:${PORTRAIT1.model} was shot on settings ${PORTRAIT1.aperture}, ${PORTRAIT1.shutterspeed}, ${PORTRAIT1.focalength}, ISO${PORTRAIT1.ISO}`;
document.getElementById("captiontext2").innerHTML = 
`Image 2:${PORTRAIT2.model} was shot on settings ${PORTRAIT2.aperture}, ${PORTRAIT2.shutterspeed}, ${PORTRAIT2.focalength}, ISO${PORTRAIT2.ISO}`;
document.getElementById("captiontext3").innerHTML = 
`Image 3:${PORTRAIT3.model} was shot on settings ${PORTRAIT3.aperture}, ${PORTRAIT3.shutterspeed}, ${PORTRAIT3.focalength}, ISO${PORTRAIT3.ISO}`;
} 

// var BOULD2 = metaarray.find(obj => {      
//     return obj.photo === "bouldering2"
// })
// document.getElementById("bouldering2").addEventListener("mouseenter", captiontext);

// function captiontext () {
// document.getElementById("captiontext").innerHTML = 
// `${BOULD2.model} was shot on settings ${BOULD2.aperture}, ${BOULD2.shutterspeed}, ${BOULD2.focalength}, ${BOULD2.ISO}`
// } 

// var BOULD3 = metaarray.find(obj => {      
//     return obj.photo === "bouldering3"
// })
// document.getElementById("bouldering3").addEventListener("mouseenter", captiontext);

// function captiontext () {
// document.getElementById("captiontext").innerHTML = 
// `${BOULD3.model} was shot on settings ${BOULD3.aperture}, ${BOULD3.shutterspeed}, ${BOULD3.focalength}, ${BOULD3.ISO}`
// } 

// var indexelement = metaarray.find(obj => {

//     return obj.id === "portrait1"  
// })

// console.log(indexelement)

// document.getElementById("bouldering1").addEventListener("mouseover", showimagebouldering);


// const photofind = document.querySelectorAll(".photos");
// 	for (var i = 0; i < photofind.length; i++) {
// 	  console.log('photos: ', photofind[i]);
// 	}
//     console.log(photofind);
//     typeof(photofind);


// const photofind = document.querySelector(".photos");
// console.log(photofind.getAttribute("id"));

// CODE FROM JUSTIN
// fetch('./data.json')

//   .then((response) => response.json())

//   .then((data) => { console.log(data)})

//     .catch((rej) => {console.log(rej);})
