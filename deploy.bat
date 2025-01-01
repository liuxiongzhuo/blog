rd /q /s .\public
hugo
git add .
git commit -m "$(powershell -Command Get-Date)"
echo "$(powershell -Command Get-Date)"