﻿for(var i = 0; i < 24; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u17'] = 'top';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u10'] = 'top';
u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('createEvent.html');

}
});
gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u14'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';gv_vAlignTable['u4'] = 'top';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u7'] = 'top';
u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	SetPanelVisibility('u21','','none',500);

}
});
document.getElementById('u22_img').tabIndex = 0;

u22.style.cursor = 'pointer';
$axure.eventManager.click('u22', function(e) {

if (true) {

	SetPanelVisibility('u21','hidden','none',500);

}
});
gv_vAlignTable['u23'] = 'center';