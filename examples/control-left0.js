require('Common');
var win = new Window();
win.visible = true;
var buttonSecond = new Button();
var buttonThird = new Button();
var buttonNormal = new Button();
buttonNormal.title = "Aligned to top-left";
buttonNormal.left = '0'; // align to left
buttonNormal.top = '0'; // Horizontally centered to window.
buttonNormal.width = '200px'; // 200 logical pixels wide.

buttonSecond.title = "20px from left";
buttonSecond.left = '20px'; // Position it 20 pixels from the left
buttonSecond.top = '200px'; // Align it to the top by 200 pixels.

buttonThird.title = "Third";
buttonThird.left = '50%'; // Position it 50% from the left.
buttonThird.bottom = '-20%'; // align it 20% of the parent height
                            // from the bottom.

// Add the buttons to the window.
win.appendChild(buttonSecond); 
win.appendChild(buttonNormal);
win.appendChild(buttonThird);
setTimeout(function() {	
	var file = process.argv[1];
	var fs = require('fs');
	process.argv[2]='tests';
	var utils = require('../../../Tint/test/tools/utilities.js');
	var outfile = file.replace('examples/','images/').replace('examples\\','images\\').replace('.js','');
	var os = require('os');
	var market = "";
	var ismac = os.platform().toLowerCase() == "darwin";
	if(ismac && os.release().indexOf("12.") > -1) market = "mountainlion";
	if(ismac && os.release().indexOf("13.") > -1) market = "mavericks";
	if(ismac && os.release().indexOf("14.") > -1) market = "yosemite";
	if(!ismac && os.release().indexOf("6.") > -1) market = "win7";
	if(!ismac && os.release().indexOf("7.") > -1) market = "win8";
	
utils.writeImage(utils.takeSnapshotOfWindow(win),outfile+'_'+market+'_0_window.png');
	//utils.takeSnapshotOfCurrentWindow(outfile+'_'+market+'_topwindow.png');
	//utils.takeSnapshotOfActiveScreen(outfile+'_'+market+'_screen.png');
	//fs.writeFileSync('tmp',outfile+'_'+market+'_screen.png');
	process.exit(0);
},1000);