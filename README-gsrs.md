

# GSRS-MONO static site

## To run

npm install
npx nx serve gsrs 

## To build 

npx nx build gsrs

## Notes

All files that would typically be edited are in libs/features/gsrs-*/src/libs

# Putting this on gsrs-webpage (construction branch)

Delete everything except /downloads in gsrs-webpage

cp -r dist/app/gsrs/ ../gsrs-webpage/

mv gsrs-webpage/downloads assets/downloads

# To re integrate with Tim's repo:

Copy the 2 gsrs folders 

At root update ts.config.json 


