
const set2english = () => {
    document.getElementById("mainContent").innerHTML = `



    `
}


const set2french = () => {
    document.getElementById("mainContent").innerHTML = `




    `
}


try {
    if (localStorage.getItem("lang") == "fr") {
        set2french()
    } else {
        set2english()
    }

} catch (error) {
    set2english()
}
