const frame_color = document.getElementById('color');
const frame_effect = document.getElementById('effect');
const profile = document.getElementById('show_profile')
const use = document.getElementById('use');

function UpdateFrame() {
    if (use.checked) {
        profile.style.border = `3px solid ${frame_color.value}`;
        profile.style.borderRadius = '50%';

        if (frame_effect.checked) {
            profile.style.boxShadow = `
            0 0 1px #fff, 0 0 2px ${frame_color.value}, 0 0 4px ${frame_color.value}, 0 0 8px ${frame_color.value}, 0 0 14px ${frame_color.value}`;
        } else{
            profile.style.boxShadow = 'none';
        }
    } else {
        profile.style.border = '';
        profile.style.boxshadow = 'none';
    }
}

frame_color.addEventListener('input', UpdateFrame);
frame_effect.addEventListener('change', UpdateFrame);
use.addEventListener('input', UpdateFrame);