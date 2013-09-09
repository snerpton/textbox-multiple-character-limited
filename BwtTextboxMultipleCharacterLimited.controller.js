angular.module('umbraco')
    .controller('My.BwtTextboxMultipleCharacterLimitedController',
        function ($scope, assetsService, $log) {
            var characterLimit = $scope.model.config.characterLimit;
            $scope.characterLimit = characterLimit;
            $scope.value2 = "Does this work?";
            var oldValue = $scope.model.value;


            $scope.change = function () {
                $log.log("New value: " + $scope.model.value);

                $log.log($scope.model)
                $log.log($scope.model.value)

            };

            assetsService.loadCss('/App_Plugins/BwtTextboxMultipleCharacterLimited/BwtTextboxMultipleCharacterLimited.css');

            /*
            // Following a keypress and before text area updates, grab the 
            // current value. This enables us to restore the old value if the 
            // character count exceeds the character limit
            $scope.myKeyPress = function () {

            oldValue = $scope.model.value;

            if (!(oldValue.length <= (characterLimit - 1))) {
            $log.log('Old value: ' + oldValue);
            $log.log('New value: ' + $scope.model.value);
            $scope.model.value = oldValue;
            }
            }
            */
            /*
            $scope.myKeyDown = function () {
                
            if (($scope.model.value.length) <= characterLimit) {
            $log.log('Length OK: ' + ($scope.model.value.length));
            }
            else {
            $log.log('WARNING: length too long: ' + ($scope.model.value.length));
            $scope.model.value = oldValue;
            }
            }
            */



        }
    );