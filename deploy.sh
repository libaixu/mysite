#!/bin/sh

GIT_HOME=/developor/git-repository/
DESK_PATH=/product/front/

if [ ! -n "$1" ];
then
  echo -e "Please input a project name!you can input as follows:"
  echo -e "./deploy.sh mysite"
  exit
fi

if [ $1 = "mysite" ];
then
  echo -e "============== enter project ======================="
  cd $GIT_HOME$1
else 
  echo -e "=================invalid project name========="
  exit
fi

#clearn dist
echo -e "=================clean dist========="
rm -rf ./dist

echo -e "=================git pull========="
git pull

echo -e "=================npm install========="
npm install

echo -e "=================npm run build========="
npm run build

if [ -d "./dist" ];
then
  echo -e "=================desk bup========="
  mv $DESK_PATH$1/dist $DESK_PATH$1/dist.bup

  echo -e "============== cp dist====================="
  cp -R ./dist $DESK_PATH$1/

  echo -e "================deploy success========================="
else
  echo -e "==================deploy fail=========================="
fi