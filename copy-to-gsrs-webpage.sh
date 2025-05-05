shopt -s extglob 
rm -rf ../gsrs-webpage/!(downloads)
cp -r dist/apps/gsrs/ ../gsrs-webpage/
