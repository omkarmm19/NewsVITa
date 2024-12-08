import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { 
    getFirestore,
    doc, 
    setDoc,
    getDoc 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyDvyenyUcJXLRCBVpTikmbdSOmYgPstSEs",
    authDomain: "newsvita-59b66.firebaseapp.com",
    projectId: "newsvita-59b66",
    storageBucket: "newsvita-59b66.firebasestorage.app",
    messagingSenderId: "19143139939",
    appId: "1:19143139939:web:c0cb42a6bc867a47308e56",
    measurementId: "G-XFR1PS5F7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Admin code (in a real application, this should be stored securely)
const ADMIN_SECRET_CODE = "admin123";

// Handle Sign Up
document.getElementById('submitSignUp').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const role = document.getElementById('userRole').value;
    const adminCode = document.getElementById('adminCode').value;

    // Validate admin code if role is admin
    if (role === 'admin' && adminCode !== ADMIN_SECRET_CODE) {
        showMessage('Invalid admin code', 'signUpMessage');
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save additional user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            email,
            firstName,
            lastName,
            role,
            createdAt: new Date().toISOString()
        });

        showMessage('Account Created Successfully', 'signUpMessage', true);
        setTimeout(() => {
            window.location.href = role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
        }, 1500);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email Already exists', 'signUpMessage');
        } else {
            showMessage('Unable to create user: ' + error.message, 'signUpMessage');
        }
    }
});

// Handle Sign In
document.getElementById('submitSignIn').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Get user role from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        showMessage('Signed in successfully', 'signInMessage', true);
        setTimeout(() => {
            // Redirect based on user role
            window.location.href = userData.role === 'admin' ? 'admin-dashboard.html' : 'user-dashboard.html';
        }, 1500);
    } catch (error) {
        showMessage('Invalid email or password', 'signInMessage');
    }
});

// Handle Password Reset
document.getElementById('submitReset').addEventListener('click', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('resetEmail').value;

    try {
        await sendPasswordResetEmail(auth, email);
        showMessage('Password reset email sent!', 'resetMessage', true);
        setTimeout(() => {
            document.getElementById('resetPassword').style.display = 'none';
            document.getElementById('signIn').style.display = 'block';
        }, 2000);
    } catch (error) {
        showMessage('Error sending reset email: ' + error.message, 'resetMessage');
    }
});

// Function to check if user is admin (use this in your dashboard pages)
export async function isUserAdmin() {
    const user = auth.currentUser;
    if (!user) return false;

    try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();
        return userData.role === 'admin';
    } catch (error) {
        console.error('Error checking admin status:', error);
        return false;
    }
}
