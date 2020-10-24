
function createProjectTile(project) {
   var tile =  "<div class=\"tile_container\">" +
        "<div class=\"project_tile \">"+
            "<div class = \"project_description\">"+
                "<ul>"+
                    "<li>"+
                        "<h5 class = \"project_title\">"+project.title+"</h5>"+
                    "</li>"+
                    "<li>"+ 
                        project.desc +
                    "</li>"+
                    "<li class = \"tech_stack\">"+
                        "Skills Learned :"+
                        project.skills+
                    "</li>"+
                    "<li class = \"project_footer\">"+
                        "<a target = blank href = \""+
                        project.url+
                        "\"><span class = \"github_link\"></span><span>Go To GitHub</span></a>"+
                    "</li>"+
                "</ul>"+
            "</div>"+
        "</div>"+
    "</div>";
    return tile;
}