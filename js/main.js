// Main JavaScript for AI Presentation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Reveal.js
    Reveal.initialize({
        // Display presentation controls
        controls: true,

        // Display a presentation progress bar
        progress: true,

        // Display the page number of the current slide
        slideNumber: true,

        // Push each slide change to the browser history
        history: true,

        // Enable keyboard shortcuts for navigation
        keyboard: true,

        // Enable the slide overview mode
        overview: true,

        // Vertical centering of slides
        center: true,

        // Enable touch navigation on devices with touch input
        touch: true,

        // Loop the presentation
        loop: false,

        // Change the presentation direction to be RTL
        rtl: false,

        // Randomizes the order of slides each time the presentation loads
        shuffle: false,

        // Turn fragments on and off globally
        fragments: true,

        // Flags whether to include the current fragment in the URL
        fragmentInURL: false,

        // Flags if the presentation is running in an embedded mode (iframe)
        embedded: false,

        // Flags if we should show a help overlay when the questionmark key is pressed
        help: true,

        // Flags if speaker notes should be visible to all viewers
        showNotes: false,

        // Global override for autoplaying embedded media (video/audio/iframe)
        autoPlayMedia: null,

        // Number of milliseconds between automatically proceeding to the next slide
        autoSlide: 0,

        // Stop auto-sliding after user input
        autoSlideStoppable: true,

        // Use this method for navigation when auto-sliding
        autoSlideMethod: Reveal.navigateNext,

        // Specify the average time in seconds that you think you will spend presenting each slide
        defaultTiming: 120,

        // Enable slide navigation via mouse wheel
        mouseWheel: false,

        // Hide cursor if inactive
        hideInactiveCursor: true,

        // Time before the cursor is hidden (in ms)
        hideCursorTime: 5000,

        // Transition style
        transition: 'slide', // none/fade/slide/convex/concave/zoom

        // Transition speed
        transitionSpeed: 'default', // default/fast/slow

        // Transition style for full page slide backgrounds
        backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

        // Number of slides away from the current that are visible
        viewDistance: 3,

        // Parallax background image
        parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

        // Parallax background size
        parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

        // Number of pixels to move the parallax background per slide
        parallaxBackgroundHorizontal: null,
        parallaxBackgroundVertical: null,

        // The "normal" size of the presentation, aspect ratio will be preserved
        width: 1200,
        height: 700,

        // Factor of the display size that should remain empty around the content
        margin: 0.1,

        // Bounds for smallest/largest possible scale to apply to content
        minScale: 0.2,
        maxScale: 1.5,

        // PDF Export options
        pdf: {
            margin: 0,
            size: 'letter',
            paperHeight: 8.5,
            paperWidth: 11,
            scale: 0.9,
        },

        // Plugins configuration
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
    });

    // Add custom navigation controls
    const customControls = document.createElement('div');
    customControls.className = 'custom-controls';

    const prevButton = document.createElement('button');
    prevButton.className = 'control-button';
    prevButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    prevButton.addEventListener('click', () => Reveal.prev());

    const nextButton = document.createElement('button');
    nextButton.className = 'control-button';
    nextButton.innerHTML = '<i class="fas fa-arrow-right"></i>';
    nextButton.addEventListener('click', () => Reveal.next());

    const homeButton = document.createElement('button');
    homeButton.className = 'control-button';
    homeButton.innerHTML = '<i class="fas fa-home"></i>';
    homeButton.addEventListener('click', () => Reveal.slide(0));

    // Add print button for portrait printing
    const printButton = document.createElement('button');
    printButton.className = 'control-button';
    printButton.innerHTML = '<i class="fas fa-print"></i>';
    printButton.title = "Print slides in portrait mode";
    printButton.addEventListener('click', () => {
        // Set up print styles for portrait orientation
        const style = document.createElement('style');
        style.id = 'print-style';
        style.innerHTML = `
            @media print {
                @page {
                    size: portrait;
                    margin: 0.5cm;
                }

                .reveal .slides section {
                    transform: none !important;
                    page-break-after: always;
                    min-height: 100vh;
                    display: flex !important;
                    flex-direction: column;
                    justify-content: center;
                }

                .reveal .slides section img {
                    max-height: 40vh !important;
                }

                .reveal .backgrounds,
                .reveal .progress,
                .reveal .controls,
                .reveal .custom-controls,
                .audio-button {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        // Trigger print dialog
        window.print();

        // Remove the style after printing
        setTimeout(() => {
            const printStyle = document.getElementById('print-style');
            if (printStyle) {
                printStyle.remove();
            }
        }, 1000);
    });

    customControls.appendChild(prevButton);
    customControls.appendChild(homeButton);
    customControls.appendChild(nextButton);
    customControls.appendChild(printButton);

    document.body.appendChild(customControls);

    // Add animation to elements when they become visible
    Reveal.addEventListener('slidechanged', function(event) {
        // Get all elements with animation classes in the current slide
        const currentSlide = event.currentSlide;
        const animatedElements = currentSlide.querySelectorAll('.fade-in, .slide-in-right');

        // Reset animations
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.opacity = '1';
                if (element.classList.contains('slide-in-right')) {
                    element.style.transform = 'translateX(0)';
                }
            }, 100);
        });
    });

    // Handle audio elements
    const audioButtons = document.querySelectorAll('.audio-button');
    audioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio');
            const audioElement = document.getElementById(audioId);

            if (audioElement.paused) {
                audioElement.play();
                this.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audioElement.pause();
                this.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });
});
