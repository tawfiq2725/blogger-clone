window.onscroll = function() {
    scroll();
};

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // When scrolled down, change background to white and update styles
        document.getElementById("navlist").style.top = "0";
        document.getElementById("navlist").style.backgroundColor = "#fff";
        document.getElementById('blogr').style.color = 'black';
        document.getElementById('signbtn').style.color = 'black';
        document.getElementById('hidebtn').style.display = 'inline-block';
    } else {
        // When back at the top, revert to original styles
        document.getElementById("navlist").style.top = "0";
        document.getElementById("navlist").style.backgroundColor = "#bc382e";
        document.getElementById('blogr').style.color = '#fff';
        document.getElementById('signbtn').style.color = '#fff';
        document.getElementById('hidebtn').style.display = 'none';
    }
}

