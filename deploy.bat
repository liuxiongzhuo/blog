rd /q /s .\public
hugo
git add .
git commit -m "%DATE% %TIME%"
git push
cd C:\Program Files\PuTTY
plink.exe -pw uLwvpASu7hQYI6j1xPVi root@2a14:67c0:104::3c "cd /var/lxz/blog;git pull"