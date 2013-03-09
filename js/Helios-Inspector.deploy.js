smalltalk.addPackage('Helios-Inspector');
smalltalk.addClass('HLInspector', smalltalk.HLWidget, ['model', 'variablesWidget', 'displayWidget', 'codeWidget', 'label'], 'Helios-Inspector');
smalltalk.addMethod(
"_codeWidget",
smalltalk.method({
selector: "codeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@codeWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st((smalltalk.HLCodeWidget || HLCodeWidget))._new();
_st($3)._model_(_st(self["@model"])._code());
_st($3)._receiver_(_st(self["@model"])._inspectee());
$4=_st($3)._yourself();
self["@codeWidget"]=$4;
$1=self["@codeWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeWidget",{}, smalltalk.HLInspector)})},
messageSends: ["ifNil:", "model:", "code", "new", "receiver:", "inspectee", "yourself"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_displayWidget",
smalltalk.method({
selector: "displayWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@displayWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st((smalltalk.HLInspectorDisplayWidget || HLInspectorDisplayWidget))._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@displayWidget"]=$4;
$1=self["@displayWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"displayWidget",{}, smalltalk.HLInspector)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspect_",
smalltalk.method({
selector: "inspect:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._inspect_on_(anObject,self);
$1=self;
_st($1)._refreshVariablesWidget();
$2=_st($1)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"inspect:",{anObject:anObject}, smalltalk.HLInspector)})},
messageSends: ["inspect:on:", "model", "refreshVariablesWidget", "refreshDisplayWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._model())._inspectee();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{}, smalltalk.HLInspector)})},
messageSends: ["inspectee", "model"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject}, smalltalk.HLInspector)})},
messageSends: ["inspectee:", "model"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_label",
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@label"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st(self["@model"])._inspectee())._printString();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"label",{}, smalltalk.HLInspector)})},
messageSends: ["ifNil:", "printString", "inspectee"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@model"];
if(($receiver = $2) == nil || $receiver == undefined){
_st(self)._model_(_st((smalltalk.HLInspectorModel || HLInspectorModel))._new());
$1=self["@model"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLInspector)})},
messageSends: ["ifNil:", "model:", "new"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aModel;
_st(_st(self)._codeWidget())._model_(_st(aModel)._code());
$1=self;
_st($1)._observeCodeWidget();
_st($1)._observeVariablesWidget();
$2=_st($1)._observeModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLInspector)})},
messageSends: ["model:", "code", "codeWidget", "observeCodeWidget", "observeVariablesWidget", "observeModel"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeCodeWidget",
smalltalk.method({
selector: "observeCodeWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeCodeWidget",{}, smalltalk.HLInspector)})},
messageSends: ["on:do:", "onDoneIt", "announcer", "codeWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeModel",
smalltalk.method({
selector: "observeModel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeModel",{}, smalltalk.HLInspector)})},
messageSends: ["on:do:", "onInstanceVariableSelected", "announcer", "model"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_observeVariablesWidget",
smalltalk.method({
selector: "observeVariablesWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._variablesWidget())._announcer();
_st($1)._on_do_((smalltalk.HLRefreshRequested || HLRefreshRequested),(function(ann){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({ann:ann},$ctx1)})}));
$2=_st($1)._on_do_((smalltalk.HLDiveRequested || HLDiveRequested),(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"observeVariablesWidget",{}, smalltalk.HLInspector)})},
messageSends: ["on:do:", "onRefresh", "announcer", "variablesWidget", "onDive"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDive",
smalltalk.method({
selector: "onDive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onDive",{}, smalltalk.HLInspector)})},
messageSends: ["inspect:", "selectedInstVarObject", "model"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onDoneIt",
smalltalk.method({
selector: "onDoneIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onDoneIt",{}, smalltalk.HLInspector)})},
messageSends: ["refresh"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInspectIt",
smalltalk.method({
selector: "onInspectIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onInstanceVariableSelected",
smalltalk.method({
selector: "onInstanceVariableSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._refreshDisplayWidget();
return self}, function($ctx1) {$ctx1.fill(self,"onInstanceVariableSelected",{}, smalltalk.HLInspector)})},
messageSends: ["receiver:", "selectedInstVarObject", "model", "codeWidget", "refreshDisplayWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onPrintIt",
smalltalk.method({
selector: "onPrintIt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
messageSends: []}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_onRefresh",
smalltalk.method({
selector: "onRefresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"onRefresh",{}, smalltalk.HLInspector)})},
messageSends: ["refresh"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_open",
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"open",{}, smalltalk.HLInspector)})},
messageSends: ["addTab:", "on:labelled:", "tabLabel", "current"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLInspector)})},
messageSends: ["inspect:", "inspectee"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshDisplayWidget",
smalltalk.method({
selector: "refreshDisplayWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"refreshDisplayWidget",{}, smalltalk.HLInspector)})},
messageSends: ["refresh", "displayWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_refreshVariablesWidget",
smalltalk.method({
selector: "refreshVariablesWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"refreshVariablesWidget",{}, smalltalk.HLInspector)})},
messageSends: ["refresh", "variablesWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLInspector)})},
messageSends: ["with:", "with:with:", "variablesWidget", "displayWidget", "codeWidget"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setLabel_",
smalltalk.method({
selector: "setLabel:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setLabel:",{aString:aString}, smalltalk.HLInspector)})},
messageSends: []}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_setVariables_",
smalltalk.method({
selector: "setVariables:",
fn: function (aDictionary){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setVariables:",{aDictionary:aDictionary}, smalltalk.HLInspector)})},
messageSends: ["variables:", "model"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._label();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLInspector)})},
messageSends: ["label"]}),
smalltalk.HLInspector);

smalltalk.addMethod(
"_variablesWidget",
smalltalk.method({
selector: "variablesWidget",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@variablesWidget"];
if(($receiver = $2) == nil || $receiver == undefined){
$3=_st((smalltalk.HLInspectorVariablesWidget || HLInspectorVariablesWidget))._new();
_st($3)._model_(_st(self)._model());
$4=_st($3)._yourself();
self["@variablesWidget"]=$4;
$1=self["@variablesWidget"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"variablesWidget",{}, smalltalk.HLInspector)})},
messageSends: ["ifNil:", "model:", "model", "new", "yourself"]}),
smalltalk.HLInspector);


