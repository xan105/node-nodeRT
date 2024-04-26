#Copyright (c) Anthony Beaumont
#This source code is licensed under the Apache 2.0 License
#found in the LICENSE file in the root directory of this source tree.

param (
  [Parameter(Mandatory)]
    [string]$target,
  
  [Parameter(Mandatory)]
    [int]$abi,
  
  [string]$runtime = "node",
  
  [switch]$skip = $False
)

#Make destination dirs
if (!(Test-Path .\build\logs\$runtime\abi$abi)) {
  New-Item .\build\logs\$runtime\abi$abi -ItemType Directory | Out-Null
}
if (!(Test-Path .\prebuilds\$runtime\abi$abi)) {
  New-Item .\prebuilds\$runtime\abi$abi -ItemType Directory | Out-Null
}
foreach($arch in "x64", "arm64"){
  if (!(Test-Path .\build\logs\$runtime\abi$abi\$arch)) {
    New-Item .\build\logs\$runtime\abi$abi\$arch -ItemType Directory | Out-Null
  }
  if (!(Test-Path .\prebuilds\$runtime\abi$abi\$arch)) {
    New-Item .\prebuilds\$runtime\abi$abi\$arch -ItemType Directory | Out-Null
  }
  
  #Reset file content
  Clear-Content -Path .\build\logs\$runtime\failed.abi$abi.$arch.txt -Force -ErrorAction SilentlyContinue
}

#Compile
foreach($scope in Get-ChildItem .\packages -File){
  foreach($name in Get-Content .\packages\$scope) {
    foreach($arch in "x64", "arm64"){
      Write-Host -NoNewline $scope/$name $arch
    
      if ($skip -And (Test-Path .\prebuilds\$runtime\abi$abi\$arch\$name.node)) {
        Write-Host " [Skip]" -ForegroundColor Yellow
        continue
      }
      
      #ARM64 is officially supported node >= 20
      if(
        ($arch -eq "arm64" -And $runtime -eq "node" -And $abi -lt 115) -Or 
        ($arch -eq "arm64" -And $runtime -eq "electron" -And $abi -lt 123)
      ){
        Write-Host " [Force Skip (unavailable)]" -ForegroundColor Orange
        continue
      }

      & { npx prebuildify --t $runtime@$target --strip --arch $arch --platform win32 --cwd "node_modules/@nodert-$scope/$name" } 2>&1 > .\build\logs\$runtime\abi$abi\$arch\$name.log
      if ($LASTEXITCODE -eq 0) {
        Write-Host " [Ok]" -ForegroundColor Green
        Move-Item -Path .\node_modules\@nodert-$scope\$name\prebuilds\win32-$arch\@nodert-$scope+$name.node -Destination .\prebuilds\$runtime\abi$abi\$arch\$name.node -Force
      } else {
        Write-Host " [Fail]" -ForegroundColor Red
        Write-Output $name >> .\build\logs\$runtime\failed.abi$abi.$arch.txt
      }
    }
  }
}
