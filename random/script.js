function showSection(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.gallery-section');
    sections.forEach((sec) => {
        sec.classList.remove('active');
    });

    // Deactivate all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    // Show the selected section and activate the button
    document.getElementById(section).classList.add('active');
    document.querySelector(`.tab-button[onclick="showSection('${section}')"]`).classList.add('active');
}
