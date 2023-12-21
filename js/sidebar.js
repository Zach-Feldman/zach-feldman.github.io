/*eslint-env es6*/

/* sidebar.js for Zach Feldman */

$(document).ready(function() {
    // Get the current URL path
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);

    // Determine if the current page is in a subfolder or the root folder
    const inSubfolder = pathSegments.length > 1;

    // Calculate the relative path back to the root
    const relativePath = inSubfolder ? '../' : '';
    
    const sidebarHtml = `
        <div class="sidebar-container">
            <!-- ABOUT -->
            <h2><a href="${relativePath}curatorial/about.html">About</a></h2>
        
        
            <!-- CURATORIAL PROJECTS -->
            <h2 class="dropdown-toggle">Curatorial Projects</h2>
                <div class="dropdown-content">
                    <div id="projects">
                        <div id="date">2023</div>

                        <p><a href="${relativePath}curatorial/city-scenes.html">City Scenes: Video Art from the Collections of n.b.k. and EAI</a></p>

                        <p><a href="${relativePath}curatorial/clocking-out-time-beyond-management.html">Clocking Out: Time Beyond Management</a></p>

                        <p><a href="${relativePath}curatorial/march-of-time.html">The March of Time</a></p>

                        <p><a href="${relativePath}curatorial/when-linearity-stops.html">When Linearity Stops</a></p>

                        <p><a href="${relativePath}curatorial/mine-and-yours.html">Mine and Yours: Forms of Distinction</a></p>

                        <p><a href="${relativePath}curatorial/fluid-forms.html">Fluid Forms: Films by Philip Cartelli</a></p>
                    </div>

                    <div id="projects">
                        <div id="date">2022</div>

                        <p><a href="${relativePath}curatorial/art-or-artifice.html">Art of Artifice: The Role of Documentary in Contemporary Art</a></p>

                        <p><a href="${relativePath}curatorial/a-garden-in-the-flood.html">Matthew Ritchie: A Garden in the Flood</a></p>
                    </div>
                
                    <div id="projects">
                        <div id="date">2021</div>

                        <p><a href="${relativePath}curatorial/biomedia.html">BioMedia: The Age of Media With Life-like Behavior</a></p>

                        <p><a href="${relativePath}curatorial/nobodys-listening.html">Nobody's Listening</a></p>

                        <p><a href="${relativePath}curatorial/barabasilab.html">BarabásiLab: Hidden Patterns</a></p>
                    </div>

                    <div id="projects">
                        <div id="date">2019</div>

                        <p><a href="${relativePath}curatorial/serious-games.html">Serious Games: Documentary Art between Fact and Fiction</a></p>

                        <p><a href="${relativePath}curatorial/counter-investigations.html">Rajiv Vaidya Memorial Lecture - Forensic Architecture: Counter Investigations</a></p>
                    </div>
                
                    <div id="projects">
                        <div id="date">2017</div>

                        <p><a href="${relativePath}curatorial/international-lens.html">International Lens</a></p>
                    </div>
                
                    <div id="projects">
                        <div id="date">2014</div>

                        <p><a href="${relativePath}curatorial/prison-creative-arts-project.html">Prison Creative Arts Project</a></p>
                    </div>
                </div>
                
            <!-- LECTURES -->
            <h2><a href="${relativePath}lectures/lectures.html">Lectures</a></h2>
            
            
            <!-- PUBLICATIONS -->
            <h2 class="dropdown-toggle">Publications</h2>
                <div class="dropdown-content">
                    <div id="projects">
                        <div id="date">2023</div>

                        <p><a href="${relativePath}publications/clocking-out-exhibition-catalog.html"><i>Clocking Out: Time Beyond Management</i> exhibition catalog</a></p>
                    </div>
            
                    <div id="projects">
                        <div id="date">2022</div>

                        <p><a href="${relativePath}publications/art-or-artifice-dissertation.html">Art or Artifice: The Role of Documentary in Contemporary Art." <i>Dissertation</i></a></p>

                        <p><a href="${relativePath}publications/matthew-ritchie-exhibition-catalog.html"><i>Matthew Ritchie: A Garden in the Flood</i> exhibition catalog</a></p>

                        <p><a href="${relativePath}publications/light-and-space-exhibition-catalog.html"><i>Light + Space</i> exhibition catalog</a></p>
                    </div>
                
                    <div id="projects">
                        <div id="date">2021</div>

                        <p><a href="${relativePath}publications/genetics-and-ethics-in-i-am-legend-corpus.html">Genetics and Ethics in the ‘I Am Legend’ Corpus." <i>Journal of Literature and Science</i>, Special Double Issue: Fictions of Genetic Privacy</a></p>
                    </div>
                </div>
            <br>
        </div>
    `;
    

    // Insert the sidebar into a container element
    $('.sidebar').html(sidebarHtml);


});

