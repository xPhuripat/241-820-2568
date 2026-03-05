const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]')
    let lastNameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')
    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestsDOM = document.querySelectorAll('input[name=interests]:checked')
    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('message')
    try {
        let interests = ''
        interestsDOM.forEach((item, index) => {
            interests += item.value;
            if (index !== interestsDOM.length - 1) {
                interests += ', ';
            }
        });

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: parseInt(ageDOM.value),
            gender: genderDOM ? genderDOM.value : null,
            interests: interests,
            description: descriptionDOM.value
        };

        const response = await axios.post('http://localhost:8000/users', userData)
        console.log('response', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ'
        messageDOM.className = 'message success'
    } catch (error) {
        if (error.response) {
            console.log('Error response:', error.response.data.message);
        }
        messageDOM.innerText = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล'
        messageDOM.className = 'message danger'
    }

    console.log('submitData', userData);
}