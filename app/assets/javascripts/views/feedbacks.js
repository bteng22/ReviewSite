ReviewSite = ReviewSite || {};

var activateAccordion = function() {
  $("#accordion").accordion({
    heightStyle:"content",
    active: 0,
    collapsible: false,
    create: function(event, ui) {
      toggleFields({ commentsHeader: ui.header });
    }
  });

  $("#accordion").on("accordionactivate", function (event, ui) {
    toggleFields({ oldHeader: ui.oldHeader, newHeader: ui.newHeader });

    if (ui.newPanel.length) {
      $.scrollTo(ui.newHeader, {offset:{top:-100}});
    }
  });
};

var toggleFields = function(headers) {
  for(var key in headers) {
    var headerID = "#" + headers[key].attr('data-heading-title');
    $(headerID).toggle();
  }
};

var warnIfUnsavedChanges = function() {
  $(".feedback-form-container").find("input, select, textarea").on("keyup", function() {
    window.onbeforeunload = function() {
      return "You have not saved your changes.";
    };

    $(".feedback-form-container").find("input, select, textarea").off("keyup");
  });
};

var previewAndSubmit = function() {
  $(".feedback-form-container").find("#save-feedback-button, #preview-and-submit-button").on("click", function() {
    window.onbeforeunload = null;
  });
};


ReviewSite.feedbacks = {
  init: function() {
    activateAccordion();
    warnIfUnsavedChanges();
    previewAndSubmit();
  }
};
