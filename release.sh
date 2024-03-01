#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build


# 进入生成的文件夹
cd dist

git init -b dist
git add -A
git commit -m "deploy | $(date +'%Y-%m-%d %H:%M:%S')"


git push -f git@github.com:Hanwencc/car-list.git dist:dist