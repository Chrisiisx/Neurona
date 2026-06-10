const toggleBtn = document.getElementById('toggle-password');
const pwdInput  = document.querySelector('input[type="password"]');
const eyeIcon   = document.getElementById('eye-icon');

const eyeOpen = `<path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.2"/>`;
const eyeClosed = `<path d="M2 2l12 12M6.5 6.6A2 2 0 0010.4 9.5M4.5 4.6C2.8 5.7 1 8 1 8s2.5 5 7 5c1.3 0 2.5-.3 3.5-.9M9.9 5.1C12.1 6.1 15 8 15 8s-2.5 5-7 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>`;

toggleBtn.addEventListener('click', () => {
    const isPassword = pwdInput.type === 'password';
    pwdInput.type = isPassword ? 'text' : 'password';
    eyeIcon.innerHTML = isPassword ? eyeClosed : eyeOpen;
});

/* ── Custom checkbox visuals ── */
const checkbox = document.getElementById('remember_me');
const checkBox = checkbox?.nextElementSibling;

checkbox?.addEventListener('change', () => {
    const tick = checkBox.querySelector('svg');
    if (tick) tick.classList.toggle('hidden', !checkbox.checked);
});