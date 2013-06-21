rm -rf ./TelaSocial/apps/base/*

cd TelaSocial 
cd builder

./1_build_installer.sh
./2_install_webapp.sh

echo '*** Check steps in installer ./TelaSocial/builder/installer ***'

