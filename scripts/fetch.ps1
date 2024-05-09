#Copyright (c) Anthony Beaumont
#This source code is licensed under the Apache 2.0 License
#found in the LICENSE file in the root directory of this source tree.

foreach($scope in Get-ChildItem .\packages -File){
  foreach($name in Get-Content .\packages\$scope) {
    & npm i -D @nodert-$scope/$name --ignore-scripts
  }
}
