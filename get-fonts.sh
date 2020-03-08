#!/bin/bash

fonts=(fira-code ibm-plex-sans)


for font in ${fonts[*]}
do
	mkdir -p src/fonts/${font}
	wget -O ./${font}.zip "https://google-webfonts-helper.herokuapp.com/api/fonts/${font}?download=zip&subsets=latin&variants=500,700,regular"
	unzip ./${font}.zip -d src/fonts/${font}
	rm -rf ./${font}.zip
done
