rm -rf ./TelaSocial/apps/base/*
cp -r ./ifsc-horizontal/* ./TelaSocial/apps/base/

cd TelaSocial 
cd builder

./1_build_installer.sh
./2_install_webapp.sh
cd installer

echo '*** Check installer directory ***'

