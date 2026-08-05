const frame_color = document.getElementById('color');
const frame_effect = document.getElementById('effect');
const profile = document.getElementById('show_profile')
const use = document.getElementById('use');

use.addEventListener('input', () => {
    if (use.checked) {
        profile.style.border = `3px solid ${frame_color.value}`;
        profile.style.borderRadius = '50%';

        if (frame_effect.checked) {
            profile.style.boxShadow = `
            0 0 3px #fff, 0 0 5px ${frame_color.value}, 0 0 10px ${frame_color.value}, 0 0 20px ${frame_color.value}, 0 0 40px ${frame_color.value}`;
        } else {
            profile.style.boxShadow = 'none';
        }
    } else {
        profile.style.border = '';
        profile.style.boxShadow = 'none';
    }
});

frame_color.addEventListener('input', () => {
    if (use.checked) {
    profile.style.border = `3px solid ${frame_color.value}`;
    profile.style.borderRadius = '50%';

    if (frame_effect.checked) {
        profile.style.boxShadow = `
        0 0 3px #fff, 0 0 5px ${frame_color.value}, 0 0 10px ${frame_color.value}, 0 0 20px ${frame_color.value}, 0 0 40px ${frame_color.value}`;
    } else {
        profile.style.boxShadow = 'none';
    }
    }
}); 

frame_effect.addEventListener('change', () => {
    if (use.checked) {
        profile.style.borderRadius = '50%';
    if (frame_effect.checked) {
        profile.style.boxShadow = `
            0 0 3px #fff, 0 0 5px ${frame_color.value}, 0 0 10px ${frame_color.value}, 0 0 20px ${frame_color.value}, 0 0 40px ${frame_color.value}`;
    } else {
        profile.style.boxShadow = 'none';
    }
    }
})