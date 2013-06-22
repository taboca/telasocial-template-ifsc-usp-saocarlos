#!/bin/bash
git reset --hard HEAD
git pull --force
cp -r ./static/* /usr/lib/taboca/chrome/tagvisor/content/visor/
python _restart.py;
