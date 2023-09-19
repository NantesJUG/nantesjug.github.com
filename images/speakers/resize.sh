#!/bin/bash
FILENAME="$1"
BASENAME="${FILENAME%.*}"
WIDTH=150
HEIGHT=150
TMP_PREFIX="__tmp_img"

cp "$FILENAME" "${TMP_PREFIX}.jpg"

# CROP
mogrify -crop "${WIDTH}:${HEIGHT}" -format jpg "${TMP_PREFIX}.jpg" # generates 1 or 2 files if cropped
if [ -f "${TMP_PREFIX}-0.jpg" ]; then
    mv "${TMP_PREFIX}-0.jpg" "${TMP_PREFIX}.jpg"
    rm "${TMP_PREFIX}-1.jpg"
fi

# RESIZE
mogrify -resize "${WIDTH}x${HEIGHT}" -format jpg "${TMP_PREFIX}.jpg"

# RENAME
mv "${TMP_PREFIX}.jpg" "$BASENAME.jpg"