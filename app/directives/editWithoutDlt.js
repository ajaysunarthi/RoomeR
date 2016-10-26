/* This directive is same as 'inPlaceEdit' but without delete functionality.
   The basic idea is that the name of a room can be edited but not to be deleted.
*/

angular.module('roomerApp')
    .directive('editWithoutDlt', editWithoutDlt);

editWithoutDlt.inject = ['$timeout'];

function editWithoutDlt($timeout) {
    return {

        require: 'ngModel',
        restrict: 'A',
        replace:true,
        scope: {
            model: '=ngModel',
            type: '@type',
            saveData: '&'
        },
        templateUrl: 'views/editWithoutDlt.html',
        link: link

    }

    function link(scope, element, attrs) {

        scope.editState = false; // if true then respective ng-model becomes editable  
        scope.localModel = scope.model; // store copy of model

        scope.save = function() { // changes to model are stored and icons are hided
            if ( scope.localModel !== '' ) {
                scope.model = scope.localModel;
                scope.toggle();                
            }
        };
        scope.cancel = function() { // discard the changes
            if ( scope.localModel !== '' ) {
                scope.localModel = scope.model;
                scope.toggle();
            }
        }

        scope.delete = function(taskname) {
            scope.deleteTask(taskname);
        }

        scope.toggle = function() { // toggle edit mode
            scope.editState = !scope.editState;
            var x1 = element[0].querySelector("." + scope.type);

            $timeout(function() { // hide if the input becomes blur
                scope.editState ? x1.focus() : x1.blur();
                scope.saveData();
            }, 0);
        }

    }
}
