let pageCount = 1;

document.getElementById("nextPage").addEventListener(
    "click", 
    function(){
        if (pageCount === 1) {
            document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-87%, 0)';
            document.getElementById('page-indicator').textContent = '1 # 3';
        } 
        else if (pageCount === 2) {
            document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-177%, 0)';
            document.getElementById('page-indicator').textContent = '1 2 #';
        } 
        pageCount += 1;
        if (pageCount > 3) {
            pageCount = 3;
        }
    },
    true
);
document.getElementById("prevPage").addEventListener(
    "click", 
    function(){ 
        if (pageCount === 2) {
            document.getElementsByClassName('grid-container')[0].style.transform = 'translate(4%, 0)';
            document.getElementById('page-indicator').innerText = '# 2 3';
        }
        else if (pageCount === 3) {
            document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-87%, 0)';
            document.getElementById('page-indicator').innerText = '1 # 3';
        } 
        pageCount -= 1;
        if (pageCount < 1) {
            pageCount = 1;
        }
    },
    true
);

document.getElementsByClassName("outer")[0].addEventListener(
    "scroll",
        function(){ 
            if (pageCount === 2) {
                document.getElementsByClassName('grid-container')[0].style.transform = 'translate(4%, 0)';
                document.getElementById('page-indicator').innerText = '# 2 3';
            }
            else if (pageCount === 3) {
                document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-87%, 0)';
                document.getElementById('page-indicator').innerText = '1 # 3';
            } 
            pageCount -= 1;
            if (pageCount < 1) {
                pageCount = 1;
            }
    }
);






document.getElementsByClassName("item1")[0].addEventListener(
    "click", 
    function(){ 
        document.getElementsByClassName('grid-container')[0].style.transform = 'translate(4%, 0)';
        document.getElementById('page-indicator').innerText = '# 2 3';
        pageCount = 1;
    },
    true
);

document.getElementsByClassName("item2")[0].addEventListener(
    "click", 
    function(){ 
        document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-87%, 0)';
        document.getElementById('page-indicator').innerText = '1 # 3';
        pageCount = 2;
    },
    true
);


document.getElementsByClassName("item3")[0].addEventListener(
    "click", 
    function(){ 
        document.getElementsByClassName('grid-container')[0].style.transform = 'translate(-177%, 0)';
        document.getElementById('page-indicator').innerText = '1 2 #';
        pageCount = 3;
    },
    true
);



if( document.getElementsByClassName("inner")[0].scrollTop === (document.getElementsByClassName("inner")[0].scrollHeight - document.getElementsByClassName("inner")[0].offsetHeight))
{        alert("you're at the bottom of the page");
}