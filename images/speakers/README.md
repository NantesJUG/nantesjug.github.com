photo size: 150x150

if you have `mogrify` installed on you system, you could use this script.

NB : `mogrify` is part of the `imagemagick` suite

```
./resize.sh <photo>
```

or

```
mogrify -resize 150x150 -format jpg <photo>
```