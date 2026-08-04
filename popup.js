const frame_color = document.getElementById('color');
const frame_neon = document.getElementById('neon');
const profile = document.getElementById('show_profile')

frame_color.addEventListener('input', () => {
    profile.style.borderColor = frame_color.value;
    profile.style.border = `3px solid ${frame_color.value}`;
}); 