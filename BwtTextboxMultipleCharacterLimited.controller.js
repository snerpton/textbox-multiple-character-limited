angular.module('umbraco')
    .controller('BwtTextboxMultipleCharacterLimitedController',
        function ($scope) {
        //function ($scope, assetsService) {
            var characterLimit = $scope.model.config.characterLimit;
            $scope.characterLimit = characterLimit;
            $scope.value2 = "Does this work?";
            $scope.value3 = 3;
            var oldValue = $scope.model.value;

//            assetsService.loadCss('/App_Plugins/BwtTextboxMultipleCharacterLimited/BwtTextboxMultipleCharacterLimited.css');
        }
    );