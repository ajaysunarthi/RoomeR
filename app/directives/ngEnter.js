// checks if enter key is pressed and then eval. This was taken from a stackoverflow answer. 

angular.module('roomerApp').directive('ngEnter', ngEnter);

function ngEnter() {

    return {
        link : link
    }

    function link(scope, element, attrs) {
        
        element.bind("keydown keypress", function(event) {

            if (event.which === 13) {

                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }

        });

    }

}
