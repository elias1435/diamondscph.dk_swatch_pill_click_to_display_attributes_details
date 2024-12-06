<script>
document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('label');
    const blocks = document.querySelectorAll('.block');
    const defaultInfos = document.querySelectorAll('.default-infos');
    let selected = { color: null, karat: null };

    labels.forEach(label => {
        label.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default action (if any)

            const forAttr = label.getAttribute('for');

            // Determine if it's a color or karat selection
            if (forAttr.includes('main-2')) {
                selected.color = forAttr;
            } else if (forAttr.includes('main-1')) {
                selected.karat = forAttr;
            }

            // Match the block to display
            if (selected.color && selected.karat) {
                // Hide all blocks
                blocks.forEach(block => block.style.display = 'none');

                // Show the matched block
                const className = getClassName(selected.color, selected.karat);
                if (className) {
                    const blockToShow = document.querySelector(`.${className}`);
                    if (blockToShow) {
                        blockToShow.style.display = 'block';

                        // Hide all divs within the default-infos
                        defaultInfos.forEach(info => {
                            info.style.display = 'none';
                        });
                    }
                }
            }
        });
    });

    function getClassName(color, karat) {
        const colorMap = {
            'template--22909633626461__main-2-0': 'yellow-gold',
            'template--22909633626461__main-2-1': 'rose-white',
            'template--22909633626461__main-2-2': 'white-gold',
        };

        const karatMap = {
            'template--22909633626461__main-1-0': '10k',
            'template--22909633626461__main-1-1': '14k',
            'template--22909633626461__main-1-2': '18k',
        };

        const colorClass = colorMap[color];
        const karatClass = karatMap[karat];
        return colorClass && karatClass ? `${colorClass}_${karatClass}` : null;
    }
});

</script>
