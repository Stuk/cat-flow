/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    catImages: {
        value: []
    },
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    templateDidLoad: {
        value: function() {
            var script = document.createElement("script");
            script.src = "http://www.reddit.com/r/" + this.selectedSub + ".json?limit=100&jsonp=catfn";

            var component = this;
            window["catfn"] = function(jsonData) {
                for (var i = 0; i < jsonData.data.children.length; i++) {
                    var item = jsonData.data.children[i];
                    
                    if (item.data.url.toLowerCase().match(/i.imgur.com\/[a-zA-Z0-9]+.jpg/))
                        component.catImages.push(item.data.url.replace(".jpg", "m.jpg"));
                }
            };

            document.head.appendChild(script);
        }
    }
});
