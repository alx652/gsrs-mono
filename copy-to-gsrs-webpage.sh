shopt -s extglob 
rm -rf ../gsrs-webpage/!(downloads|assets/downloads)
cp -r dist/apps/gsrs/ ../gsrs-webpage/
cd ../gsrs-webpage
mkdir -p downloads
cp index.html downloads/index.html
