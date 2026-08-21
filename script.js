alert("javascript is working");
let images = [
    "econet-expo.jpg",
    "images.jpg",
    "pic.jpg"
];

const carouselImage = document.getElementById("carouselImage");
carouselImage.style.width = "1500px";
carouselImage.style.height = "500px";
carouselImage.style.objectFit = "cover";

let currentImage= 0;
    function nextImage(){
        currentImage++;
        if(currentImage>=images.length){
            currentImage=0;
        }
        document.getElementById("carouselImage").src=
        images[currentImage];
    }
    function previousImage(){
        currentImage--;
        if(currentImage<0){
            currentImage=images.length-1;
        }
        document.getElementById("carouselImage").src=
        images[currentImage];
    }

function showInfo(topic){
    let info = document.getElementById("info");
    if(topic === "fintech"){
        info.innerHTML = `
                <h2>Fintech Innovation Hub</h2>
                <p>Fintech (short for financial technology) is the use of software, mobile apps, and digital platforms to deliver and improve financial services faster and more cheaply than traditional banks.</p>`;
            } else if(topic === "smarthome"){
                info.innerHTML = `
                 <h2>Smart Home Showcase</h2>
                 <p>Smart homes use internet-connected devices and automation to let you control lighting, security, and climate remotely using a phone, tablet, or voice assistant.</p>`;
            } else if(topic === "robotics"){
                info.innerHTML = `
                 <h2>Robotics and Artificial Intelligence</h2>
                 <p>Robotics and artificial intelligence combine to create autonomous systems where AI acts as the 'brain' for reasoning and learning, and robotics serves as the physical 'body' for execution.</p>`;
            } else if(topic === "SME and B2B"){
                info.innerHTML = `
                 <h2>SME and B2B Solutions</h2>
                 <p>SME (Small and Medium Enterprises) and B2B (Business-to-Business) solutions are designed to meet the unique needs of small businesses and enterprises in the digital age.</p>`;
            } else if(topic === "gaming"){
                info.innerHTML = `
                 <h2>Gaming and Digital Entertainment</h2>
                 <p>Gaming and digital entertainment offer immersive experiences that engage users through interactive storytelling, competitive play, and social connectivity.</p>`;
            } else if(topic === "cybersecurity"){
                info.innerHTML = `
                 <h2>Cybersecurity</h2>
                 <p>Cybersecurity involves protecting systems, networks, and programs from digital attacks. It is essential for maintaining the integrity, confidentiality, and availability of data.</p>`;
            }
            // Take the user to the card description section//
            info.scrollIntoView({behavior: "smooth"});
                    }

    /*Automatically change image every 3 seconds*/
    setInterval(nextImage,3000);

