(function(){var t={}.hasOwnProperty,o=function(o,e){function i(){this.constructor=o}for(var r in e)t.call(e,r)&&(o[r]=e[r]);return i.prototype=e.prototype,o.prototype=new i,o.__super__=e.prototype,o};require(["jquery","jquery-cookie","underscore","backbone","geoPosition","async!http://maps.google.com/maps/api/js?sensor=false'"],function(t){var e;return e=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return o(e,t),e.prototype.el=$("#map"),e.prototype.center=null,e.prototype.map_id="#my_map",e.prototype.map=null,e.prototype.width="100%",e.prototype.height="100%",e.prototype.markers=[],e.prototype.centerMarker=null,e.prototype.initialize=function(t){return t&&(t.width&&(this.width=t.width),t.height&&(this.height=t.height)),this.storedPosition()?this.center=this.storedPosition():this.getBrowserGeolocation(),$(this.el).length?this.render():void 0},e.prototype.render=function(){var t;return $(this.el).append("<div id='"+this.map_id+"' style='width: "+this.width+"; height: "+this.height+";'></div>"),t={zoom:12,center:new google.maps.LatLng(this.center.lat,this.center.lng)},this.map=new google.maps.Map(document.getElementById(this.map_id),t)},e.prototype.getBrowserGeolocation=function(){return geoPosition.init()?geoPosition.getCurrentPosition(this.storePosition,this.geolocationErrorCallback):console.log("Error al localizar")},e.prototype.storedPosition=function(){var t,o;return t=$.cookie("lat"),o=$.cookie("lng"),t&&o?{lat:t,lng:o}:!1},e.prototype.storePosition=function(t){$.cookie("lat",t.coords.latitude),$.cookie("lng",t.coords.longitude),this.center=this.storedPosition()},e.prototype.geolocationErrorCallback=function(t){return 1===t.code?console.log("Denied by user."):void 0},e}(Backbone.View),window.map_view=new e})}).call(this);
//# sourceMappingURL=./map.js.map