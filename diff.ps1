foreach($scope in Get-ChildItem .\packages -File){
  foreach($name in Get-Content .\packages\$scope) {
    & npx patch-package @nodert-$scope/$name --exclude '"build|package.json"'
  }
}
