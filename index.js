async function loadImgProfile() {
    const data = await fetch("https://api.github.com/users/DaviWeiss").then(resp => resp.json())
    const imgProfile = document.getElementById("img-profile");
    imgProfile.src = data.avatar_url
}

loadImgProfile()

function sendLinks(nameLink) {
    if (nameLink == 'instagram') {
        window.location.href = "https://www.instagram.com/davi_weiss_/";
    } else if (nameLink == 'twitter') {
        window.location.href = "https://twitter.com/home";
    } else if (nameLink == 'linkedin') {
        window.location.href = "https://www.linkedin.com/in/davi-weiss-dev/";
    } else if (nameLink == 'wpp') {
        window.location.href = "https://web.whatsapp.com/send?phone=5511944451805";
    } else if (nameLink == 'github') {
        window.location.href = "https://github.com/DaviWeiss";
    } else if (nameLink == 'portifolio') {
        window.location.href = "https://daviweiss.github.io/portifolio/";
    }
}