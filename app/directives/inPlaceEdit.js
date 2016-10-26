angular.module('roomerApp')
    .directive('inPlaceEdit', inPlaceEdit);

inPlaceEdit.inject = ['$timeout'];

function inPlaceEdit($timeout) {
    return {

        require: 'ngModel',
        restrict: 'A',
        replace:true,
        scope: {
            model: '=ngModel',
            type: '@type',
            saveData: '&',
            deleteTask: '&'
        },
        templateUrl: 'views/inPlaceEdit.html',
        link: link

    }

    function link(scope, element, attrs) {

        scope.editState = false;
        scope.localModel = scope.model;

        scope.save = function() {
            if ( scope.localModel !== '' ) {
            // don't deal with anything related to empty task neither save it nor cancel it                    
                scope.model = scope.localModel;
                scope.toggle();                
            }
        };

        scope.cancel = function() {
            if ( scope.localModel !== '' ) {
                scope.localModel = scope.model;
                scope.toggle();
            }
        }

        scope.delete = function(taskname) {
            scope.deleteTask(taskname);
        }

        scope.toggle = function() {

            scope.editState = !scope.editState;

            var x1 = element[0].querySelector("." + scope.type);

            $timeout(function() {
                scope.editState ? x1.focus() : x1.blur();
                scope.saveData();
            }, 0);


        }

    }
}


