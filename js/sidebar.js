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
                <p>Clocking Out: Time Beyond Management</p>
                <p>The March of Time</p>
                <p>When Linearity Stops</p>
                <p>Mine and Yours: Forms of Distinction</p>
                <p>Fluid Forms: Films by Philip Cartelli</p>
            </div>

            <div id="projects">
                <div id="date">2022</div>
                <p>Art of Artifice: The Role of Documentary in Contemporary Art</p>
                <p>Matthew Ritchie: A Garden in the Flood</p>
            </div>

            <div id="projects">
                <div id="date">2021</div>
                <p>BioMedia: The Age of Media With Life-like Behavior</p>
                <p>Nobody's Listening</p>
                <p>BarabásiLab: Hidden Patterns</p>
            </div>

            <div id="projects">
                <div id="date">2019</div>
                <p>Serious Games: Documentary Art between Fact and Fiction</p>
                <p>Rajiv Vaidya Memorial Lecture</p>
            </div>

            <div id="projects">
                <div id="date">2017</div>
                <p>International Lens</p>
            </div>

            <div id="projects">
                <div id="date">2014</div>
                <p>Prison Creative Arts Project</p>
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
    
    
    // Function to highlight the current page in the sidebar
    function highlightCurrentPage() {
        var currentPath = window.location.pathname.split("/").pop();

        $('.sidebar a').each(function() {
            var $this = $(this);
            if ($this.attr('href') === currentPath) {
                $this.addClass('current-page');
            }
        });
    }

    // Call the function to highlight the current page
    highlightCurrentPage();
    
    
    // Toggle mobile menu
    $('.hamburger-menu').click(function() {
        $(this).toggleClass('active'); // Toggle the 'active' class for the hamburger menu
        $('.sidebar').toggleClass('active'); // Toggle the 'active' class for the sidebar
    });
    
     
});

