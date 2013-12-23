(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['actionbar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n<form class=\"form-inline\" role=\"form\">\n  <div class=\"form-group col-md-3\">\n    <label class=\"sr-only\" for=\"inputName\">Name</label>\n    <input type=\"text\" class=\"form-control input-sm\" id=\"input-name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-trigger=\"hover\" data-title=\"Name\">\n  </div>\n  <div class=\"form-group col-md-4\">\n    <label class=\"sr-only\" for=\"inputKeywords\">Keywords</label>\n    <input type=\"text\" class=\"form-control input-sm\" id=\"input-keywords\" value=\"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-trigger=\"hover\" data-title=\"Keywords\">\n  </div>\n  <div class=\"form-group col-md-5\">\n  <button id=\"change-concept\" type=\"button\" class=\"btn btn-primary btn-sm\">Change</button>\n  <button id=\"suggest-keywords\" type=\"button\" class=\"btn btn-default btn-sm\">Suggest Keywords</button>\n  <button id=\"properties-concept\" type=\"button\" class=\"btn btn-default btn-sm\">Properties</button>\n  <button id=\"vis-decrease\" type=\"button\" class=\"btn btn-default btn-xs\">\n    <span class=\"glyphicon glyphicon-minus\"></span>\n  </button>\n  <button id=\"vis-increase\" type=\"button\" class=\"btn btn-default btn-xs\">\n    <span class=\"glyphicon glyphicon-plus\"></span>\n  </button>\n</div>\n</form> \n</div>\n<div class=\"row\" style=\"margin-top:10px\">\n  <form class=\"form-inline\" role=\"form\">\n    <button id=\"new-concept\" type=\"button\" class=\"btn btn-success btn-sm\">New Sub-Concept</button>\n    <button id=\"suggest-concepts\" type=\"button\" class=\"btn btn-primary btn-sm\">Suggest Sub-Concepts</button>\n    <button id=\"query-concept\" type=\"button\" class=\"btn btn-primary btn-sm\">Sub-Concept From Query</button>\n    <button id=\"move-concept\" type=\"button\" class=\"btn btn-warning btn-sm\">Move</button>\n    <button id=\"delete-concept\" type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n    <button id=\"suggest-keywords\" type=\"button\" class=\"btn btn-default btn-sm\">View Documents</button>\n    <button id=\"suggest-keywords\" type=\"button\" class=\"btn btn-default btn-sm\">Visualization</button>\n  </form> \n</div>\n\n";
  return buffer;
  });
templates['answerbuttons'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<form class=\"form-horizontal\" role=\"form\">\n  <div class=\"form-group\">\n    <button data-alid=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " data-questionid=";
  if (stack1 = helpers.questionId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.questionId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " data-answer=1 type=\"button\" class=\"btn btn-primary pull-left answer-question\">Yes</button>\n    <button data-alid=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " data-questionid=";
  if (stack1 = helpers.questionId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.questionId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " data-answer=0 type=\"button\" class=\"btn btn-default pull-left answer-question\">No</button>\n    <button data-alid=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " type=\"button\" data-dismiss=\"modal\" class=\"btn btn-danger pull-right cancel-question\">Cancel</button>\n  </div>\n</form>\n";
  return buffer;
  });
templates['deletemodal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div class=\"form-group\" style=\"margin-top:5px\">\n          <label for=\"picker-destination\">Destination: </label>\n          <select class=\"selectpicker\" id=\"picker-destination\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.concepts, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <!-- end of each field -->\n          </select>\n        </div> <!-- /from group -->\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <option data-did=";
  if (stack1 = helpers.$id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.$id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button data-cid="
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.$id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " type=\"button\" id='delete-move' class=\"btn btn-warning\" style=\"margin-top:5px\">Delete and Move Sub Concepts</button>\n        ";
  return buffer;
  }

  buffer += "<!-- Modal -->\n<div class=\"modal fade\" id=\"modal-delete\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-delete-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"modal-delete-label\">Delete "
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n      </div>\n      <div class=\"modal-body\" id=\"modal-delete-main\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.hasChildren), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n      <div class=\"modal-footer\">\n        <button data-cid="
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.$id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " type=\"button\" id='delete-all' class=\"btn btn-danger\" style=\"margin-top:5px\">Delete Sub Concepts</button>\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.hasChildren), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
  return buffer;
  });
