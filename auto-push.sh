echo begin > /siyuan/log
git add -A >> /siyuan/log
git commit -m "auto-push" >> /siyuan/log
git push -f >> /siyuan/log

/home/lq2007/ossutil/ossutil64 sync /siyuan/workspace/data/assets oss://notebook-backup-lq2007/siyuan --update -f >> /siyuan/log
