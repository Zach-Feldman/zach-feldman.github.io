/*eslint-env es6*/

/* sidebar.js for Zach Feldman */

$(document).ready(function() {
    const sidebarHtml = `
        <div class="sidebar-container">
            <!-- ABOUT -->
            <h2><a href="about.html">About</a></h2>


            <!-- CURATORIAL PROJECTS -->
            <h2>Curatorial Projects</h2>
            <div id="projects">
                <div id="date">2023</div>
                <p><a href="clocking-out-time-beyond-management.html">Clocking Out: Time Beyond Management</a></p>
                <p><a href="march-of-time.html">The March of Time</a></p>
                <p><a href="when-linearity-stops.html">When Linearity Stops</a></p>
                <p><a href="mine-and-yours.html">Mine and Yours: Forms of Distinction</a></p>
                <p><a href="fluid-forms.html">Fluid Forms: Films by Philip Cartelli</a></p>
            </div>

            <div id="projects">
                <div id="date">2022</div>
                <p><a href="art-or-artifice.html">Art of Artifice: The Role of Documentary in Contemporary Art</a></p>
                <p><a href="a-garden-in-the-flood.html">Matthew Ritchie: A Garden in the Flood</a></p>
            </div>

            <div id="projects">
                <div id="date">2021</div>
                <p><a href="biomedia.html">BioMedia: The Age of Media With Life-like Behavior</a></p>
                <p><a href="nobodys-listening.html">Nobody's Listening</a></p>
                <p><a href="barabasilab.html">BarabásiLab: Hidden Patterns</a></p>
            </div>

            <div id="projects">
                <div id="date">2019</div>
                <p><a href="serious-games.html">Serious Games: Documentary Art between Fact and Fiction</a></p>
                <p><a href="counter-investigations.html">Rajiv Vaidya Memorial Lecture - Forensic Architecture: Counter Investigations</a></p>
            </div>

            <div id="projects">
                <div id="date">2017</div>
                <p><a href="international-lens.html">International Lens</a></p>
            </div>

            <div id="projects">
                <div id="date">2014</div>
                <p><a href="prison-creative-arts-project.html">Prison Creative Arts Project</a></p>
            </div>


            <!-- LECTURES -->
            <h2>Lectures</h2>
            <div id="projects">
                <div id="date">2023</div>
                <p>Politics and Video Art: Labor and Time in Film, Art, and Currency</p>
            </div>

            <div id="projects">
                <div id="date">2022</div>
                <p>Art v. Evidence: A Case Study</p>
            </div>

            <div id="projects">
                <div id="date">2020</div>
                <p>Performing the Lecture: Expansions on the Essay Film</p>
                <p>Immaterial Archeology: Excavation and the Dialectical Image in the Work of Hito Steyerl</p>
            </div>

            <div id="projects">
                <div id="date">2019</div>
                <p>Instructional Videos: Didactic Documentary for the Postmodern Era</p>
            </div>

            <div id="projects">
                <div id="date">2018</div>
                <p>Social Anxieties in the ‘I am Legend’ Films</p>
            </div>

            <div id="projects">
                <div id="date">2016</div>
                <p>Palimpsest and Engraving through History: New Meaning for Paul Klee’s Angelus Novus</p>
            </div>


            <!-- PUBLICATIONS -->
            <h2>Publications</h2>
            <div id="projects">
                <div id="date">2023</div>
                <p><i>Clocking Out: Time Beyond Management</i> exhibition catalog</p>
                <p>"Spending Time: Sociality from Time-Based Currencies to Time-Based Nations"</p>
            </div>

            <div id="projects">
                <div id="date">2022</div>
                <p>"Art or Artifice: The Role of Documentary in Contemporary Art." <i>Dissertation</i></p>
                <p><i>Matthew Ritchie: A Garden in the Flood</i> exhibition catalog</p>
                <p><i>Light + Space</i> exhibition catalog</p>
            </div>

            <div id="projects">
                <div id="date">2021</div>
                <p>"Genetics and Ethics in the ‘I Am Legend’ Corpus." <i>Journal of Literature and Science</i>, Special Double Issue: Fictions of Genetic Privacy</p>
            </div>

            <div id="projects">
                <div id="date">2015</div>
                <p><i>Spatial Construction in the Work of Max Beckmann: Weimar Prints and Exile Triptychs</i>. Deep Blue</p>
            </div>
            <br>
        </div>
    `;
    

    // Insert the sidebar into a container element
    $('.sidebar').html(sidebarHtml);
    
    
    // // Function to highlight the current page in the sidebar
    // function highlightCurrentPage() {
    //     var currentPath = window.location.pathname.split("/").pop();

    //     $('.sidebar a').each(function() {
    //         var $this = $(this);
    //         if ($this.attr('href') === currentPath) {
    //             $this.addClass('current-page');
    //         }
    //     });
    // }

    // // Call the function to highlight the current page
    // highlightCurrentPage();
    
    
    // // Toggle mobile menu
    // $('.hamburger-menu').click(function() {
    //     $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
    //     $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
    // });
    
    // $('.hamburger-menu').on('click touchstart', function(e) {
    //     e.preventDefault();  // Prevent default action (useful if it's an anchor tag)
    //     $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
    //     $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
    // });
    

    // // Open lightbox
    // $('.lightbox-trigger').click(function() {
    //     var src = $(this).attr('src');
    //     $('#lightbox-image').attr('src', src);
    //     $('#lightbox').fadeIn();
    //     $('body').css('overflow', 'hidden'); // Prevent scrolling
    // });

    // // Close lightbox
    // $('#close-lightbox').click(function() {
    //     $('#lightbox').fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });

    // // Close lightbox when clicking anywhere in the lightbox
    // $('#lightbox').click(function() {
    //     $(this).fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });

    // $('.lightbox-trigger').on('click touchstart', function(e) {
    //     e.preventDefault();  // Prevent default action (like navigating to the image source)
    //     var src = $(this).attr('src');
    //     $('#lightbox-image').attr('src', src);
    //     $('#lightbox').fadeIn();
    //     $('body').css('overflow', 'hidden'); // Prevent scrolling
    // });

    // // Close lightbox
    // $('#close-lightbox').on('click touchstart', function(e) {
    //     e.preventDefault();
    //     $('#lightbox').fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });

    // // Close lightbox when clicking/tapping anywhere in the lightbox
    // $('#lightbox').on('click touchstart', function(e) {
    //     e.preventDefault();
    //     $(this).fadeOut();
    //     $('body').css('overflow', ''); // Enable scrolling again
    // });


});

