document.getElementById('signUpButton').addEventListener('click', () => {
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('resetPassword').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
});

document.getElementById('signInButton').addEventListener('click', () => {
    document.getElementById('signup').style.display = 'none';
    document.getElementById('resetPassword').style.display = 'none';
    document.getElementById('signIn').style.display = 'block';
});

document.getElementById('forgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signIn').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('resetPassword').style.display = 'block';
});

document.getElementById('backToSignIn').addEventListener('click', () => {
    document.getElementById('resetPassword').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('signIn').style.display = 'block';
});

// Handle role selection and admin code field visibility
document.getElementById('userRole').addEventListener('change', (e) => {
    const adminCodeField = document.querySelector('.admin-code');
    if (e.target.value === 'admin') {
        adminCodeField.style.display = 'block';
        document.getElementById('adminCode').required = true;
    } else {
        adminCodeField.style.display = 'none';
        document.getElementById('adminCode').required = false;
    }
});

function showMessage(message, divId, isSuccess = false) {
    const messageDiv = document.getElementById(divId);
    if (!messageDiv) return;
    
    messageDiv.textContent = message;
    messageDiv.style.display = 'block';
    messageDiv.style.opacity = '1';
    
    if (isSuccess) {
        messageDiv.classList.add('success');
    } else {
        messageDiv.classList.remove('success');
    }
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        setTimeout(() => {
            messageDiv.style.display = 'none';
            messageDiv.classList.remove('success');
        }, 500);
    }, 3000);
}
