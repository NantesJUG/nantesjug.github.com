Tailles des photos: 459x318

# Update one photo

if you have `mogrify` installed on you system, you could use this script.

NB : `mogrify` is part of the `imagemagick` suite

```
./resize.sh <filename>
```

# Update all photos

```bash
for i in *.png; do ./resize.sh $i; done
```