#!/bin/bash
git reset --hard HEAD
git pull --force
python _restart.py;
cp -r ./static/* /usr/lib/taboca/chrome/tagvisor/content/visor/
