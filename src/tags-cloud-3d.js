var TagsCloud3D = function(options) {
  this.isShowing = false;

  var domNode = document.createElement('div');
  this.domNode = domNode;
  this.container = options.container;

  this.maxFont = parseInt(options.maxFont) || 24;
  this.minFont = parseInt(options.minFont) || 12;
  this.width = parseInt(options.width) || 400;
  this.height = parseInt(options.height) || 400;
  this.domNode.style.width = this.width + 'px';
  this.domNode.style.height = this.height + 'px';
  this.tags = options.tags || [];
  this.tags.forEach(function(tag) {
    var fontSize = this.minFont + parseInt(Math.random() * (this.maxFont - this.minFont)) + 'px';
    var tagElem = document.createElement('span');
    tagElem.innerText = tag;
    tagElem.style['font-size'] = fontSize;
    tagElem.className = 'tag-item';
    this.domNode.appendChild(tagElem);
  }.bind(this));

  if (options.background) {
    domNode.style.background = options.background;
  }

  return this;
};

TagsCloud3D.prototype.show = function() {
  if (this.isShowing) {
    console.error('The tags cloud is showing');
    return;
  } else {
    this.isShowing = true;
  }
  if (!this.container) {
    console.error('Must specify a container node to show the tags cloud');
    return;
  }
  while (this.container.hasChildNodes()) {
    this.container.removeChild(this.container.lastChild);
  }
  this.container.appendChild(this.domNode);
};
