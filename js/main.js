const buttonsAndContent = [
    { buttonId: 'but_1', contentId: 'ans_1', imgCollapsed: '/images/icon-plus.svg', imgExpanded: '/images/icon-minus.svg' },
    { buttonId: 'but_2', contentId: 'ans_2', imgCollapsed: '/images/icon-plus.svg', imgExpanded: '/images/icon-minus.svg' },
    { buttonId: 'but_3', contentId: 'ans_3', imgCollapsed: '/images/icon-plus.svg', imgExpanded: '/images/icon-minus.svg' },
    { buttonId: 'but_4', contentId: 'ans_4', imgCollapsed: '/images/icon-plus.svg', imgExpanded: '/images/icon-minus.svg' },
];

buttonsAndContent.forEach(({ contentId }) => {
    const content = document.getElementById(contentId);
    content.style.display = 'none';
});

buttonsAndContent.forEach(({ buttonId, contentId, imgCollapsed, imgExpanded }) => {
    const button = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    button.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            button.src = imgExpanded;
        } else {
            content.style.display = 'none';
            button.src = imgCollapsed;
        }
    });
});

//I chose not to minimize the other sections when opening another one, I thought it looked prettier that way