#!/bin/bash
FILENAME="$1"
BASENAME="${FILENAME%.*}"
WIDTH=459
HEIGHT=318
TMP_PREFIX="__tmp_img"

cp "$FILENAME" "${TMP_PREFIX}.png"

# CROP
mogrify -crop "${WIDTH}:${HEIGHT}" -format png "${TMP_PREFIX}.png" # generates 1 or 2 files if cropped
if [ -f "${TMP_PREFIX}-0.png" ]; then
    mv "${TMP_PREFIX}-0.png" "${TMP_PREFIX}.png"
    rm "${TMP_PREFIX}-1.png"
fi

# RESIZE
mogrify -resize "${WIDTH}x${HEIGHT}" -format png "${TMP_PREFIX}.png"

# RENAME
mv "${TMP_PREFIX}.png" "$BASENAME.png"