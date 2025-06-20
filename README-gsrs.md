

# GSRS-MONO static site

## To run

npm install
npx nx serve gsrs 

## To build 

npx nx build gsrs

## Notes

All files that would typically be edited are in libs/features/gsrs-*/src/libs

## Putting this on gsrs-webpage (construction branch)

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

## Packing up the distribution to tar gz 

```
# will write to ../temp.zip a zip of gsrs-webpage/ that excludes .git and downloads and assets/downloads/dump/*
perl package-gsrs-webpage.pl
```

## To re integrate with Tim's repo:

Copy the 2 gsrs folders 

At root update ts.config.json 

## Regular updates to the site. 
```
# To add a new data release

apps/gsrs/src/assets/data/dataReleases.json

```


## How base-href is managed

```

# In app.config.ts

import { APP_BASE_HREF } from "@angular/common";

-- Add to providers: 
{ provide: APP_BASE_HREF, useValue: '/yourbasepath/' },

# In gsrs-theme.scss 

$bash-href = '/yourbasepath/'

# In scss files, example 

background-image: url("#{$base-href}assets/gsrs-home/banner-pillcloud2.jpg");

# In project.json 

targets.build.options: 
        ...
        "baseHref": "/yourbasepath/",

(necessary?)
targets.build.configurations.production, 
targets.build.configurations.development: 
        ...
        "baseHref": "/yourbasepath/",

# make src, href links relative, examples 

<img src="assets/myimage.png" ..
<a href="assets/downloads/mydownload.xls" ...

# When serving locally (no change)

npx nx serve gsrs 

# When building

npx nx build gsrs --base-href=/yourbasepath/

```