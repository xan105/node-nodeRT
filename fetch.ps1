foreach($scope in Get-ChildItem .\packages -File){
  foreach($name in Get-Content .\packages\$scope) {
    & npm i -D @nodert-$scope/$name --ignore-scripts
  }
}
