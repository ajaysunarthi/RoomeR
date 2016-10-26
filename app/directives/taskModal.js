// does the same thing as room modal directive

angular.module('roomerApp')
    .directive('taskModal', function() {
        return {

            restrict: 'E',
            replace: true,
            link: link,
            templateUrl: 'views/taskModal.html'

        }

        function link(scope, element, attrs) {

            element.on('click', function(event) {

                var target = event.srcElement || event.target;
                if (target.classList[0] === 'modal') {
                    scope.ctrl.taskModal = false;
                    scope.$apply();
                }

            });
        }

    });
