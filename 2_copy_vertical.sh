rm -rf ./TelaSocial/apps/base/*

cd TelaSocial 
cd builder

./1_build_installer.sh
./2_install_webapp.sh

echo '*** MANURAL entrar no ./TelaSocial/builder/installer ***'
echo '*** e ver os 0,1,2,3.. ****' 


