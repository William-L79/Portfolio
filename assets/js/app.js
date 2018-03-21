$(document).ready(function(){



const tabDev = ['sass','symfony' , 'html5', 'css3', 'php' , 'javascript' , 'jquery', 'mysql', 'wordpress'];
const tabFlow = ['bitbucket', 'github' , 'gulp'];
const tabCrea = ['photoshop', 'illustrator'];
const tabCategoriesNoms = ['developpement','workflow','creation'];

// let tabCategories = [tabDev,tabFlow,tabCrea];
let tabLogos = tabDev.concat(tabFlow, tabCrea);

function shuffle(tab){
    for(let i = 0 ; i<tab.length ; i++){
        let abdulah = Math.floor(Math.random()*(tab.length-1));
        let itgo = tab[i];
        tab[i] = tab[abdulah];
        tab[abdulah] = itgo;
    }
    // return tab;
}

shuffle(tabLogos);
console.log(tabLogos);

    for(let i = 0 ; i<tabLogos.length ; i++){
        let category = "";
        // for (var j = 0; j < tabCategories.length; j++) {
        //     if(tabCategories[j].includes(tabLogos[i])) category = tabCategoriesNoms[j];
        // }
        if(tabDev.includes(tabLogos[i])) category = tabCategoriesNoms[0];
        if(tabFlow.includes(tabLogos[i])) category = tabCategoriesNoms[1];
        if(tabCrea.includes(tabLogos[i])) category = tabCategoriesNoms[2];

        $('.skills__content').append(
            '<div class="filtr-item skills__item" data-category="'+category+'" data-sort="value">'+
                '<i class="skills__logo devicon-'+tabLogos[i]+'-plain"></i>'+
                '<p class="skills__texte"> '+tabLogos[i]+' </p>'+
              '</div>'

            )
    }





"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var i = n[t];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function(n, t, i) {
        return t && e(n.prototype, t), i && e(n, i), n;
    }
}();
var Navigation = function() {
        function e(n, t, i) {
            var a = this;
            _classCallCheck(this, e), this.$el = {}, this.$el.navigation = n, this.$el.button = t, this.$el.close = i, this.opened = !1, this.$el.button.addEventListener("click", function(e) {
                e.preventDefault(), a.opened ? a.close() : a.open();
            }), this.$el.close.addEventListener("click", function(e) {
                e.preventDefault(), a.opened ? (a.close(), a.shrink()) : a.open();
            })
        }
        return _createClass(e, [{
            key: "open",
            value: function() {
                this.opened = !0, this.$el.navigation.classList.add("proto-navigation-expanded");
            }
        }, {
            key: "close",
            value: function() {
                this.opened = !1, this.$el.navigation.classList.remove("proto-navigation-expanded");
            }
        }, {
            key: "shrink",
            value: function() {
                var e = this;
                this.$el.navigation.classList.add("proto-navigation-protorinked"), setTimeout(function() {
                    e.$el.navigation.classList.remove("proto-navigation-protorinked");
                }, 400)
            }
        }]), e
    }(),
    proto_navigation = new Navigation(document.querySelector(".proto-navigation"), document.querySelector(".proto-header-toggle-nav"), document.querySelector(".proto-navigation-close"));


    $('.proto-navigation-close').click(function() {
        console.log('vouvou');
        $('.proto-navigation').remove("proto-navigation-expanded");

    });



});