templates['movemodal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <option data-did=";
  if (stack1 = helpers.$id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.$id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n            ";
  return buffer;
  }

  buffer += "<!-- Modal -->\n<div class=\"modal fade\" id=\"modal-move\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-move-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"modal-move-label\">Move "
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n      </div>\n      <div class=\"modal-body\" id=\"modal-move-main\">\n        <div class=\"form-group\">\n          <label for=\"picker-destination\">Destination: </label>\n          <select class=\"selectpicker\" id=\"picker-destination\">\n            ";
  stack2 = helpers.each.call(depth0, depth0.concepts, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <!-- end of each field -->\n          </select>\n        </div> <!-- /from group -->\n      </div>\n      <div class=\"modal-footer\">\n        <button data-cid="
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.$id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " type=\"button\" id='move-to-destination' class=\"btn btn-warning\">Move</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
  return buffer;
  });
templates['ontoload'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <option>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</option>\n              ";
  return buffer;
  }

  buffer += "<!-- OntoLoad Modal -->\n<div class=\"modal fade\" id=\"loadModal\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loadModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Load Ontology</h4>\n      </div> <!-- /modal header -->\n      <div class=\"modal-body\">\n           <div class=\"form-group\">\n            <label for=\"ontoPicker\">Ontology: </label>\n            <select class=\"selectpicker\" id=\"ontoPicker\">\n              ";
  stack1 = helpers.each.call(depth0, depth0.ontologies, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            </select>\n          </div>\n      </div> <!-- /modal body -->\n      <div class=\"modal-footer\">\n        <button id=\"close\" type=\"button\" class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n        <button id=\"ontoLoad\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Load</button>\n      </div> <!-- /modal footer -->\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div> <!-- /LoadView Modal -->\n";
  return buffer;
  });
