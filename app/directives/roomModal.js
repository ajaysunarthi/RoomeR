angular.module('roomerApp')
    .directive('roomModal', function() {

        return {

            restrict: 'E',
            link: link,
            templateUrl: 'views/roomModal.html'

        }

        function link(scope, element, attrs) {

            element.on('click', function(event) {
                // because no srcElem in Mozilla, so use target on event
                var target = event.srcElement || event.target;

                if (target.classList[0] === 'modal') { // close the modal if clicked anywhere outside it
                    scope.ctrl.roomModal = false;
                    scope.$apply(); // sync with angular
                }

            });
        }

    });