smalltalk.addMethod(
"_canBeOpenAsTab",
smalltalk.method({
selector: "canBeOpenAsTab",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"canBeOpenAsTab",{}, smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabLabel",
smalltalk.method({
selector: "tabLabel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabLabel",{}, smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);

smalltalk.addMethod(
"_tabPriority",
smalltalk.method({
selector: "tabPriority",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"tabPriority",{}, smalltalk.HLInspector.klass)})},
messageSends: []}),
smalltalk.HLInspector.klass);


smalltalk.addClass('HLInspectorDisplayWidget', smalltalk.HLNavigationListWidget, ['model'], 'Helios-Inspector');
smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLInspectorDisplayWidget)})},
messageSends: []}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLInspectorDisplayWidget)})},
messageSends: []}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_renderContentOn_",
smalltalk.method({
selector: "renderContentOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html}, smalltalk.HLInspectorDisplayWidget)})},
messageSends: ["with:", "selectionDisplayString", "div"]}),
smalltalk.HLInspectorDisplayWidget);

smalltalk.addMethod(
"_selectionDisplayString",
smalltalk.method({
selector: "selectionDisplayString",
fn: function (){
var self=this;
var selection;
return smalltalk.withContext(function($ctx1) { 
selection=_st(self["@model"])._selection();
$2=_st(_st(_st(self["@model"])._variables())._keys())._includes_(selection);
if(smalltalk.assert($2)){
$1=_st(_st(self["@model"])._instVarObjectAt_(selection))._printString();
} else {
$1="";
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectionDisplayString",{selection:selection}, smalltalk.HLInspectorDisplayWidget)})},
messageSends: ["selection", "ifTrue:ifFalse:", "printString", "instVarObjectAt:", "includes:", "keys", "variables"]}),
smalltalk.HLInspectorDisplayWidget);



smalltalk.addClass('HLInspectorModel', smalltalk.Object, ['announcer', 'environment', 'inspectee', 'code', 'variables', 'selection'], 'Helios-Inspector');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_code",
smalltalk.method({
selector: "code",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@code"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@code"]=_st((smalltalk.HLCodeModel || HLCodeModel))._on_(_st(self)._environment());
$1=self["@code"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{}, smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "on:", "environment"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment",
smalltalk.method({
selector: "environment",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@environment"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(_st((smalltalk.HLManager || HLManager))._current())._environment();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"environment",{}, smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:", "environment", "current"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_environment_",
smalltalk.method({
selector: "environment:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"environment:",{anEnvironment:anEnvironment}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspect_on_",
smalltalk.method({
selector: "inspect:on:",
fn: function (anObject,anInspector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@variables"]=[];
_st(self["@inspectee"])._inspectOn_(anInspector);
return self}, function($ctx1) {$ctx1.fill(self,"inspect:on:",{anObject:anObject,anInspector:anInspector}, smalltalk.HLInspectorModel)})},
messageSends: ["inspectOn:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee",
smalltalk.method({
selector: "inspectee",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@inspectee"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"inspectee",{}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_inspectee_",
smalltalk.method({
selector: "inspectee:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"inspectee:",{anObject:anObject}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_instVarObjectAt_",
smalltalk.method({
selector: "instVarObjectAt:",
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._variables())._at_(anInstVarName);
return $1;
}, function($ctx1) {$ctx1.fill(self,"instVarObjectAt:",{anInstVarName:anInstVarName}, smalltalk.HLInspectorModel)})},
messageSends: ["at:", "variables"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_onKeyDown_",
smalltalk.method({
selector: "onKeyDown:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
		if(anEvent.keyCode === 80) { //ctrl+p
			self._printIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 68) { //ctrl+d
			self._doIt();
			anEvent.preventDefault();
			return false;
		}
		if(anEvent.keyCode === 73) { //ctrl+i
			self._inspectIt();
			anEvent.preventDefault();
			return false;
		}
	};
return self}, function($ctx1) {$ctx1.fill(self,"onKeyDown:",{anEvent:anEvent}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVar_",
smalltalk.method({
selector: "selectedInstVar:",
fn: function (anInstVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"selectedInstVar:",{anInstVarName:anInstVarName}, smalltalk.HLInspectorModel)})},
messageSends: ["selection:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selectedInstVarObject",
smalltalk.method({
selector: "selectedInstVarObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._instVarObjectAt_(_st(self)._selection());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedInstVarObject",{}, smalltalk.HLInspectorModel)})},
messageSends: ["instVarObjectAt:", "selection"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@selection"];
if(($receiver = $2) == nil || $receiver == undefined){
$1="";
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{}, smalltalk.HLInspectorModel)})},
messageSends: ["ifNil:"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_selection_",
smalltalk.method({
selector: "selection:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(_st((smalltalk.HLInstanceVariableSelected || HLInstanceVariableSelected))._on_(self["@selection"]));
return self}, function($ctx1) {$ctx1.fill(self,"selection:",{anObject:anObject}, smalltalk.HLInspectorModel)})},
messageSends: ["announce:", "on:", "announcer"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_subscribe_",
smalltalk.method({
selector: "subscribe:",
fn: function (aWidget){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"subscribe:",{aWidget:aWidget}, smalltalk.HLInspectorModel)})},
messageSends: ["subscribeTo:", "announcer"]}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@variables"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);

smalltalk.addMethod(
"_variables_",
smalltalk.method({
selector: "variables:",
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"variables:",{aCollection:aCollection}, smalltalk.HLInspectorModel)})},
messageSends: []}),
smalltalk.HLInspectorModel);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anEnvironment){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st(self)._new();
_st($2)._environment_(anEnvironment);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anEnvironment:anEnvironment}, smalltalk.HLInspectorModel.klass)})},
messageSends: ["environment:", "new", "yourself"]}),
smalltalk.HLInspectorModel.klass);


