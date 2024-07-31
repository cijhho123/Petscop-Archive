var xml;
var songnumber = 0;

function getSongs(xmlurl)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",xmlurl,false);
    xmlhttp.send();
    xml = xmlhttp.responseXML;
    
    songnumber = 0;  
    loadSong();
    
}

function loadSong()
{
    soundManager.stopAll();
    url = xml.getElementsByTagName("url")[songnumber].childNodes[0].nodeValue;
    title = xml.getElementsByTagName("title")[songnumber].childNodes[0].nodeValue;
    text = xml.getElementsByTagName("text")[songnumber].childNodes[0].nodeValue;
    world = xml.getElementsByTagName("world")[songnumber].childNodes[0].nodeValue;
    
    document.getElementById("song").href = url;
    document.getElementById("song").innerHTML = title + " <span>(Track " + (songnumber+1) + " of " + (xml.getElementsByTagName("url").length)  + ")</span>";
    document.getElementById("text").innerHTML = text;
    //document.getElementById("world").src = "images/" + world + ".PNG";
    document.getElementById("world").className = "world" + world;
    document.getElementById("world").alt = "World: " + world;
    document.getElementById("world").title = "World: " + world;
    
    if (songnumber == xml.getElementsByTagName("url").length - 1)
    {
        document.getElementById("endinvisible").id = "endvisible";
    }
    else
    {
        document.getElementById("endvisible").id = "endinvisible";
    }
}

function nextSong()
{
    if (songnumber != xml.getElementsByTagName("url").length - 1) 
    {
        songnumber += 1;
        loadSong();
    }
}

function previousSong()
{
    if (songnumber > 0) 
    {
        songnumber -= 1;
        loadSong();
    }
}

function recentSong()
{   
    if (songnumber != xml.getElementsByTagName("url").length - 1)
    {
        songnumber = xml.getElementsByTagName("url").length - 1;
        loadSong();
    }
}

function firstSong()
{
    if (songnumber > 0)
    {
        songnumber = 0;
        loadSong();
    }
}
