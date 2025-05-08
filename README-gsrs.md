

# GSRS-MONO static site

## To run

npm install
npx nx serve gsrs 

## To build 

npx nx build gsrs

## Notes

All files that would typically be edited are in libs/features/gsrs-*/src/libs

# Putting this on gsrs-webpage (construction branch)

Delete everything except ./downloads in gsrs-webpage

```
# copy-to-gsrs-webpage.sh
shopt -s extglob
rm -rf ../gsrs-webpage/!(downloads)
cp -r dist/apps/gsrs/ ../gsrs-webpage/
```

If you're ok with this script: 

```
bash copy-to-gsrs-webpage.sh
```

# To re integrate with Tim's repo:

Copy the 2 gsrs folders 

At root update ts.config.json 