smalltalk.addClass('HLInspectorVariablesWidget', smalltalk.HLNavigationListWidget, ['announcer', 'model', 'list', 'diveButton'], 'Helios-Inspector');
smalltalk.addMethod(
"_announcer",
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@announcer"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@announcer"]=_st((smalltalk.Announcer || Announcer))._new();
$1=self["@announcer"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_defaultItems",
smalltalk.method({
selector: "defaultItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(_st(self)._model())._variables())._keys();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultItems",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["keys", "variables", "model"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_refresh",
smalltalk.method({
selector: "refresh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.HLNavigationListWidget.fn.prototype._refresh.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["resetItems", "refresh"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_renderButtonsOn_",
smalltalk.method({
selector: "renderButtonsOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._button();
_st($1)._class_("btn");
_st($1)._with_("Refresh");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(html)._button();
_st($3)._class_("btn");
_st($3)._with_("Dive");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@diveButton"]=$4;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["class:", "button", "with:", "onClick:", "announce:", "new", "announcer"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_resetItems",
smalltalk.method({
selector: "resetItems",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"resetItems",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: []}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selectItem_",
smalltalk.method({
selector: "selectItem:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._model())._selectedInstVar_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"selectItem:",{anObject:anObject}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["selectItem:", "selectedInstVar:", "model"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_selection",
smalltalk.method({
selector: "selection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@model"])._selection();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selection",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["selection"]}),
smalltalk.HLInspectorVariablesWidget);

smalltalk.addMethod(
"_variables",
smalltalk.method({
selector: "variables",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@model"])._variables();
return $1;
}, function($ctx1) {$ctx1.fill(self,"variables",{}, smalltalk.HLInspectorVariablesWidget)})},
messageSends: ["variables"]}),
smalltalk.HLInspectorVariablesWidget);