templates['ontonew'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"panel-title\">\n                <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse"
    + escapeExpression(((stack1 = depth0.storeId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                  "
    + escapeExpression(((stack1 = depth0.storeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                </a>\n              </h4>\n            </div> <!-- /panel heading -->\n            <div id=\"collapse"
    + escapeExpression(((stack1 = depth0.storeId),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"panel-collapse collapse\">\n              <div class=\"panel-body\">\n                <!-- Create ontology Form -->\n                <div class=\"row\">\n                  <div class=\"input-group\">\n                    <div class=\"form-group\">\n                      <label for=\"fieldPicker-"
    + escapeExpression(((stack1 = depth0.storeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Field: </label>\n                      <select class=\"selectpicker\" id=\"fieldPicker-"
    + escapeExpression(((stack1 = depth0.storeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                        ";
  stack2 = helpers.each.call(depth0, depth0.fields, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += " <!-- end of each field -->\n                      </select>\n                    </div> <!-- /from group -->\n\n                    <div class=\"form-group\">\n                      <label for=\"stemmerPicker\">Stemmer: </label>\n                      <select class=\"selectpicker\" id=\"stemmerPicker\">\n                        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.langopts),stack1 == null || stack1 === false ? stack1 : stack1.stemmers), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"maxNgramLength\">Max n-gram length: </label>\n                      <input type=\"number\" id=\"maxNgramLength\" value=\"3\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"minNgramFreq\">Min n-gram frequency: </label>\n                      <input type=\"number\" id=\"minNgramFreq\" value=5>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"stopwordsPicker\">Stopword list: </label>\n                      <select class=\"selectpicker\" id=\"stopwordsPicker\">\n                        ";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.langopts),stack1 == null || stack1 === false ? stack1 : stack1.stopwords), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"customWordsFile\">Load custom words: </label>\n                      <input type=\"file\" id=\"customWordsFile\">\n                    </div>\n                    <button class=\"btn btn-primary ontoCreate\" data-storeName=\""
    + escapeExpression(((stack1 = depth0.storeName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Select</button>\n                  </div>  <!-- input group -->\n                </div> <!-- /row -->\n                <!-- / End of create ontology form -->\n              </div> <!--/panel body -->\n            </div> <!-- /collapse --> \n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option>"
    + escapeExpression(((stack1 = depth0.fieldName),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                        ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n                        <option>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n                        ";
  return buffer;
  }

  buffer += "<!-- OntoNew Modal -->\n<div class=\"modal fade\" id=\"newModal\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\">Load Store</h4>\n      </div> <!-- /modal header -->\n      <div class=\"modal-body\">\n        <div class=\"alert alert-danger fade in\" id=\"nameAlert\" style=\"display: none\">\n          <button id=\"modalClose\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n          <p><strong>Invalid name for ontology!</strong> Change the name field above and try again.</p>\n        </div>\n        <form role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Ontology Name:</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputOntoName\" placeholder=\"onto_\">\n          </div>\n        </form>\n        <div class=\"panel-group\" id=\"accordion\">\n          ";
  stack1 = helpers.each.call(depth0, depth0.stores, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <!-- end of each store -->\n          </div> <!-- /panel (accordion) item -->\n        </div> <!-- /accordion -->\n      </div> <!-- /modal body -->\n      <div class=\"modal-footer\">\n        <button id=\"close\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div> <!-- /modal footer -->\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div> <!-- /LoadView Modal -->\n";
  return buffer;
  });
templates['ontoproperties'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4> Details </h4>\n<form role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"input-name\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"input-name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"input-keywords\">Keywords</label>\n    <input type=\"text\" class=\"form-control\" id=\"input-keywords\" value=\"";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  </div>\n\n  <button type=\"button\" id=\"submit-details\" data-conceptId=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " class=\"btn btn-default\">Submit</button>\n</form>\n";
  return buffer;
  });
templates['ontotree'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <ul>\n      ";
  stack1 = helpers.each.call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul> \n   ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = self.invokePartial(partials.conceptPartial, 'conceptPartial', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  return buffer;
  }

  buffer += "<li data-conceptid=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ">\n    <input type=\"checkbox\" checked=\"checked\" id=\"tree-item-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n    <label for=\"tree-item-";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</label>\n    ";
  stack1 = helpers['if'].call(depth0, depth0.children, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n </li>\n";
  return buffer;
  });
templates['ontoview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\" id=\"main-heading\">\n    <h3 class=\"panel-title\">Ontology Details</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div id=\"actionbar\"></div>\n    <div id=\"ontoviz\"></div>\n  </div>\n</div>\n\n\n";
  });
templates['querymodal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Modal -->\n<div class=\"modal fade\" id=\"modal-query\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-query-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close cancel-question\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"modal-query-label\">Query "
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n      </div>\n      <div class=\"modal-body\" id=\"modal-query-main\">\n        <form class=\"form-horizontal\" role=\"form\">\n        <div class=\"form-group\" style=\"margin-top:5px\">\n          <textarea id=\"query-text\" class=\"form-control\" rows=\"6\"></textarea>\n        </div> <!-- /from group -->\n      </form>\n      </div>\n      <div id=\"modal-query-footer\" class=\"modal-footer\">\n        <button id=\"make-query\" data-cid="
    + escapeExpression(((stack1 = ((stack1 = depth0.concept),stack1 == null || stack1 === false ? stack1 : stack1.$id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " type=\"button\" class=\"btn btn-primary\">Query</button>\n        <button type=\"button\" class=\"btn btn-default cancel-question\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
  return buffer;
  });
templates['question'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<hr/>\n<h5>Current Concept</h5>\n<table class=\"table table-bordered table-responsive\">\n<thead>\n  <tr>\n    <th>Name</th>\n    <th>Keywords</th>\n    <th>Docs</th>\n    <th></th>\n  </tr>\n</thead>\n<tr>\n  <td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td>";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td>";
  if (stack1 = helpers.count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td><button data-alid=";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " type=\"button\" data-dismiss=\"modal\" class=\"btn btn-success finish-question\">Add</button></td>\n</tr>\n</table>\n";
  return buffer;
  }

  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n";
  stack1 = helpers['if'].call(depth0, depth0.mode, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
templates['suggestmodal'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Modal -->\n<div class=\"modal fade\" id=\"modal-suggest\" data-backdrop=\"false\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-suggest-label\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n        <h4 class=\"modal-title\" id=\"modal-suggest-label\">Suggest Sub Concepts for ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      </div>\n      <div class=\"modal-body\" id=\"modal-suggest-main\">\n        <form class=\"form-inline\" role=\"form\">\n          <div class=\"form-group\">\n            <label for=\"input-number-suggestions\">Number of sub concepts: </label>\n            <input type=\"number\" class=\"form-control\" id=\"input-number-suggestions\" value=\"2\">\n          </div>\n        </form>\n        <button type=\"button\" id='suggest' class=\"btn btn-primary\" style=\"margin-top:5px\">Suggest</button>\n        <table id=\"suggestions-table\" class=\"table table-bordered table-responsive\" style=\"margin-top:5px\">\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n";
  return buffer;
  });
templates['suggesttable'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<tr data-lid=\"";
  if (stack1 = helpers.lid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td>";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td>";
  if (stack1 = helpers.numDocs) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.numDocs; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n  <td><button class=\"btn btn-primary\" id=\"add-suggested\" data-lid=\"";
  if (stack1 = helpers.lid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Add</button></td>\n</tr>\n";
  return buffer;
  }

  buffer += "<thead>\n  <tr>\n    <th>Name</th>\n    <th>Keywords</th>\n    <th>Docs</th>\n    <th></th>\n  </tr>\n</thead>\n";
  stack1 = helpers.each.call(depth0, depth0.suggestions, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  return buffer;
  });
})();