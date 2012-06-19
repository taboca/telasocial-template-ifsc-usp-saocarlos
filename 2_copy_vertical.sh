rm -rf ./TelaSocial/apps/base/*
cp -r ./ifsc-vertical/* ./TelaSocial/apps/base/

cd TelaSocial 
cd builder

./1_build_installer.sh
cd installer
./install.sh

echo '*** you may also see the installer.sh and check INSTALL.TXT manual ***'

