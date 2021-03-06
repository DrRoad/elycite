App.Views.OntoNewView = Backbone.View.extend({
  // element to be created
  id:'newOnto',
  className: "mainView",

  template: Handlebars.templates['ontonew'],
  errorTemplate: Handlebars.templates['erroralert'],

   events: {
     "click #ontoCreate" : "createOntology",
     "change #storePicker": "changeStore",
  },

  initialize: function() {
    console.log("Views.OntoNew.init");

    if(typeof App.LanguageOptions === 'undefined') {
      App.API.getLanguageOptions();
    }
    this.stores = new App.Collections.Stores();
    this.stores.fetch();
    this.listenTo(this.stores, "sync", this.render);
  },
 
  render: function() {
    console.log("Views.OntoNewView.render");
    var stores = this.stores.toJSON();
    // check if there are any data stores to load
    if(stores.length === 0) { // no, show warning
      console.log("Views.OntoNewView.render: no stores to load");
      if($('.alert').length > 0) {
        $('.alert').remove();
      }
      $('#main').prepend(this.errorTemplate());
      $('#emptyStoreList').show();
    }
    else { // yes, show load modal
      var lopts = App.State.LanguageOptions;
      var fields = stores[0].fields;
      $(this.el).appendTo('#main').html( this.template(
            {stores:stores, fields:fields, langopts:lopts}
      ));
      if($('.alert').length > 0) {
        $('.alert').remove();
      }
      $(this.el).prepend(this.errorTemplate());
      $('.selectpicker').selectpicker('render');
    }
  },

  changeStore: function(ev) {
    var sel = $(ev.currentTarget).val();
    var store = this.stores.findWhere({storeName: sel}).toJSON();
    $('#fieldPicker > option').remove();
    for(ii = 0; ii < store.fields.length; ii++) {
      $('#fieldPicker').append("<option>" + store.fields[ii].fieldName + "</option>");
    }
    $('#fieldPicker').selectpicker('refresh');
  },

  createOntology: function(event) {
    console.log("Views.OntoNewView.select");
    var ontoName = $("#inputOntoName").val().trim();
    if (ontoName.length === 0) {
      $("#nameAlert").show();
      return;
    }
    
    // get the store id
    var storeName = $("#storePicker").val();
    console.log(storeName);
  
    // get the params
    var stemmer = $("#stemmerPicker").val();
    console.log(stemmer);
    var maxNgramLength = $("#maxNgramLength").val();
    console.log(maxNgramLength);
    var minNgramFreq = $("#minNgramFreq").val();
    console.log(minNgramFreq);
    var stopwords = $("#stopwordsPicker").val();
    console.log(stopwords);
    //var customWordsFile = $(event.currentTarget).parent().children().children("#customWordsFile").val();
    //console.log(customWordsFile);

    var opts = {
      ontologyName: ontoName,
      dataStore: storeName, 
      stemmer: stemmer,
      maxNgramLength: maxNgramLength, 
      minNgramFreq: minNgramFreq,
      stopwordList: stopwords
    };
    $('#ontoCreate').button('loading');
    this.ontologies = new App.Collections.Ontologies();
    this.listenToOnce(this.ontologies, "add", this.loadNew);
    this.ontology = this.ontologies.create(opts, {wait:true, error:this.createError});
  },

  createError: function(model, xhr, options) {
    $('#ontoCreate').button('reset');
    $("#createAlert").show();
  },

  loadNew: function(model, collection, options) {
    console.log("View.OntoNewView.loadNew");
    
    // Setup state
    App.Helpers.setState(model, this.doneLoading, this.loadError);
  },

  loadError: function(model, xhr, options) {
    $("#loadAlert").show();
  },

  doneLoading: function() {
    console.log("View.OntoNewView.doneLoading");
    App.router.navigate("ontoview", {trigger: true});
    this.remove();
  }

});
