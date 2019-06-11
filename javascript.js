var Images = ['background_series_3.jpg','1547367959_4.jpg','1547368018_3.jpg','1547368009_2.jpg'];
var buttonLeft = document.getElementById('button_gallery_left');
var buttonRight = document.getElementById('button_gallery_right');
buttonLeft.addEventListener('click', function(){
var img = document.getElementById('man');
	img.src = Images [i+1];
    i++
    if (i>=3){
    	i=-1
    }

});
buttonRight.addEventListener('click',function (){
	var img = document.getElementById('man');
	img.src = Images [i+1];
    i++
    if (i>=3){
    	i=-1
    }
});
i = -1;
