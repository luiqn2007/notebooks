sudo docker stop 56380b31e4c1
echo push current notes, please waiting...
git add -A
git commit -m "auto-push(before local)"
git push -f
echo waiting update, press any key to continue...
read temp
git pull
sudo docker start 56380b31e4c1

