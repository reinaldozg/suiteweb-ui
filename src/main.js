$(function() {	
	$("body").addClass("loaded");
});

/***********************************************
*        NProgress Settings
***********************************************/

// start load bar
NProgress.start();

// end loading bar 
NProgress.done();


/***********************************************
*        PerfectScrollbar
***********************************************/
const pss = document.querySelectorAll('.ps-scrollview-auto');
console.log(pss);
pss.forEach(function(ps_value){    
   let ps = new PerfectScrollbar(ps_value);
   ps.update();
})
