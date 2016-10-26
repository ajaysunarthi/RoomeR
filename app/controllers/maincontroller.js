angular.module('roomerApp')
    .controller('mainCtrl', mainCtrl);

mainCtrl.inject = ['$window','dataFactory'];

function mainCtrl( $window,dataFactory ) {

    var vm = this;

    vm.data = dataFactory; // get data from localstorage
    
    vm.addRoom = function ( roomname ) {

    // A girl has no name but a Room should have
        if ( roomname !== '' && roomname !== undefined ) {
            vm.data.push({
                'name' : roomname,
                'todo' : []           
            });

        vm.roomModal = false;
        vm.roomName = '';
        // angular.toJson strips $$hashids
        $window.localStorage.setItem("roomer", angular.toJson(vm.data));    
        
        }
    }

    vm.deleteRoom = function ( roomname ) {

        for (var i = 0; i < vm.data.length; i++) {     
            if(vm.data[i].name === roomname){
                vm.data.splice(i, 1);
                $window.localStorage.setItem("roomer", angular.toJson(vm.data));
                break;
            }
        }
        
    }

//__________________
// room-modal basically knows when to show room-modal & when not to 

    vm.roomModal = false;
    
    vm.openRoomModal = function ( ) {
        vm.roomModal = true; // change to show the model
        return vm.roomModal
    }

// __________________  
    

}



