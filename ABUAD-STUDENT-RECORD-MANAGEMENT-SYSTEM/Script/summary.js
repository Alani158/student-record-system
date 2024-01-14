window.addEventListener('load', () => {

    const params= (new URL(document.location)).searchParams
    const surName = params.get('surname')
    const firstName = params.get('firstname')
    const middleName = params.get('middlename')
    const dateOfBirth = params.get('dateofbirth')
    const department = params.get('department')
    const matricno = params.get('matricno')
    const level = params.get('level')
    const phonenumber = params.get('phonenumber')
    const gender = params.get('gender')
    const residentialaddress = params.get('residentialaddress')
    const emailaddress = params.get('emailaddress')
    const passportphoto = params.get('passportphoto')

    document.getElementById('studentname').innerHTML = surName + ' ' + firstName + ' ' + middleName
    document.getElementById("dateofbirth").innerHTML = dateOfBirth
    document.getElementById('level').innerHTML = level
    document.getElementById('phonenumber').innerHTML = phonenumber
    document.getElementById("residentialaddress").innerHTML = residentialaddress
    document.getElementById("emailaddress").innerHTML = emailaddress;
    document.getElementById('department').innerHTML = department
    document.getElementById("matriculationnumber").innerHTML = matricno;  

    var defaultImage = document.getElementById("default-img");
    var updatedImage = document.getElementById("updated-img");

    //retrieve image from local storage
    function getImageData(){
        var imageData = localStorage.getItem("image")

        if (imageData){
            updatedImage.setAttribute("src", imageData)

            defaultImage.style.display = "none"
        }
    }

    getImageData()
})