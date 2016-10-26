// task-modal : logically same as room modal 

angular.module('roomerApp')
    .controller('roomCtrl', roomCtrl);

roomCtrl.inject = ['$window', 'dataFactory', '$state'];

function roomCtrl($window, dataFactory, $state) {
    
    var vm = this;

    var dataIndex; // the index of a particular room in 'roomer' array   

    vm.data = dataFactory;

    for (var i = 0; i < vm.data.length; i++) { // based on assumption that no two rooms have same name
        if (vm.data[i].name === $state.params.roomid) { // check with the roomname in url 
            dataIndex = i;
            break;
        }
    }

    vm.roomData = vm.data[dataIndex];

    vm.checkBoxChange = function() {
        vm.saveData();
    }

    vm.saveData = function() {
        $window.localStorage.setItem("roomer", angular.toJson(vm.data));
    }

    vm.deleteTask = function(taskname) {
        
        for (var i = 0; i < vm.roomData.todo.length; i++) {
            if (vm.roomData.todo[i].task === taskname) {
                vm.roomData.todo.splice(i,1);
                vm.saveData();
                break;
            }
        }
    }


    vm.taskModal = false;

// array of images and tags to be shown in task model
    var images = [
        {'url':'images/taskBack/aftermath.jpg','tag':'Find your passion'},
        {'url':'images/taskBack/explorer.jpg','tag':'Save your time and enjoy'},
        {'url':'images/taskBack/ladder.jpg','tag':'Make way for the future'},
        {'url':'images/taskBack/limits.jpg','tag':'Defy the limits'},
        {'url':'images/taskBack/live.jpg','tag':'Live it like you want'}];


    var getRandomImageIndex = function () {
        return Math.round(Math.random()*4);
    }    

    vm.openTaskModal = function ( ) { 
        var currentIndex = getRandomImageIndex(); // choose random index
        vm.back = images[currentIndex].url;
        vm.tag = images[currentIndex].tag;
        vm.taskModal = true;
    }

    vm.addTask = function ( task ) {
        if ( task !== '' && task !== undefined) {
            vm.roomData.todo.push({'status':false,'task':task});
            vm.taskModal = false;
            vm.taskName='';
            vm.saveData();
        }
    }

}





