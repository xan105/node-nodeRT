param (
  [Parameter(Mandatory)]
    [string]$target,
	
  [Parameter(Mandatory)]
    [string]$abi,
	
  [string]$runtime = "node",
	
  [switch]$skip = $False
)

#Make destination dirs
if (!(Test-Path .\logs\build\$runtime\$abi)) {
  New-Item .\logs\build\$runtime\$abi -ItemType Directory | Out-Null
}
if (!(Test-Path .\prebuilds\$runtime\$abi)) {
  New-Item .\prebuilds\$runtime\$abi -ItemType Directory | Out-Null
}

#Reset file content
Clear-Content -Path .\logs\build\$runtime\failed.$abi.txt -Force -ErrorAction SilentlyContinue

#Compile
foreach($scope in Get-ChildItem .\packages -File){
  foreach($name in Get-Content .\packages\$scope) {
    Write-Host -NoNewline $scope/$name
	
    if ($skip -And (Test-Path .\prebuilds\$runtime\$abi\$name.node)) {
      Write-Host " [Skip]" -ForegroundColor Yellow
      continue
    }
    
    & { npx prebuildify --t $runtime@$target --strip --arch x64 --platform win32 --cwd "node_modules/@nodert-$scope/$name" } 2>&1 > .\logs\build\$runtime\$abi\$name.log
    if ($LASTEXITCODE -eq 0) {
      Write-Host " [Ok]" -ForegroundColor Green
      Move-Item -Path .\node_modules\@nodert-$scope\$name\prebuilds\win32-x64\$runtime.$abi.node -Destination .\prebuilds\$runtime\$abi\$name.node -Force
    } else {
      Write-Host " [Fail]" -ForegroundColor Red
      Write-Output $name >> .\logs\build\$runtime\failed.$abi.txt
    }
  }
}
