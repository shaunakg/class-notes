@echo off
echo --- Executing GIT commands ---
git add *
git commit -m "Post update (scripted)"
git push
echo --- Done ---
exit